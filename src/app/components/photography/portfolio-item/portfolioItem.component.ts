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
  private isLoading: Boolean = true;
  private portfolioGroupRoute: String;
  private portfolioItemRoute: String;
  private portfolioItem: PortfolioItem;
  private nextPortfolioItemRoute: number;
  private prevPortfolioItemRoute: number;
  private hasPrev: Boolean;
  private hasNext: Boolean;

  constructor(private route: ActivatedRoute, private cdRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.portfolioGroupRoute = "";
    this.portfolioItemRoute = "";
    this.portfolioItem = null;

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
    event.preventDefault();
    console.log("Default Prevented? " + event.defaultPrevented);
    switch (event.keyCode) {
      case 39: // Right
        if (this.nextPortfolioItemRoute !== undefined) {
          window.location.replace('/photography/' + this.portfolioGroupRoute + '/' + this.nextPortfolioItemRoute);
        }
        break;
      case 37: // Left
        if (this.prevPortfolioItemRoute !== undefined) {
          window.location.replace('/photography/' + this.portfolioGroupRoute + '/' + this.prevPortfolioItemRoute);
        }
        break; 
      case 27: // Escape
        window.location.replace('/photography/' + this.portfolioGroupRoute);
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
          if (item.id == itemRoute) {
            this.portfolioItem = new PortfolioItem(item.id, item.title, item.imageUrl);
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
          if (item.id == currItem) {
            if (n != (group.items.length - 1)) {
              this.hasNext = true;
              this.nextPortfolioItemRoute = group.items[n+1].id;
            } else {
              this.hasNext = false;
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
          if (item.id == currItem) {
            if (n != 0) {
              this.hasPrev = true;
              this.prevPortfolioItemRoute = group.items[n-1].id;
            } else {
              this.hasPrev = false;
            }
          }
        }
      }
    }
  }
}