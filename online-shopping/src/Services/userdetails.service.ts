import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

    private data: any[] = [];
  
    public set user(user) {
      this.data = user;
    }
    public get user() {
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
  
    deleteUser(userid){
      return this._http.delete(`${this.host}/delete/${userid}`);
    }

     logoutUser(userlogin){
      return this._http.post(`${this.host}/user/logout`,userlogin);
    }
  
  }
  
  

// function deleteUser(userid: any) {
//   throw new Error('Function not implemented.');
// }

// function userid(userid: any) {
//   throw new Error('Function not implemented.');
// }
  