// External
import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

// Local
import { ImageService } from '../../../services/image.service';
import { ImageGroup } from '../../../classes/image-group';


@Component({
  selector: 'photography-portfolio',
  templateUrl: './photography-portfolio.component.html',
  styleUrls: ['./photography-portfolio.component.scss']
})

export class PhotographyPortfolioComponent implements OnInit {
  componentIsLoading: boolean = true;
  componentHasError: boolean = false;
  error: string = null;
  portfolioReceived: boolean = false;
  errReceivingPortfolio: boolean = false;
  portfolioRoute: string = "";
  portfolio: ImageGroup = null;
  gridCols: number = 0;

  constructor(private route: ActivatedRoute, private titleService: Title, private imageService: ImageService) {}

  ngOnInit(): void {
    // Scroll to the top of the page every time a user navigates to this page
    window.scrollTo(0, 0);

    // Get the route
    this.route.params.subscribe((params) => this.portfolioRoute = params.imageGroup);

    // Get the portfolio
    this.getImageGroup();
  }

  public loadComponent(): void {
    if (this.portfolioReceived === true) {
      this.calculateGridCols(window.innerWidth);
      this.componentIsLoading = false;
      this.componentHasError = false;
    } else if (this.errReceivingPortfolio === true) {
      this.componentIsLoading = false;
      this.componentHasError = true;
    }
  }

  public getImageGroup(): void {
    this.imageService.getImageGroup(this.portfolioRoute).then(data => {
      this.portfolio = data;
      this.titleService.setTitle(this.portfolio.getTitle() + " - Brett Oberg");
      this.portfolioReceived = true;
      this.loadComponent();
    }).catch(err => {
      this.errReceivingPortfolio = true;
      this.error = err;
      this.loadComponent();
    });    
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
}