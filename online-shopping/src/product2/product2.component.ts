import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  products:Product[]=[];
  
  
  constructor(private router: Router, private http: HttpClient,private productService:ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProduct()
    .subscribe((res:any)=>{
      console.log(res);
      this.products = res;
    })
  }
}
 
