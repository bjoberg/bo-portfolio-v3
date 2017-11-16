class PortfolioItem {
  private title: string;
  private description: string;
  private imageUrl: string;
  private route: string;

  constructor(title: string, imageUrl: string, route: string) {
      this.title = title;
      this.imageUrl = imageUrl;
      this.route = route;
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

  public getRoute(): string {
      return this.route
  }

  public setRoute(route: string) {
      this.route = route;
  }
}

export { PortfolioItem };