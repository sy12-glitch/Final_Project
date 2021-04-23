import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from 'src/Models/Invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  data: any[] = [];
  invoice:Invoice;

  public set user(user) {
    this.data = user;
  }
  public get user() {
    return this.data;
  }

  private host: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  getInvoice(user) {
    console.log(user);
    const headers = new HttpHeaders()
    return this.http.post(`${this.host}/invoice`, user);
  }

}

