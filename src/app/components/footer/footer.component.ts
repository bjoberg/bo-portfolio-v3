// External
import { Component } from '@angular/core';

// Internal
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  // About
  private email;

  // Social 
  private social;

  constructor() {
    // Configure about data
    this.email = UserConfig.about.email;

    // Configure social data
    this.social = UserConfig.social;
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }
}