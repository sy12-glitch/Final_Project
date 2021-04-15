import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

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
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.post(`${this.host}/home/user/signup`, home);
  }

}