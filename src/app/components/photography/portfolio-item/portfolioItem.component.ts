// External
import { Component, HostListener,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Local
import { PortfolioItem } from '../../../models/PortfolioItem.model';
import { PhotographyPortfolios } from '../../../config/photographyPortfolios.config';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'portfolio-item-component',
  templateUrl: './portfolioItem.component.html',
  styleUrls: ['./portfolioItem.component.scss']
})

export class PortfolioItemComponent implements OnInit {
  private isLoading: Boolean;
  private portfolioGroupRoute: String;
  private portfolioItemRoute: String;
  private portfolioItem: PortfolioItem;
  private nextPortfolioItemRoute: String;
  private prevPortfolioItemRoute: String;

  constructor(private route: ActivatedRoute, private cdRef:ChangeDetectorRef) {
    //this.isLoading = true;
   }

  ngOnInit(): void {
    //this.isLoading = true;
    this.portfolioGroupRoute = "";
    this.portfolioItemRoute = "";
    this.portfolioItem = null;
    this.nextPortfolioItemRoute = "";
    this.prevPortfolioItemRoute = "";

    // Get the route parameters
    this.route.params.subscribe((params) => this.portfolioGroupRoute = params.portfolioGroup);
    this.route.params.subscribe((params) => this.portfolioItemRoute = params.portfolioItem);

    // Build the view
    this.loadPortfolioItem(this.portfolioGroupRoute, this.portfolioItemRoute);
  }

  ngAfterViewInit(): void {
    this.getNextPortfolioItemRoute(this.portfolioGroupRoute, this.portfolioItemRoute);
    this.getPrevPortfolioItemRoute(this.portfolioGroupRoute, this.portfolioItemRoute);

    // Stop loading the page
    this.isLoading = false;
    this.cdRef.detectChanges();
  }

  @HostListener('window:keyup', ['$event'])
  onKey(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowRight":
        window.location.replace('/photography/' + this.portfolioGroupRoute + '/' + this.nextPortfolioItemRoute);
        break;
      case "ArrowLeft":
        window.location.replace('/photography/' + this.portfolioGroupRoute + '/' + this.prevPortfolioItemRoute);
        break;   
      default:
        break;
    }
  }

  private loadPortfolioItem(groupRoute, itemRoute) {
    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var group = PhotographyPortfolios[i];
      if (group.route == groupRoute) {
        for (var n = 0; n < group.items.length; n++) {
          var item = group.items[n]; 
          if (item.route == itemRoute) {
            this.portfolioItem = new PortfolioItem(item.title, item.imageUrl, item.route);
          }
        }
      }
    }
  }

  private getNextPortfolioItemRoute(groupRoute, currItem) {
    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var group = PhotographyPortfolios[i];
      if (group.route == groupRoute) {
        for (var n = 0; n < group.items.length; n++) {
          var item = group.items[n]; 
          if (item.route == currItem) {
            if (n != (group.items.length - 1)) {
              this.nextPortfolioItemRoute = group.items[n+1].route;
            }
          }
        }
      }
    }
  }

  private getPrevPortfolioItemRoute(groupRoute, currItem) {
    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var group = PhotographyPortfolios[i];
      if (group.route == groupRoute) {
        for (var n = 0; n < group.items.length; n++) {
          var item = group.items[n]; 
          if (item.route == currItem) {
            if (n != 0) {
              this.prevPortfolioItemRoute = group.items[n-1].route;
            }
          }
        }
      }
    }
  }
}