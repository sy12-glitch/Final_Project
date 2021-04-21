import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Product} from 'src/Models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  images = [1,2,3].map(() => `https://visitclearwaterflorida.com/wp-content/uploads/2017/05/women-shopping.jpg`);

  constructor(private productService:ProductsService,private router:Router, private http: HttpClient) { }

  name:String;

  ngOnInit(): void {
  }
<<<<<<< HEAD

  getName(data:String){
    this.name=data;
  }
=======
  getProducts(data){
    console.log(data);
    this.productService.getProducts(data)
    .subscribe((res:any)=>{
   //   console.log(res);
      this.products = res;
      console.log(this.products);
      this.router.navigate(["/product"]);
    })
 }
>>>>>>> b88fc21b4b7f747d80936d9e86a2d954178aee2c
}
