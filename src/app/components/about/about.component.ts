// External
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Internal
import { DocumentRef } from '../../services/documentRef.service';
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  // Page state
  componentIsLoading: boolean = true;
  componentHasError: boolean = false;
  error: string = null;

  // Page Information
  title = "About";
  avatar: string = "";
  descriptionLong: string = "";
  descriptionShort: string = "";
  email: string = "";
  location: string = "";
  currently: string = "";
  social: Array<Object> = [];
  skills: Array<Object> = [];
  recognition: Array<Object> = [];

  constructor(
    private titleService: Title,
    private docRef: DocumentRef) {}

  ngOnInit():void  {
    // window.scrollTo(0, 0);
    this.titleService.setTitle("About - Brett Oberg");
    this.getUserInformation();
  }
  
  ngAfterViewChecked(): void {
    let el  = this.docRef.nativeElement.getElementById('content-description-long');

    if (el !== null && el !== undefined) {
      el.innerHTML = this.descriptionLong;
    }
  }

  public getUserInformation(): void {
    // Get the data
    this.avatar = UserConfig.about.avatar;
    this.descriptionLong = UserConfig.about.description_long;
    this.descriptionShort = UserConfig.about.description_short;
    this.email = UserConfig.about.email;
    this.location = UserConfig.about.location;
    this.currently = UserConfig.about.currently;
    this.social = UserConfig.social;
    this.skills = UserConfig.skills;
    this.recognition = UserConfig.recognition;

    // Load the page
    this.componentIsLoading = false;
    this.componentHasError = false;
  }
}