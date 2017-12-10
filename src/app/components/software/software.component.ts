import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'software-component',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})

export class SoftwareComponent implements OnInit {
  // Member variables

  // Lifecycle methods
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    // Scroll to the top of the page every time a user navigates to this page
    window.scrollTo(0, 0);
    this.titleService.setTitle("Software - Brett Oberg");
  }

  // Accessor methods

  // General class methods  
}