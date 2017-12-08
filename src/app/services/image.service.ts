// External
import { Injectable } from '@angular/core';

// Classes
import { Image } from '../classes/image';
import { ImageGroup } from '../classes/image-group';

// Data
import { PhotographyPortfolios } from '../config/photographyPortfolios.config';

@Injectable()
export class ImageService {

  constructor() { }

  /**
   * Get an image group made up of a specific photography portfolio.
   * 
   * @param route a specific photography portfolio route
   * @return a promise with and ImageGroup if the route exists; otherwise null
   */
  public async getPhotographyPortfolio(route: string): Promise<ImageGroup> {
    let portfolio: ImageGroup = null;

    for(let i = 0; i < PhotographyPortfolios.length; i++) {
      if (PhotographyPortfolios[i].route === route) {
        let group = PhotographyPortfolios[i];
        let images = this.getPhotographyPortfolioImages(route);
        portfolio = new ImageGroup(group.id, group.title, group.imageUrl, group.route, images);
      }
    }

    return portfolio;
  } 

  /**
   * Get the group of Images correlated to a specific portfolio.
   * 
   * @param route a specific photography portfolio route
   * @return an array of Images if the route exists; otherwise null
   */
  public getPhotographyPortfolioImages(route: string): Array<Image> {
    let images = null;

    for(let i = 0; i < PhotographyPortfolios.length; i++) {
      if (PhotographyPortfolios[i].route === route) {
        let group = PhotographyPortfolios[i];
        images = [];
        for(let n = 0; n < group.items.length; n++) {
          let image = group.items[n];
          images.push(new Image(image.id, image.title, image.imageUrl));
        }
      }
    }

    return images;
  }

  /**
   * Get an image within a specific photography portfolio
   * 
   * @param portfolioRoute a route for a specific photography portfolio
   * @param imageId the id of a specific image
   */
  public async getPhotographyPortfolioImage(portfolioRoute: string, imageId: number): Promise<Image> {
    let image = null;

    for(let i = 0; i < PhotographyPortfolios.length; i++) {
      if (PhotographyPortfolios[i].route === portfolioRoute) {
        let group = PhotographyPortfolios[i];
        for(let n = 0; n < group.items.length; n++) {
          let item = group.items[n];
          if(item.id === imageId) {
            image = new Image(item.id, item.title, item.imageUrl);
          }
        }
      }
    }    

    return image;
  }

  /**
   * Get the id of the next image in the photography portfolio
   * 
   * @param portfolioRoute a route for a specific photogrpahy portfolio
   * @param imageId the id of a specific image
   */
  public async getNextPhotographyPortfolioImageRoute(portfolioRoute: string, imageId: number): Promise<number> {
    let route = null;
    
    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var group = PhotographyPortfolios[i];
      if (group.route === portfolioRoute) {
        for (var n = 0; n < group.items.length; n++) {
          var image = group.items[n]; 
          if (image.id == imageId) {
            if (n !== (group.items.length - 1)) {
              route = group.items[n+1].id;
            }
          }
        }
      }
    }

    return route;
  }

  /**
   * Get the id of the previous image in the photography portfolio
   * 
   * @param portfolioRoute a route for a specific photography portfolio
   * @param imageId the id of a specific image
   */
  public async getPrevPhotographyPortfolioImageRoute(portfolioRoute: string, imageId: number): Promise<number> {
    let route = null;

    for (var i = 0; i < PhotographyPortfolios.length; i++) {
      var group = PhotographyPortfolios[i];
      if (group.route == portfolioRoute) {
        for (var n = 0; n < group.items.length; n++) {
          var item = group.items[n]; 
          if (item.id === imageId) {
            if (n !== 0 && n !== group.items.length - 1) {
              route = group.items[n-1].id;
            }
          }
        }
      }
    }

    return route;
  }
}
