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
  private title = "About";

  // About
  private avatar;
  private descriptionLong;
  private descriptionShort;
  private email;
  private location;
  private currently;

  // Social media
  private social;

  // Skills
  private skills;

  // Recognition
  private recognition;

  constructor(private titleService: Title) {
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
  }

  ngOnInit():void  {
    // Updated the decription-long 
    document.getElementById('content-description-long').innerHTML = this.descriptionLong;
    this.titleService.setTitle("About - Brett Oberg");
  }
}