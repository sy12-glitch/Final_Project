import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Invoice } from 'src/Models/Invoice.model';
import { User } from 'src/Models/User.Model';
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

    msg:String;
    invoice:Invoice;
    email:String;
    username:String;
    mobile:Number;
    address:String;

  ngOnInit(): void {
    this.createInvoice();
  }

  createInvoice(){
    let userstring = localStorage.getItem('userlogindetails');
    var userlogin = JSON.parse(userstring);
    console.log(userlogin );
    this.invoiceService.getInvoice(userlogin )
    .subscribe(
      (data:Invoice)=>{
        console.log(data);
        this.invoiceService.invoice = data;
        this.invoice = data;
        this.email=userlogin.email;
        this.username=userlogin.fname;
        this.mobile=userlogin.mobile;
        this.address=userlogin.address;
      }
    )
  }
  saveInvoice(invoice){
    this.invoiceService.saveInvoice(invoice)
    .subscribe(
      data=>{
        console.log(data);
        this.msg = "Your order is placed successfully, Thanks for shopping with us."
        this.router.navigate(["/my-order"]);
      }
    )
  }

}
