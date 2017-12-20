export class Image {
  private id: number;
  private title: string;
  private imageUrl: string;
  private placeholderImageUrl: string;

  constructor(id: number, title: string, imageUrl: string, placeholderImageUrl: string) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.placeholderImageUrl = placeholderImageUrl; 
  }
  
  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
      return this.title;
  }

  public setTitle(title: string) {
      this.title = title;
  }

  public getImageUrl(): string {
    return this.imageUrl;
  }

  public setImageUrl(imageUrl: string) {
      this.imageUrl = imageUrl;
  }

  public getPlaceholderImageUrl(): string {
    return this.imageUrl;
  }

  public setPlaceholderImageUrl(placeholderImageUrl: string) {
      this.placeholderImageUrl = placeholderImageUrl;
  }
}
