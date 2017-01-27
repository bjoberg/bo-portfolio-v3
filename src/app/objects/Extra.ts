class Extra {
    private title: string;
    private url: URL;
    private icon: string;

    constructor(title: string, url: URL, icon: string) {
        this.title = title;
        this.url = url;
        this.icon = icon;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(text: string) {
        this.title = text
    }

    public getUrl(): URL {
        return this.url
    }

    public setUrl(text: URL) {
        this.url = text;
    }

    public getIcon(): string {
        return this.icon;
    }

    public setIcon(icon: string) {
        this.icon = icon;
    }
}

export { Extra };