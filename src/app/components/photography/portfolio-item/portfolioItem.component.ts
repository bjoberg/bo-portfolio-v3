// External
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Local
import { PortfolioItem } from '../../../models/PortfolioItem.model';
import { PhotographyPortfolios } from '../../../config/photographyPortfolios.config';

@Component({
  selector: 'portfolio-item-component',
  templateUrl: './portfolioItem.component.html',
  styleUrls: ['./portfolioItem.component.scss']
})

export class PortfolioItemComponent {
  // Member variables
  private portfolioGroupRoute: String;
  private portfolioItemRoute: String;
  private portfolioItem: PortfolioItem;
  private isLoading: Boolean = true;

  // Lifecycle methods
  constructor(private route: ActivatedRoute) {
    // Get the portfolio group's route
    this.route.params.subscribe((params) => this.portfolioGroupRoute = params.portfolioGroup);

    // Get the portfolio group's item
    this.route.params.subscribe((params) => this.portfolioItemRoute = params.portfolioItem);

    // Load the item based on the incoming routes
    this.loadPortfolioItem(this.portfolioGroupRoute, this.portfolioItemRoute);
  }

  ngOnInit() {
    this.isLoading = false;
  }

  // General class methods  
  private loadPortfolioItem(groupRoute, itemRoute) {
    // Get the item
    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var group = PhotographyPortfolios[i];

      // Check for a valid group
      if (group.route == this.portfolioGroupRoute) {
        for (var n = 0; n < group.items.length; n++) {
          var item = group.items[n]; 

          // Check for a valid item
          if (item.route == this.portfolioItemRoute) {
            this.portfolioItem = new PortfolioItem(item.title, item.imageUrl, item.route);
          }
        }
      }
    }
  }
}