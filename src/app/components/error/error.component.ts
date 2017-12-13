import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-component',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() error: Error;

  constructor() { }

  ngOnInit() {
  }
}
