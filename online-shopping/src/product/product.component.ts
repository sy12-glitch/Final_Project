import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from 'src/Models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

@Input('name')

products:Product[]=[];

  constructor(private router: Router, private http: HttpClient,private productService:ProductsService) { }

  ngOnInit(): void {
  }

  getProducts(name){
    console.log(name);
    this.productService.getProducts(name)
    .subscribe((res:any)=>{
      console.log(res);
      this.products = res;
      this.router.navigate(["/product"]);
    })
  }
}
