class PortfolioItem {
  private id: number;
  private title: string;
  private description: string;
  private imageUrl: string;

  constructor(id: number, title: string, imageUrl: string) {
      this.id = id;
      this.title = title;
      this.imageUrl = imageUrl;
  }

  public getId(): number {
      return this.id;
  }

  public setId(id: number) {
      this.id = id;
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

  public setimageUrl(url: string) {
      this.imageUrl = url;
  }
}

export { PortfolioItem };