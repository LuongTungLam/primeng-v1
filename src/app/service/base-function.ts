import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export abstract class BaseFunction {
    protected isADD: boolean = false;
    protected isEDIT: boolean = false;
    protected isVIEW: boolean = false;
    protected isDELETE: boolean = false;
    protected isLIST: boolean = true;


    isIsADD(): boolean {
        return this.isADD;
    }

    isIsEDIT(): boolean {
        return this.isEDIT;
    }

    isIsVIEW(): boolean {
        return this.isVIEW;
    }

    isIsDELETE(): boolean {
        return this.isDELETE;
    }

    isIsLIST(): boolean {
        return this.isLIST;
    }

    changeStateAdd(): void {
        this.isADD = true;
        this.isEDIT = false;
        this.isVIEW = false;
        this.isDELETE = false;
        this.isLIST = false;
    }

    changeStateEdit(): void {
        this.isADD = false;
        this.isEDIT = true;
        this.isVIEW = false;
        this.isDELETE = false;
        this.isLIST = false;
    }

    changeStateDel(): void {
        this.isDELETE = true;
        this.isADD = false;
        this.isEDIT = false;
        this.isVIEW = false;
        this.isLIST = false;
    }

    changeStateView(): void {
        this.isDELETE = false;
        this.isADD = false;
        this.isEDIT = false;
        this.isVIEW = true;
        this.isLIST = false;
    }


    handCancel(): void {
        this.isADD = false;
        this.isVIEW = false;
        this.isEDIT = false;
        this.isADD = false;
        this.isLIST = true;
    }
}