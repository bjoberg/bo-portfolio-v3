import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    console.log("%cHello and welcome to the brettoberg.com site console.\nI hope you enjoy the site:)", 'color: #000; line-height: 35px; font-size: 25px;');
  }
}
