// Internal
import { PortfolioItem } from './PortfolioItem.model';

class PortfolioGroup {
  private title: string;
  private imageUrl: string;
  private route: string;
  private childGroups: Array<PortfolioGroup>;
  private items: Array<PortfolioItem>;

  constructor(title: string, image: string, route: string) {
      this.title = title;
      this.imageUrl = image;
      this.route = route;
      this.childGroups = null;
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

  public getChildGroups(): Array<PortfolioGroup> {
    return this.childGroups;
  }

  public setChildGroups(childGroups: Array<PortfolioGroup>) {
    this.childGroups = childGroups;
  }

  public getItems(): Array<PortfolioItem> {
    return this.items;
  }

  public setItems(items: Array<PortfolioItem>) {
    this.items = items;
  }
}

export { PortfolioGroup };