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
  private navigationItemList;
  private displayDesktop: Boolean = false;
  private breakpoint: Number = 650;

  constructor() {
    // Create the navigation items
    this.createNavigationItems();

    // Decide what should should be displayed based on screen onResize
    let width = window.innerWidth;
    this.setNavigationState(width);
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
      this.displayDesktop = true;
    } else {
      this.displayDesktop = false;
    }
  }
}