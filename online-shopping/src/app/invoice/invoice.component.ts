import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Invoice } from 'src/Models/Invoice.model';
import { InvoiceService } from 'src/Services/invoice.service';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient,private productService:ProductsService, private session: SessionStorageService,
    private invoiceService:InvoiceService) { }

    invoice:Invoice;

  ngOnInit(): void {
    this.createInvoice();
  }

  createInvoice(){
    let userstring = localStorage.getItem('userlogindetails');
    const userlogin = JSON.parse(userstring);
    this.invoiceService.getInvoice(userlogin)
    .subscribe(
      (data:Invoice)=>{
        console.log(data);
        this.invoiceService.invoice = data;
        this.invoice = data;
      }
    )
  }

}
