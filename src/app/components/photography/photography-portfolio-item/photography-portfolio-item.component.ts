// External
import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

// Local
import { ImageService } from '../../../services/image.service';
import { Image } from '../../../classes/image';
import { browser } from 'protractor';

@Component({
  selector: 'photography-portfolio-item',
  templateUrl: './photography-portfolio-item.component.html',
  styleUrls: ['./photography-portfolio-item.component.scss']
})

export class PhotographyPortfolioItemComponent implements OnInit {
  pageIsLoading: boolean = true;
  imageReceived: boolean = false;
  nextItemReceived: boolean = false;
  prevItemReceived: boolean = false;
  loadingImage: boolean = true;
  hasNext: boolean = false;
  hasPrev: boolean = false;
  imageGroupRoute: string = "";
  imageRoute: string = "";
  image: Image = null;
  nextImageRoute: number = null;
  prevImageRoute: number = null;

  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title, private imageService: ImageService) { }

  ngOnInit(): void {
    // Get the routes
    this.getRoutes();

    // Get the portfolio item
    this.getImage(this.imageGroupRoute, this.imageRoute);
    this.getNextImageRoute(this.imageGroupRoute, this.imageRoute);
    this.getPrevImageRoute(this.imageGroupRoute, this.imageRoute);
  }

  public getRoutes(): void {
    this.route.params.subscribe((params) => this.imageGroupRoute = params.imageGroup);
    this.route.params.subscribe((params) => this.imageRoute = params.image);
  }

  public setRoute(imageGroupRoute: string, imageRoute: string): void {
    this.router.navigate(['/photography/' + imageGroupRoute + "/" + imageRoute]);
  }

  public getImage(imageGroupRoute: string, imageRoute: string): void {
    // TODO: Add error checking
    this.imageService.getImage(imageGroupRoute, parseInt(imageRoute)).then(data => {
      // TODO: What if data is null
      this.image = data;
      this.titleService.setTitle(this.image.getTitle() + " - Brett Oberg");
      this.imageReceived = true;
      this.loadPage();
    });
  }

  public getNextImageRoute(imageGroupRoute: string, imageRoute: string): void {
    // TODO: Add error checking
    this.imageService.getNextImageRoute(imageGroupRoute, parseInt(imageRoute)).then(data => {
      // TODO: What if data is null
      this.nextImageRoute = data;
      this.nextItemReceived = true;
      if (data !== null) {
        this.hasNext = true;
      } else {
        this.hasNext = false;
      }
      this.loadPage();
    });
  }

  public getPrevImageRoute(imageGroupRoute: string, imageRoute: string): void {
    // TODO: Add error checking
    this.imageService.getPrevImageRoute(imageGroupRoute, parseInt(imageRoute)).then(data => {
      // TODO: What if data is null
      this.prevImageRoute = data;
      this.prevItemReceived = true;
      if (data !== null) {
        this.hasPrev = true;
      } else {
        this.hasPrev = false;
      }
      this.loadPage();
    });
  }

  public loadPage(): void {
    if (this.imageReceived === true && this.nextItemReceived === true && this.prevItemReceived === true) {
      this.pageIsLoading = false;
      this.loadingImage = false;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKey(event: KeyboardEvent) {
    event.preventDefault();
    event.returnValue = false;
    switch (event.keyCode) {
      case 39: // Right
        if (this.nextImageRoute !== null) {
          this.navNext();
        }
        break;
      case 37: // Left
        if (this.prevImageRoute !== null) {
          this.navPrev();
        }
        break; 
      case 27: // Escape
        this.navClose();
        break;
      default:
        break;
    }
  }

  public navNext(): void {
    this.loadingImage = true;
    this.setRoute(this.imageGroupRoute, this.nextImageRoute.toString());
    this.getImage(this.imageGroupRoute, this.nextImageRoute.toString());
    this.getNextImageRoute(this.imageGroupRoute, this.nextImageRoute.toString());
    this.getPrevImageRoute(this.imageGroupRoute, this.nextImageRoute.toString());
  }

  public navPrev(): void {
    this.loadingImage = true;
    this.setRoute(this.imageGroupRoute, this.prevImageRoute.toString());
    this.getImage(this.imageGroupRoute, this.prevImageRoute.toString());
    this.getNextImageRoute(this.imageGroupRoute, this.prevImageRoute.toString());
    this.getPrevImageRoute(this.imageGroupRoute, this.prevImageRoute.toString());    
  }

  public navClose(): void {
    this.setRoute(this.imageGroupRoute, "");
  }
}