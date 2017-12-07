import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PortfolioGroup } from '../../models/PortfolioGroup.model';
import { PhotographyPortfolios } from '../../config/photographyPortfolios.config';

@Component({
  selector: 'photography-component',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent implements OnInit {
  portfolioGroups: Array<PortfolioGroup>;
  isLoading: Boolean = true;
  gridCols: number;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.loadPortfolioGroups();
    this.calculateGridCols(window.innerWidth);
    this.titleService.setTitle("Photography - Brett Oberg");
    this.isLoading = false;
  }

  @HostListener('window:resize', ['$event'])
  resize(event) {
    this.calculateGridCols(event.target.innerWidth);
  }

  // General class methods  
  private loadPortfolioGroups() {
    // create an empty portfolio
    this.portfolioGroups = [];

    // build the portfolio
    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var element = PhotographyPortfolios[i];

      // Get the portfolio group
      var newPortfolioGroup = new PortfolioGroup(element.title, element.imageUrl, element.route);

      // Add the group
      this.portfolioGroups.push(newPortfolioGroup);
    }
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