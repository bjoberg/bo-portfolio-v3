// External
import { Component, HostListener, OnInit, } from '@angular/core';
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
  componentIsLoading: boolean = true;
  componentHasError: boolean = false;
  error: string = null;
  portfoliosReceived: boolean = false;
  errReceivingPortfolios: boolean = false;
  portfolios: Array<ImageGroup> = null;
  gridCols: number = 2;

  constructor(private titleService: Title, private imageService: ImageService) {}

  ngOnInit() {
    // Scroll to the top of the page every time a user navigates to this page
    window.scrollTo(0, 0);
    
    // Get the portfolios
    this.getImageGroups();
  }

  ngAfterViewInit(): void {
    // console.log(this.placeholder);
}

  public loadComponent():void {
    if (this.portfoliosReceived === true) {
      this.calculateGridCols(window.innerWidth);
      this.componentIsLoading = false;
      this.componentHasError = false;
    } else if (this.errReceivingPortfolios === true) {
      this.componentIsLoading = false;
      this.componentHasError = true;
    }
  }

  public getImageGroups(): void {
    this.imageService.getAllImageGroups().then(data => {
      this.portfolios = data;
      this.titleService.setTitle("Photography - Brett Oberg");
      this.portfoliosReceived = true;
      this.loadComponent();
    }).catch(err => {
      this.errReceivingPortfolios = true;
      this.error = err;
      this.loadComponent();
    });
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

  public loadImage(data) {
    data.target.hidden = false;
  }
}