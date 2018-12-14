import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'software-component',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})

export class SoftwareComponent implements OnInit {

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Software - Brett Oberg');
  }
}
