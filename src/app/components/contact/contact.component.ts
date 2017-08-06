// External
import { Component } from '@angular/core';

// Internal
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
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
}