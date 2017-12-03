import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

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
    this.titleService.setTitle("Software - Brett Oberg");
  }

  // Accessor methods

  // General class methods  
}