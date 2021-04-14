import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private data:any[] = [];

  private host:string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  saveForm(signup){
    return this.http.post(`${this.host}/sign-up`, signup);
  }

}