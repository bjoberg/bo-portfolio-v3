// External
import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

// Local
import { ImageService } from '../../../services/image.service';
import { Image } from '../../../classes/image';
import { DocumentRef } from '../../../services/documentRef.service';

@Component({
  selector: 'photography-portfolio',
  templateUrl: './photography-portfolio.component.html',
  styleUrls: ['./photography-portfolio.component.scss']
})

export class PhotographyPortfolioComponent implements OnInit {
  componentIsLoading: boolean = true;
  componentHasError: boolean = false;
  error: string = null;
  portfolioImagesReceived: boolean = false;
  errReceivingPortfolioImages: boolean = false;
  portfolioMetaReceived: boolean = false;
  errReceivingPortfolioMeta: boolean = false;
  portfolioRoute: string = "";
  portfolioImages: Array<Image> = [];
  portfolio = null;
  portfolioMeta = null;
  querySize: number = 10;
  currIndex: number = 0;
  gridCols: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private titleService: Title, 
    private imageService: ImageService,
    private docRef: DocumentRef) {}

  ngOnInit(): void {
    // Scroll to the top of the page every time a user navigates to this page
    //window.scrollTo(0, 0);

    // Get the route
    this.route.params.subscribe((params) => this.portfolioRoute = params.imageGroup);

    // Get the portfolio
    this.getPortfolioImages(this.querySize, this.currIndex);
    this.getPortfolioMeta();
  }

  public loadComponent(): void {
    if (this.portfolioImagesReceived === true && this.portfolioMetaReceived === true) {
      this.calculateGridCols(this.docRef.bodyWidth);
      this.componentIsLoading = false;
      this.componentHasError = false;
    } else if (this.errReceivingPortfolioImages === true || this.errReceivingPortfolioMeta === true) {
      this.componentIsLoading = false;
      this.componentHasError = true;
    }
  }

  public getPortfolioImages(batch: number, skip: number): void {
    this.imageService.getPortfolioImages(this.portfolioRoute, batch, skip).then(data => {
      this.portfolio = data;
      this.portfolioImages = this.portfolioImages.concat(this.portfolio.images);
      this.portfolioImagesReceived = true;
      this.currIndex = this.currIndex + this.querySize;
      this.loadComponent();
    }).catch(err => {
      this.errReceivingPortfolioImages = true;
      this.error = err;
      this.loadComponent();
    });
  }

  public getPortfolioMeta(): void {
    this.imageService.getPortfolioMeta(this.portfolioRoute).then(data => {
      this.portfolioMeta = data;
      this.titleService.setTitle(this.portfolioMeta.title + " - Brett Oberg");
      this.portfolioMetaReceived = true;
      this.loadComponent();
    }).catch(err => {
      this.errReceivingPortfolioMeta = true;
      this.error = err;
      this.loadComponent();
    })
  }

  public onScroll() {
    this.getPortfolioImages(this.querySize, this.currIndex);
  }
  
  @HostListener('window:resize', ['$event'])
  resize(event) {
    this.calculateGridCols(event.target.innerWidth);
  }

  private calculateGridCols(width) {
    if (width < 960) {
      this.gridCols = 1;
    } else if (width >= 960 &&  width < 1700) {
      this.gridCols = 2;
    } else if (width >= 1700 && width < 2400 ) {
      this.gridCols = 3;
    } else if (width >= 2400 ) {
      this.gridCols = 4;
    } else {
      this.gridCols = 1;
    }
  }

  public loadImage(data) {
    data.target.hidden = false;
  }
}