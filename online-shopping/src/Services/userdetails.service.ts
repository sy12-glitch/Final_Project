import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/Models/User.Model';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
   user:User[]=[];
  //    private data: any[] = [];
  // role: string;
  
  //   public set user(user) {
  //      this.data = user;
  //    }
  //    public get user() {
  //      return this.data;
  //    }
    private host:string = "http://localhost:8080/home";
  role: string;
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
    // isLoggedIn(user){
    //   return this._http.delete(`${this.host}/user/isloggedin/${user}`);

    // }

     logoutUser(userlogin){
      return this._http.post(`${this.host}/user/logout`,userlogin);
    }
    isLoggedin(user){
      return this._http.post(`${this.host}/user/isloggedin`,user);
    }
    // ngOnInit(): void {
    //   let userstring = localStorage.getItem('userlogindetails');
    //   const userlogin = JSON.parse(userstring);
    //   console.log("++++++++++++++");
    //   console.log(userlogin);
  
  }
  
  

// function deleteUser(userid: any) {
//   throw new Error('Function not implemented.');
// }

// function userid(userid: any) {
//   throw new Error('Function not implemented.');
// }
