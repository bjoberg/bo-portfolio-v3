// External
import { Component } from '@angular/core';

// Local
import { PortfolioGroup } from '../../models/PortfolioGroup.model';
import { PortfolioItem } from '../../models/PortfolioItem.model';
import { PhotographyPortfolio } from '../../config/photographyPortfolio.config';

@Component({
  selector: 'photography-component',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent {
  // Member variables
  private portfolio: Array<PortfolioGroup>;
  public isLoading: Boolean = true;

  // Lifecycle methods
  constructor() {
    this.loadPortfolio();
  }

  ngOnInit() {
    this.isLoading = false;
  }

  // Accessor methods
  public getPortfolio(): Array<PortfolioGroup> {
    return this.portfolio;
  }

  // General class methods  
  private loadPortfolio() {
    // create an empty portfolio
    this.portfolio = [];

    // build the portfolio
    for (var i = 0; i < PhotographyPortfolio.portfolioItems.length; i++) {
      var element = PhotographyPortfolio.portfolioItems[i];

      // Get the portfolio group
      var newPortfolioGroup = new PortfolioGroup(element.title, element.imageUrl, element.route);

      // Set the portfolio items
      let portfolioItems = [];
      for (var n = 0; n < element.items.length; n++) {
        var item = element.items[n];
        portfolioItems.push(new PortfolioItem(item.title, item.imageUrl, item.route));
      }

      // Add the items to the new portfolio group
      newPortfolioGroup.setItems(portfolioItems);

      // Add the group
      this.portfolio.push(newPortfolioGroup);
    }
  }
}