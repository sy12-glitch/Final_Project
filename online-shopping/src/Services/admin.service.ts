import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private data:any[] = [];
  admindata: Object;
  
    public set admin(admin){
      this.data = admin;
    }
  
    public get admin(){
      return this.data;
    }
  
    private host:string = "http://localhost:8080";
  
    constructor(private http: HttpClient) { }
    saveForm(admin){
      const headers= new HttpHeaders()
      return this.http.post(`${this.host}/admin/login`, admin);
    }

    logoutAdmin(adminlogin){
      return this.http.post(`${this.host}/home/user/logout`, adminlogin);
    }
    // getCustomers(){
    //   return this.http.get(`${this.host}/home/users`);
    // }
    // saveCustomer(home){
    //   return this.http.post(`${this.host}/home/user/signup`, home);
    // }
  
    // findCustomerById(id){
    //   return this.http.get(`${this.host}home/users/${id}`);
    // }
  
    // login(){
    //   return this.http.get(`${this.host}home/user/login`);
    // }
  
  
  }
  