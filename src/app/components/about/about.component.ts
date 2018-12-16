import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DocumentRef } from '../../services/documentRef.service';
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit, AfterViewChecked {
  private avatar: String = UserConfig.about.avatar;
  private descriptionLong: String = UserConfig.about.description_long;
  private descriptionShort: String = UserConfig.about.description_short;
  private email: String = UserConfig.about.email;
  private location: String = UserConfig.about.location;
  private job: String = UserConfig.about.job;
  private social: Array<Object> = UserConfig.social;
  private skills: Array<Object> = UserConfig.skills;
  private recognition: Array<Object> = UserConfig.recognition;

  constructor(private titleService: Title, private docRef: DocumentRef) {}

  ngOnInit(): void  {
    this.titleService.setTitle('About - Brett Oberg');
  }

  ngAfterViewChecked(): void {
    const el  = this.docRef.nativeElement.getElementById('about--content-description-long');

    if (el !== null && el !== undefined) {
      el.innerHTML = this.descriptionLong;
    }
  }
}
