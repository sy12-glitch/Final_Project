import { SessionStorageService } from 'angular-web-storage';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from 'src/Models/products.model';
import { ProductsService } from 'src/services/products.service';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

@Input('name')

catName:String;
products:Product[]=[];

  constructor(private router: Router, 
    private http: HttpClient,
    private productService:ProductsService,
     private session: SessionStorageService,
    private cartService:CartService) { }

  cartProducts:Product[]=[];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.catName = JSON.parse(sessionStorage.getItem('catName'));
    console.log(this.catName);
    this.productService.getProducts(this.catName)
    .subscribe((res:any)=>{
      console.log(res);
      this.products = res;
    })
  }

  OnAddCart(item:Product){
    console.log(item);
    this.cartProducts.push(item);
    sessionStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
}