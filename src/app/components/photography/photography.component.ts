// External
import { Component } from '@angular/core';

// Local
import { PortfolioGroup } from '../../models/PortfolioGroup.model';
import { PhotographyPortfolios } from '../../config/photographyPortfolios.config';

@Component({
  selector: 'photography-component',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent {
  // Member variables
  private portfolioGroups: Array<PortfolioGroup>;
  private isLoading: Boolean = true;

  // Lifecycle methods
  constructor() {
    this.loadPortfolioGroups();
  }

  ngOnInit() {
    this.isLoading = false;
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
}