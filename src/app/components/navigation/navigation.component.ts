import { Component, HostListener, OnInit } from '@angular/core';
import { DocumentRef } from '../../services/documentRef.service';
import { NavigationItem } from '../../classes/navigation-item';
import { NavigationConfig } from '../../config/navigation.config';

@Component({
  selector: 'navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  public desktopNavigationItemList: Array<NavigationItem> = NavigationConfig;
  public mobileNavigationItemList: Array<NavigationItem>;
  public displayMobileView: Boolean;
  private breakpoint = 960;

  constructor(private docRef: DocumentRef) { }

  ngOnInit() {
    this.mobileNavigationItemList = this.getMobileNavigationItemList(NavigationConfig);
    this.displayMobileView = this.displayMobile(this.docRef.bodyWidth);
  }

  /**
   * When the window is scaled update the view.
   * @param event window resize event
   */
  @HostListener('window:resize', ['$event'])
  resize(event): void {
    if (event && event.target) {
      this.displayMobileView = this.displayMobile(event.target.innerWidth);
    }
  }

  /**
   * Search through an Array of NavigationItems for what should be displayed on the mobile UI
   * @param navItems Array of NavigationItems to search through
   */
  public getMobileNavigationItemList(navItems: Array<NavigationItem>): Array<NavigationItem> {
    const nav: Array<NavigationItem> = [];
    if (navItems) {
      navItems.forEach(element => {
        if (element.isMobile) { nav.push(element); }
      });
    }
    return nav;
  }

  /**
   * Check to see if the mobile UI should be displayed.
   * @param width current width of the screen
   */
  public displayMobile(width: number): Boolean {
    if (width <= this.breakpoint) { return true; }
    return false;
  }
}
