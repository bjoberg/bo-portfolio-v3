import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private title: string = "Brett Oberg";

  constructor() {
    this.title = "Brett Oberg"
  }

  public getTitle() : string {
    return this.title
  }
}
