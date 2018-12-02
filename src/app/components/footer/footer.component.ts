// External
import { Component, OnInit  } from '@angular/core';

// Internal
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  // About
  email;

  // Social
  social;

  constructor() {}

  ngOnInit(): void {
    // Configure about data
    this.email = UserConfig.about.email;

    // Configure social data
    this.social = UserConfig.social;
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }
}
