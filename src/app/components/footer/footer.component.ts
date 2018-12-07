import { Component, OnInit  } from '@angular/core';
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  email: String;
  social: Object[];

  constructor() {
    this.email = UserConfig.about.email;
    this.social = UserConfig.social;
  }

  /**
   * Get the current year
   * @returns the current year
   */
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
