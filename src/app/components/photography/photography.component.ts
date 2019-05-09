import { Component, HostListener, OnInit, } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ImageService } from '../../services/image.service';
import { ImageGroup } from '../../classes/image-group';
import { DocumentRef } from '../../services/documentRef.service';

@Component({
  selector: 'photography-component',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent implements OnInit {
  public portfoliosReceived = false;
  public portfolios: Array<ImageGroup> = null;
  public gridCols = 2;

  constructor(
    private titleService: Title,
    private imageService: ImageService,
    private docRef: DocumentRef) {}

  ngOnInit() {
    this.titleService.setTitle('Photography - Brett Oberg');
    this.getImageGroups();
  }

  /**
   * When the window is scaled update the view.
   * @param event window resize event
   */
  @HostListener('window:resize', ['$event'])
  public resize(event) {
    if (event && event.target) {
      this.calculateGridCols(event.target.innerWidth);
    }
  }

  public getImageGroups(): void {
    this.imageService.getAllImageGroups().then(data => {
      this.portfolios = data;
      this.portfoliosReceived = true;
      this.loadComponent();
    }).catch(err => {
      this.loadComponent();
    });
  }

  public loadComponent(): void {
    if (this.portfoliosReceived === true) {
      this.calculateGridCols(this.docRef.bodyWidth);
    }
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
