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
  // Page state
  componentIsLoading: boolean = true;
  componentHasError: boolean = false;
  error: string = null;

  // Image state
  imageReceived: boolean = false;
  errReceivingImage: boolean = false;

  // Next item state
  nextItemReceived: boolean = false;
  errReceivingNextItem: boolean = false;

  // Previous item state
  prevItemReceived: boolean = false;
  errReceivingPrevItem: boolean = false;

  // Other
  hasNext: boolean = false;
  hasPrev: boolean = false;
  imageGroupRoute: string = "";
  imageRoute: string = "";
  image: Image = null;
  nextImageRoute: number = null;
  prevImageRoute: number = null;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title, private imageService: ImageService) { }

  ngOnInit(): void {
    // Scroll to the top of the page every time a user navigates to this page
    window.scrollTo(0, 0);

    // Get the routes
    this.getRoutes();

    // Get the portfolio item
    this.getImage(this.imageGroupRoute, this.imageRoute);
    this.getNextImageRoute(this.imageGroupRoute, this.imageRoute);
    this.getPrevImageRoute(this.imageGroupRoute, this.imageRoute);
  }

  public loadComponent(): void {
    if (this.imageReceived === true && this.nextItemReceived === true && this.prevItemReceived === true) {
      this.componentIsLoading = false;
      this.componentHasError = false;
    } else if (this.errReceivingImage === true || this.errReceivingNextItem === true || this.errReceivingPrevItem === true) {
      this.componentIsLoading = false;
      this.componentHasError = true;
    }
  }

  public getRoutes(): void {
    this.route.params.subscribe((params) => this.imageGroupRoute = params.imageGroup);
    this.route.params.subscribe((params) => this.imageRoute = params.image);
  }

  public setRoute(imageGroupRoute: string, imageRoute: string): void {
    this.router.navigate(['/photography/' + imageGroupRoute + "/" + imageRoute]);
  }

  public getImage(imageGroupRoute: string, imageRoute: string): void {
    this.imageService.getImage(imageGroupRoute, parseInt(imageRoute)).then(data => {
      if (data !== null && data !== undefined) {
        this.image = data;
        this.titleService.setTitle(this.image.getTitle() + " - Brett Oberg");
        this.imageReceived = true;
        this.loadComponent();
      } else {
        this.errReceivingImage = true;
        this.error = "getImage data === null";
        this.loadComponent();          
      }
    }).catch(err => {
      this.errReceivingImage = true;
      this.error = err;
      this.loadComponent();      
    });
  }

  public getNextImageRoute(imageGroupRoute: string, imageRoute: string): void {
    this.imageService.getNextImageRoute(imageGroupRoute, parseInt(imageRoute)).then(data => {
      this.nextImageRoute = data;
      this.nextItemReceived = true;
      if (data !== null) {
        this.hasNext = true;
      } else {
        this.hasNext = false;
      }
      this.loadComponent();
    }).catch(err => {
      this.errReceivingNextItem = true;
      this.error = err;
      this.loadComponent();         
    });
  }

  public getPrevImageRoute(imageGroupRoute: string, imageRoute: string): void {
    this.imageService.getPrevImageRoute(imageGroupRoute, parseInt(imageRoute)).then(data => {
      this.prevImageRoute = data;
      this.prevItemReceived = true;
      if (data !== null) {
        this.hasPrev = true;
      } else {
        this.hasPrev = false;
      }
      this.loadComponent();
    }).catch(err => {
      this.errReceivingPrevItem = true;
      this.error = err;
      this.loadComponent();       
    });
  }

  @HostListener('window:keydown', ['$event'])
  onKey(event: KeyboardEvent) {
    event.preventDefault();
    event.returnValue = false;
    switch (event.keyCode) {
      case 39: // Right
        this.navNext();
        break;
      case 37: // Left
        this.navPrev();
        break; 
      case 27: // Escape
        this.navClose();
        break;
      default:
        break;
    }
  }

  public swipe(action) {
    switch (action) {
      case this.SWIPE_ACTION.LEFT:
        this.navNext();      
        break;
      case this.SWIPE_ACTION.RIGHT:
        this.navPrev();      
        break;    
      default:
        break;
    }
  }

  public navNext(): void {
    if (this.nextImageRoute !== null) {
      this.setRoute(this.imageGroupRoute, this.nextImageRoute.toString());
      this.getImage(this.imageGroupRoute, this.nextImageRoute.toString());
      this.getNextImageRoute(this.imageGroupRoute, this.nextImageRoute.toString());
      this.getPrevImageRoute(this.imageGroupRoute, this.nextImageRoute.toString());
    }
  }

  public navPrev(): void {
    if (this.prevImageRoute !== null) {
      this.setRoute(this.imageGroupRoute, this.prevImageRoute.toString());
      this.getImage(this.imageGroupRoute, this.prevImageRoute.toString());
      this.getNextImageRoute(this.imageGroupRoute, this.prevImageRoute.toString());
      this.getPrevImageRoute(this.imageGroupRoute, this.prevImageRoute.toString());
    }    
  }

  public navClose(): void {
    this.setRoute(this.imageGroupRoute, "");
  }
}