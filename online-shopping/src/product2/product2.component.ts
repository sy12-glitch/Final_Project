import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';
import { CartService } from 'src/services/cart.service';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  products:Product[]=[];

  constructor(private router: Router, 
    private http: HttpClient,private productService:ProductsService, private customService:CustomerService, private session: SessionStorageService,
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
    // console.log(item);
    // this.cartProducts.push(item);
    // sessionStorage.setItem('cart', JSON.stringify(this.cartProducts));
    let userstring=localStorage.getItem('userlogindetails');
    const userlogin = JSON.parse(userstring);
    console.log("++++++++++++++");
    console.log(userlogin);
  
    let orderdata={
      user:userlogin,
      product:item,
      quantity:5

    }
    localStorage.setItem('ordervalue', JSON.stringify(orderdata));
    console.log(  localStorage.setItem('ordervalue', JSON.stringify(orderdata)));
    let userstr=localStorage.getItem('ordervalue');
    const userObj = JSON.parse(userstr);
    console.log("----------");
    console.log(userObj);
    this.cartService.addToCart(userObj)
    // sessionStorage.setItem('cart', JSON.stringify(this.cartProducts));
    .subscribe(
      data =>{
      console.log(" Added to cart");
        console.log(data);
        this.customService.userdata=data;
      //  console.log( this.customService.userdata);
     // alert("login successful");
      this.router.navigate(["/cart2"]);
    },
    error=>{
      console.log("exception occured");
      //this.msg="Bad credential, enter right email-id or passoword !";
    })
  }
  }
