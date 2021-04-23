import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { CartService } from 'src/services/cart.service';
import { ProductsService } from 'src/services/products.service';
import { Product } from 'src/models/products.model';
import {order} from 'src/Models/order.model';
import { User } from 'src/Models/User.Model';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component implements OnInit {

 
  constructor(private router: Router, private http: HttpClient,private productService:ProductsService, private session: SessionStorageService,
    private cartService:CartService
    ) { }

  orders:order[]=[];
  user:User;

  ngOnInit(): void {
  this.printCart()
  }

  printCart(){
    let userstring = localStorage.getItem('userlogindetails');
    const userlogin = JSON.parse(userstring);
    console.log(userlogin);
    this.user = userlogin;
    this.cartService.getOrders(this.user)
    .subscribe(
      (data:order[])=>{
        console.log(data);
        this.orders = data;
        console.log(this.orders);
      }
    )
  }
}
