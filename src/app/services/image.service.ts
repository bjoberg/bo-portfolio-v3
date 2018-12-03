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

  public async getAllImageGroupRoutes(): Promise<Array<string>> {
    let imageGroupRoutes = null;

    if (PhotographyPortfolios.length >= 0) {
      imageGroupRoutes = [];
      for (let i = 0; i < PhotographyPortfolios.length; i++) {
        const group = PhotographyPortfolios[i];
        imageGroupRoutes.push(group.route);
      }
    }

    return imageGroupRoutes;
  }

  /**
   * Get all of the photography portfolio image groups
   */
  public async getAllImageGroups(): Promise<Array<ImageGroup>> {
    let portfolioGroups: Array<ImageGroup> = null;

    if (PhotographyPortfolios.length >= 0) {
      portfolioGroups = [];
      for (let i = 0; i < PhotographyPortfolios.length; i++) {
        const group = PhotographyPortfolios[i];
        portfolioGroups.push(new ImageGroup(group.id, group.title, group.imageUrl, group.placeholderImageUrl, group.route));
      }
    }

    return portfolioGroups;
  }

  /**
   * Get an image group made up of a specific photography portfolio.
   *
   * @param route a specific photography portfolio route
   * @return a promise with and ImageGroup if the route exists; otherwise null
   */
  public async getImageGroup(route: string): Promise<ImageGroup> {
    let portfolio: ImageGroup = null;

    for (let i = 0; i < PhotographyPortfolios.length; i++) {
      if (PhotographyPortfolios[i].route === route) {
        const group = PhotographyPortfolios[i];
        const images = this.getImageGroupImages(route);
        portfolio = new ImageGroup(group.id, group.title, group.imageUrl, group.placeholderImageUrl, group.route);
        portfolio.setImages(images);
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
  public getImageGroupImages(route: string): Array<Image> {
    let images = null;

    for (let i = 0; i < PhotographyPortfolios.length; i++) {
      if (PhotographyPortfolios[i].route === route) {
        const group = PhotographyPortfolios[i];
        images = [];
        for (let n = 0; n < group.items.length; n++) {
          const image = group.items[n];
          images.push(new Image(image.id, image.title, image.imageUrl, image.placeholderImageUrl));
        }
      }
    }

    return images;
  }

  public async getPortfolioMeta(portfolioRoute: string): Promise<Object> {
    let meta = null;

    for (let i = 0; i < PhotographyPortfolios.length; i++) {
      if (PhotographyPortfolios[i].route === portfolioRoute) {
        const group = PhotographyPortfolios[i];
        meta = {
          id: group.id,
          title: group.title,
          imageUrl: group.imageUrl,
          placeholderImageUrl: group.placeholderImageUrl,
          route: group.route,
          children: group.children,
        };
      }
    }
    return meta;
  }

  public async getPortfolioImages(portfolioRoute: string, batch: number, skip: number): Promise<Object> {
    const imageObj = {
      images: null,
      finished: false,
    };

    for (let i = 0; i < PhotographyPortfolios.length; i++) {
      if (PhotographyPortfolios[i].route === portfolioRoute) {
        const group = PhotographyPortfolios[i];
        imageObj.images = [];
        if (skip > group.items.length) {
          imageObj.finished = true;
        } else {
          for (let n = skip; n < group.items.length; n++) {
            if (imageObj.images.length < batch) {
              if (n >= group.items.length - 1) {
                imageObj.finished = true;
              }
              const image = group.items[n];
              imageObj.images.push(new Image(image.id, image.title, image.imageUrl, image.placeholderImageUrl));
            }
          }
        }
      }
    }

    return imageObj;
  }

  /**
   * Get an image within a specific photography portfolio
   *
   * @param portfolioRoute a route for a specific photography portfolio
   * @param imageId the id of a specific image
   */
  public async getImage(portfolioRoute: string, imageId: number): Promise<Image> {
    let image = null;

    for (let i = 0; i < PhotographyPortfolios.length; i++) {
      if (PhotographyPortfolios[i].route === portfolioRoute) {
        const group = PhotographyPortfolios[i];
        for (let n = 0; n < group.items.length; n++) {
          const item = group.items[n];
          if (item.id === imageId) {
            image = new Image(item.id, item.title, item.imageUrl, item.placeholderImageUrl);
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
  public async getNextImageRoute(portfolioRoute: string, imageId: number): Promise<number> {
    let route = null;

    for (let i = 0; i < PhotographyPortfolios.length; i++) {
      const group = PhotographyPortfolios[i];
      if (group.route === portfolioRoute) {
        for (let n = 0; n < group.items.length; n++) {
          const image = group.items[n];
          if (image.id === imageId) {
            if (n !== (group.items.length - 1)) {
              route = group.items[n + 1].id;
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
  public async getPrevImageRoute(portfolioRoute: string, imageId: number): Promise<number> {
    let route = null;

    for (let i = 0; i < PhotographyPortfolios.length; i++) {
      const group = PhotographyPortfolios[i];
      if (group.route === portfolioRoute) {
        for (let n = 0; n < group.items.length; n++) {
          const item = group.items[n];
          if (item.id === imageId) {
            if (n !== 0) {
              route = group.items[n - 1].id;
            }
          }
        }
      }
    }

    return route;
  }
}
