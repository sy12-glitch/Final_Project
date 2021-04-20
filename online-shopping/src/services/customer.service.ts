import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private data:any[] = [];

  public set home(home){
    this.data = home;
  }

  public get home(){
    return this.data;
  }

  private host:string = "http://localhost:8080";

  constructor(private http: HttpClient) { }
  saveForm(home){
    const headers= new HttpHeaders()
    return this.http.post(`${this.host}/home/user/login`, home);
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
