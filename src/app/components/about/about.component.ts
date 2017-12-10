// External
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Internal
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  // Page Information
  title = "About";

  // About
  avatar;
  descriptionLong;
  descriptionShort;
  email;
  location;
  currently;

  // Social media
  social;

  // Skills
  skills;

  // Recognition
  recognition;

  constructor(private titleService: Title) {}

  ngOnInit():void  {
    // Scroll to the top of the page every time a user navigates to this page
    window.scrollTo(0, 0);

    // Configure about data
    this.avatar = UserConfig.about.avatar;
    this.descriptionLong = UserConfig.about.description_long;
    this.descriptionShort = UserConfig.about.description_short;
    this.email = UserConfig.about.email;
    this.location = UserConfig.about.location;
    this.currently = UserConfig.about.currently;

    // Configure social data
    this.social = UserConfig.social;

    // Configure skills data
    this.skills = UserConfig.skills;
    
    // Configure recognition data
    this.recognition = UserConfig.recognition;

    // Updated the decription-long 
    document.getElementById('content-description-long').innerHTML = this.descriptionLong;
    this.titleService.setTitle("About - Brett Oberg");
  }
}