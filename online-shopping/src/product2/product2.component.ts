import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';
import { CartComponent } from 'src/cart/cart.component';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  products:Product[]=[];
  cartProducts:Product[]=[];
  P:Product[];

  constructor(private router: Router, private http: HttpClient,private productService:ProductsService, private session: SessionStorageService,
    private cartService:CartService
    ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProduct()
    .subscribe((res:any)=>{
      // console.log(res);
      this.products = res;
    })
  }

  OnAddCart(item:Product){
    console.log(item);
    this.cartProducts.push(item);
    sessionStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
}
 
