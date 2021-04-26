import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  static _http: any;
  static getCategories(): import("../Models/Category.model").Category {
    return this._http.get(`http://localhost:8080/category/display`);
    throw new Error('Method not implemented.');
  }

  private host: string = "http://localhost:8080/category";
  constructor(private _http: HttpClient) { }

  getCategories() {
    return this._http.get(`${this.host}/display`);
  }

}
