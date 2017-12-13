import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  pageIsLoading: boolean = true;
  pageHasError: boolean = false;
  routeDataReceived: boolean = false;
  errReceivingRouteData: boolean = false;
  error: Error = null;
  imageGroupRoutes: Array<string>;

  constructor(private router: Router, private imageService: ImageService) {}

  ngOnInit(): void {
    this.getImageRoutes();
  }

  public getImageRoutes(): void {
    this.imageService.getAllImageGroupRoutes().then(data => {
      this.imageGroupRoutes = data;
      this.routeDataReceived = true;
      this.loadModule();
    }).catch(err => {
      this.errReceivingRouteData = true;
      this.error = err;
      this.loadModule();
    });    
  }

  public loadModule(): void {
    if (this.routeDataReceived === true) {
      this.pageIsLoading = false;
      this.pageHasError = false;
    } else if (this.errReceivingRouteData === true) {
      this.pageIsLoading = false;
      this.pageHasError = true;
    }
  }

  public hide() {
    let urlComponents = this.router.url.split('/');
    if (this.imageGroupRoutes !== null && this.imageGroupRoutes !== undefined) {
      for(let i = 0; i < this.imageGroupRoutes.length; i++) {
        let item = this.imageGroupRoutes[i];
        if (this.router.url.includes("/photography/" + item)) {
          if (urlComponents.length === 4) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
