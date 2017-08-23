// External
import { Component } from '@angular/core';

// Local
import { NavigationItem } from '../../models/NavigationItem.model';
import { NavigationConfig } from '../../config/navigation.config';

@Component({
  selector: 'navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
  private navigationItemList: Array<NavigationItem>;
  private mobileNavigationItemList: Array<NavigationItem>;
  private displayMobileView: Boolean;
  private breakpoint: number;
  private width: number;

  constructor() {
    this.createNavigationItems();
    this.createMobileNavigationItems();
    this.displayMobileView = false
    this.breakpoint = 650;

    // Decide what should should be displayed based on screen onResize
    this.width = window.innerWidth;
    this.setNavigationState(this.width);
  }

  /**
   * Process the NavigationConfig and create all of the navigation items.
   */
  private createNavigationItems() {
    // If navigation list is empty, initialize it
    if (this.navigationItemList === undefined) {
      this.navigationItemList = [];
    }

    // Process navigation configuration file
    NavigationConfig.navigationItems.forEach(element => {
      let navItem = new NavigationItem(element.title, element.route, new URL(element.url), element.type, element.icon);
      this.navigationItemList.push(navItem);
    });
  }

  private createMobileNavigationItems() {
      // If mobile navigation list is empty, initialize it
      if (this.mobileNavigationItemList === undefined) {
        this.mobileNavigationItemList = [];
      } 

    // Process navigation configuration file
    NavigationConfig.navigationItems.forEach(element => {
      if (element.mobile === "true") {
        let navItem = new NavigationItem(element.title, element.route, new URL(element.url), element.type, element.icon);
        this.mobileNavigationItemList.push(navItem);
      }
    });
  }

  /**
   * When the window is scaled update the navigation panel's UI.
   * 
   * @param event window resize event
   */
  private onResize(event) {
    this.setNavigationState(event.target.innerWidth);
  }

  /**
   * Set the state (desktop or mobile) of the navigation panel based on the screen width.
   * 
   * @param width current width of the screen
   */
  private setNavigationState(width: number) {
    if (width <= this.breakpoint) {
      this.displayMobileView = true;
    } else {
      this.displayMobileView = false;
    }
  }

  private validTopNavMobileViewItem(title) {
    if (title === 'Brett Oberg') {
      return true;
    } else if (title === 'About') {
      return true;
    } else {
      return false;
    }
  }
}