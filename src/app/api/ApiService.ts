import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    apiUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) {}

    //Color
    findAllColor(): void {
        this.http.get(this.apiUrl + '/element/color');
    }

    findAllCategory(): Observable<any> {
        return this.http.get<any>(this.apiUrl + '/category');
    }

    findAllProductByCategoryId(categoryId: number): Observable<any> {
        return this.http.get<any>(this.apiUrl + '/product?categoryId=' + categoryId, {
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });
    }

    getCategoryByUrl(url: string): Observable<any> {
        return this.http.get<any>(this.apiUrl + '/category?url=' + url);
    }
}