export class NavigationItem {
  private title: string;
  private route: string;
  private url: string;
  private type: string;
  private icon: string;

  constructor(title: string, route: string, url: string, type: string, icon: string) {
    this.title = title;
    this.route = route;
    this.url = url;
    this.type = type;
    this.icon = icon;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(text: string) {
    this.title = text;
  }

  public getRoute(): string {
    return this.route;
  }

  public setRoute(text: string) {
    this.route = text;
  }

  public getUrl(): string {
    return this.url;
  }

  public setUrl(url: string) {
    this.url = url;
  }

  public getType(): string {
    return this.type;
  }

  public setType(type: string) {
    this.type = type;
  }

  public getIcon(): string {
    return this.icon;
  }

  public setIcon(icon: string) {
    this.icon = icon;
  }
}
