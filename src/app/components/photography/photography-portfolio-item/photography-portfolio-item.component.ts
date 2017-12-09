// External
import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

// Local
import { ImageService } from '../../../services/image.service';
import { Image } from '../../../classes/image';

@Component({
  selector: 'photography-portfolio-item',
  templateUrl: './photography-portfolio-item.component.html',
  styleUrls: ['./photography-portfolio-item.component.scss']
})

export class PhotographyPortfolioItemComponent implements OnInit {
  pageIsLoading: boolean = true;
  portfolioItemReceived: boolean = false;
  nextItemReceived: boolean = false;
  prevItemReceived: boolean = false;
  hasNext: boolean = false;
  hasPrev: boolean = false;
  portfolioRoute: string = "";
  portfolioItemRoute: string = "";
  portfolioItem: Image = null;
  nextPortfolioItemRoute: number = null;
  prevPortfolioItemRoute: number = null;

  constructor(private route: ActivatedRoute, private titleService: Title, private imageService: ImageService) { }

  ngOnInit(): void {
    // Get the routes
    this.route.params.subscribe((params) => this.portfolioRoute = params.portfolio);
    this.route.params.subscribe((params) => this.portfolioItemRoute = params.portfolioItem);

    // Get the portfolio item
    // TODO: Add error checking
    this.imageService.getImage(this.portfolioRoute, parseInt(this.portfolioItemRoute)).then(data => {
      // TODO: What if data is null
      this.portfolioItem = data;
      this.titleService.setTitle(this.portfolioItem.getTitle() + " - Brett Oberg");
      this.portfolioItemReceived = true;
      this.loadPage();
    });

    this.imageService.getNextImageRoute(this.portfolioRoute, parseInt(this.portfolioItemRoute)).then(data => {
      // TODO: What if data is null
      this.nextPortfolioItemRoute = data;
      this.nextItemReceived = true;
      if(data !== null) {
        this.hasNext = true;
      }
      this.loadPage();
    });

    this.imageService.getPrevImageRoute(this.portfolioRoute, parseInt(this.portfolioItemRoute)).then(data => {
      // TODO: What if data is null
      this.prevPortfolioItemRoute = data;
      this.prevItemReceived = true;
      if(data !== null) {
        this.hasPrev = true;
      }
      this.loadPage();
    });
  }

  public loadPage(): void {
    if(this.portfolioItemReceived === true && this.nextItemReceived === true && this.prevItemReceived === true) {
      this.pageIsLoading = false;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKey(event: KeyboardEvent) {
    event.preventDefault();
    event.returnValue = false;
    switch (event.keyCode) {
      case 39: // Right
        if (this.nextPortfolioItemRoute !== null) {
          window.location.replace('/photography/' + this.portfolioRoute + '/' + this.nextPortfolioItemRoute);
        }
        break;
      case 37: // Left
        if (this.prevPortfolioItemRoute !== null) {
          window.location.replace('/photography/' + this.portfolioRoute + '/' + this.prevPortfolioItemRoute);
        }
        break; 
      case 27: // Escape
        window.location.replace('/photography/' + this.portfolioRoute);
        break;
      default:
        break;
    }
  }
}