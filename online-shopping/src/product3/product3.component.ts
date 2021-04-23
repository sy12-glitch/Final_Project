import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css']
})
export class Product3Component implements OnInit {
  products:Product[]=[];
  
  
  constructor(private router: Router, private http: HttpClient,private productService:ProductsService) { }

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
}
 
