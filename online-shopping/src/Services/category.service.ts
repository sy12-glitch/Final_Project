import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private host: string = "http://localhost:8080/category";
  httpClient: any;
  constructor(private http: HttpClient) { }

  getCategories(){
    const headers = new HttpHeaders();
    return this.http.get(`${this.host}/display`);
  }

  deleteCategory(id){
    console.log(id)
    const headers = new HttpHeaders();
    return this.http.delete(`${this.host}/delete/${id}`);
  }

  addCategory(name){
    const headers = new HttpHeaders();
    return this.http.post(`${this.host}/add`, name);
  }
}
