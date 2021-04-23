import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { CartService } from 'src/services/cart.service';
import { ProductsService } from 'src/services/products.service';
import { Product } from 'src/models/products.model';
<<<<<<< HEAD
import {order} from 'src/Models/order.model';
import { User } from 'src/Models/User.Model';
=======
import { order } from 'src/Models/order.model';
>>>>>>> 9408cbd50bcd3e424ac238ce00c237c704604bc9

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component implements OnInit {

 
  constructor(private router: Router, private http: HttpClient,private productService:ProductsService, private session: SessionStorageService,
    private cartService:CartService
    ) { }

  orders:order[];
  products:Product[] = JSON.parse(sessionStorage.getItem('cart'));
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
      (data)=>{
        var orders = data;
        console.log(orders);
      }
    )
  }
<<<<<<< HEAD
}
=======

}
>>>>>>> 9408cbd50bcd3e424ac238ce00c237c704604bc9
