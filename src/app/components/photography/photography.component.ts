// External
import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Local
import { ImageService } from '../../services/image.service';
import { ImageGroup } from '../../classes/image-group';

@Component({
  selector: 'photography-component',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent implements OnInit {
  pageIsLoading: boolean = true;
  portfoliosReceived: boolean = false;
  portfolios: Array<ImageGroup> = null;
  gridCols: number = 2;

  constructor(private titleService: Title, private imageService: ImageService) {}

  ngOnInit() {
    // Get the portfolios
    this.imageService.getPhotographyPortfolios().then(data => {
      this.portfolios = data;
      this.titleService.setTitle("Photography - Brett Oberg");
      this.portfoliosReceived = true;
      this.loadPage();
    });
  }

  public loadPage():void {
    if(this.portfoliosReceived === true) {
      this.calculateGridCols(window.innerWidth);
      this.pageIsLoading = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  resize(event) {
    this.calculateGridCols(event.target.innerWidth);
  }

  private calculateGridCols(width) {
    if (width < 960) {
      this.gridCols = 1;
    } else if (width >= 960 &&  width < 1700) {
      this.gridCols = 2;
    } else if (width >= 1700 && width < 2400 ) {
      this.gridCols = 3;
    } else if (width >= 2400 ) {
      this.gridCols = 4;
    } else {
      this.gridCols = 1;
    }
  }
}