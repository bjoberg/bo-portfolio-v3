// External
import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

// Local
import { PortfolioItem } from '../../../models/PortfolioItem.model';
import { PhotographyPortfolios } from '../../../config/photographyPortfolios.config';

@Component({
  selector: 'portfolio-group-component',
  templateUrl: './portfolioGroup.component.html',
  styleUrls: ['./portfolioGroup.component.scss']
})

export class PortfolioGroupComponent implements OnInit {
  isLoading: Boolean;
  portfolioGroupRoute: string;
  portfolioGroupTitle: string;
  portfolioGroupItems: Array<PortfolioItem>;
  portfolioGroups: Array<Object>;
  gridCols: number;

  constructor(private route: ActivatedRoute, private titleService: Title) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.calculateGridCols(window.innerWidth);

    // Get the portfolio group's route
    this.route.params.subscribe((params) => this.portfolioGroupRoute = params.portfolioGroup);

    // Build the view
    this.getPortfolioGroupTitle(this.portfolioGroupRoute);
    this.getPortfolioGroupItems(this.portfolioGroupRoute);
    this.getPortfolioGroups();

    this.titleService.setTitle(this.portfolioGroupTitle + " - Brett Oberg");

    // Stop loading the page
    this.isLoading = false;
  }
  
  @HostListener('window:resize', ['$event'])
  resize(event) {
    console.log(event.target.innerWidth);
    this.calculateGridCols(event.target.innerWidth);
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