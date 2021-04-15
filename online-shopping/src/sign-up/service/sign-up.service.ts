import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
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
    return this.http.post(`${this.host}/home/user/signup`, home);
  }

}