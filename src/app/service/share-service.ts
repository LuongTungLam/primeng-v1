import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ShareModuleService {
    currentUrl = '';
    constructor() { }

    setCurrentUrl(url: string) {
        this.currentUrl = url;
    }

    getCurrentUrl(): string {
        console.log(this.currentUrl);
        return this.currentUrl;
    }

}