class Photo {
    private title: string;
    private url: URL;

    constructor(title: string, url: URL) {
        this.title = title;
        this.url = url;
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
}

export { Photo };