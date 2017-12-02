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
  private isLoading: Boolean;
  private portfolioGroupRoute: string;
  private portfolioGroupTitle: string;
  private portfolioGroupItems: Array<PortfolioItem>;
  private portfolioGroups: Array<Object>;

  constructor(private route: ActivatedRoute) {
    this.isLoading = true;
  }

  ngOnInit() {
    // Get the portfolio group's route
    this.route.params.subscribe((params) => this.portfolioGroupRoute = params.portfolioGroup);

    // Build the view
    this.getPortfolioGroupTitle(this.portfolioGroupRoute);
    this.getPortfolioGroupItems(this.portfolioGroupRoute);
    this.getPortfolioGroups();

    // Stop loading the page
    this.isLoading = false;
  }
  
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
          this.portfolioGroupItems.push(new PortfolioItem(item.id, item.title, item.imageUrl));
        } 
      }
    }  
  }

  private getPortfolioGroups() {
    this.portfolioGroups = [];
    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var element = PhotographyPortfolios[i];
      this.portfolioGroups.push({title: element.title, route: element.route});
    }
  }
}