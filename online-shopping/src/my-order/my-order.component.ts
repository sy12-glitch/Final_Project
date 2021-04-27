import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/Models/Invoice.model';
import { InvoiceService } from 'src/Services/invoice.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  invoices:Invoice[];

  constructor(private invoiceService:InvoiceService) { }

  ngOnInit(): void {
    this.MyOrders();
  }

  MyOrders(){
    let userstring = localStorage.getItem('userlogindetails');
    var userlogin = JSON.parse(userstring);
    this.invoiceService.getAllInvoice(userlogin)
    .subscribe(
      (data:Invoice[])=>{
        console.log(data);
        this.invoices=data;
      }
    )
  }
}
