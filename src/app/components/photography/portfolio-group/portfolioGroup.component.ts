// External
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Local
import { PortfolioItem } from '../../../models/PortfolioItem.model';
import { PhotographyPortfolios } from '../../../config/photographyPortfolios.config';

@Component({
  selector: 'portfolio-group-component',
  templateUrl: './portfolioGroup.component.html',
  styleUrls: ['./portfolioGroup.component.scss']
})

export class PortfolioGroupComponent {
  // Member variables
  public isLoading: Boolean = true;
  private portfolioGroupRoute: string;
  private portfolioGroupTitle: string;
  private portfolioGroupItems: Array<PortfolioItem>;

  // Lifecycle methods
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the portfolio group's route
    this.route.params.subscribe((params) => this.portfolioGroupRoute = params.portfolioGroup);

    // Get the portfolio group's title
    this.getPortfolioGroupTitle(this.portfolioGroupRoute);

    // Get the portgolio group's items
    this.getPortfolioGroupItems(this.portfolioGroupRoute);

    // Stop loading the page
    this.isLoading = false;
  }

  // General class methods  

  private getPortfolioGroupTitle(portfolioGroupRoute: string) {
    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var element = PhotographyPortfolios[i];
      if (element.route == this.portfolioGroupRoute) {
        this.portfolioGroupTitle = element.title;
        return;
      }
    }    
  }

  private getPortfolioGroupItems(portfolioGroupRoute: string) {
    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var element = PhotographyPortfolios[i];
      if (element.route == this.portfolioGroupRoute) {
        this.portfolioGroupItems = [];
        for (var n = 0; n < element.items.length; n++) {
          var item = element.items[n];
          this.portfolioGroupItems.push(new PortfolioItem(item.title, item.imageUrl, item.route));
        } 
      }
    }  
  }

  private getPortfolioGroups() {
    
  }
}