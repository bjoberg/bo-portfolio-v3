import { Image } from './image';

export class ImageGroup {
  private id: number;
  private title: string;
  private imageUrl: string;
  private route: string;
  private images: Array<Image>;

  constructor(id: number, title: string, imageUrl: string, route: string) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.route = route;
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(text: string) {
      this.title = text
  }  

  public getImageUrl(): string {
    return this.imageUrl;
  }

  public setPhotoUrl(imageUrl: string) {
      this.imageUrl = imageUrl;
  }

  public getRoute(): string {
    return this.route
  }

  public setRoute(route: string) {
      this.route = route;
  }

  public getImages(): Array<Image> {
    return this.images
  }

  public setImages(images: Array<Image>) {
      this.images = images;
  }
}
