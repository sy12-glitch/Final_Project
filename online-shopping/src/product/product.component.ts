import { SessionStorageService } from 'angular-web-storage';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/Models/products.model';
import { ProductsService } from 'src/services/products.service';
import {CustomerService} from 'src/Services/customer.service';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input('name')

  catName: String;
  products: Product[] = [];

  constructor(private router: Router, 
    private http: HttpClient,private productService:ProductsService, private customService:CustomerService, private session: SessionStorageService,
    private cartService:CartService
    ) { }

  item:Product;
msg: string;
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.catName = JSON.parse(sessionStorage.getItem('catName'));
    console.log(this.catName);
    this.productService.getProducts(this.catName)
      .subscribe((res: any) => {
        console.log(res);
        this.products = res;
      })
  }

  OnAddCart(item) {
    // console.log(item);
    // this.cartProducts.push(item);
    // sessionStorage.setItem('cart', JSON.stringify(this.cartProducts));
    let userstring = localStorage.getItem('userlogindetails');
    const userlogin = JSON.parse(userstring);
    console.log("++++++++++++++");
    console.log(userlogin);
    if(userlogin!=null){
    let orderdata = {
      user: userlogin,
      product: item,
      quantity: item.quantity

    }

    localStorage.setItem('ordervalue', JSON.stringify(orderdata));
    console.log(localStorage.setItem('ordervalue', JSON.stringify(orderdata)));
    let userstr = localStorage.getItem('ordervalue');
    const userObj = JSON.parse(userstr);
    console.log("----------");
    console.log(userObj);
    this.cartService.addToCart(userObj)
      // sessionStorage.setItem('cart', JSON.stringify(this.cartProducts));
      .subscribe(
        data => {
          console.log(" Added to cart");
          console.log(data);
          this.customService.userdata = data;
          this.msg="Added to cart";
          //  console.log( this.customService.userdata);
          // alert("login successful");
          // this.router.navigate(["/cart2"]);
        },
        error => {
          console.log("exception occured");
          this.router.navigate(["'/','login'"]);
        })
  }
  else{
    alert("user must login to add product to cart");
    this.router.navigate(["/home-page"]);
  }
}

  decreaseQuantity(item){
  }
  increaseQuantity(item){
  }
}