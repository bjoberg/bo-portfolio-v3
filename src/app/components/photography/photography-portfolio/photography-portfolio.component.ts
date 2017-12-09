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
  pageIsLoading: boolean = true;
  portfolioReceived: boolean = false;
  portfolioRoute: string = "";
  portfolio: ImageGroup = null;
  gridCols: number = 0;

  constructor(private route: ActivatedRoute, private titleService: Title, private imageService: ImageService) {}

  ngOnInit(): void {
    // Get the route
    this.route.params.subscribe((params) => this.portfolioRoute = params.portfolio);

    // Get the portfolio
    this.imageService.getImageGroup(this.portfolioRoute).then(data => {
      this.portfolio = data;
      this.titleService.setTitle(this.portfolio.getTitle() + " - Brett Oberg");
      this.portfolioReceived = true;
      this.loadPage();
    });
  }

  public loadPage(): void {
    if (this.portfolioReceived === true) {
      this.calculateGridCols(window.innerWidth);
      this.pageIsLoading = false;
    }
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