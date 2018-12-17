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
  public avatar: String = UserConfig.about.avatar;
  public descriptionLong: String = UserConfig.about.description_long;
  public descriptionShort: String = UserConfig.about.description_short;
  public email: String = UserConfig.about.email;
  public location: String = UserConfig.about.location;
  public job: String = UserConfig.about.job;
  public social: Array<Object> = UserConfig.social;
  public skills: Array<Object> = UserConfig.skills;
  public recognition: Array<Object> = UserConfig.recognition;

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
