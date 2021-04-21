import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

    private data: any[] = [];
  
    public set home(home) {
      this.data = home;
    }
    public get home() {
      return this.data;
    }
    private host:string = "http://localhost:8080/home";
    constructor(private _http: HttpClient) { }
  
    getAllUsers() {
      return this._http.get(`${this.host}/users`);
  
    }
    getUsersById(userid) {
      return this._http.get(`${this.host}/users/${userid}`);
    }
  
    deleteUsers(id){
      return this._http.delete(`${this.host}/delete/${id}`);
    }
    // saveProduct(product) {
    //   return this._http.post(`${this.host}/addProduct`, product);
    // }
    // getProducts(data){
    //   return this._http.post(`${this.host}/category`, data);
    // }
  
  }
  