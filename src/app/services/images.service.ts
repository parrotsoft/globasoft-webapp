import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`https://api.pexels.com/v1/curated?page=1&per_page=40`);
  }
}
