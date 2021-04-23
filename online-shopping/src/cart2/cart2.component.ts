import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { CartService } from 'src/services/cart.service';
import { ProductsService } from 'src/services/products.service';
import { Product } from 'src/models/products.model';
import { order } from 'src/Models/order.model';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component implements OnInit {

 
  constructor(private router: Router, private http: HttpClient,private productService:ProductsService, private session: SessionStorageService,
    private cartService:CartService
    ) { }

  products:Product[] = JSON.parse(sessionStorage.getItem('cart'));

  ngOnInit(): void {
  this.printCart()
  }

  printCart(){
    console.log(this.products);
  }

}