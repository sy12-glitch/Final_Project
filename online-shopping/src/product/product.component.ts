import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from 'src/Models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

products:Product[]=[];

  constructor(private router: Router, private http: HttpClient,private productService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts(new String);
  }
  getProducts(data:String){
    console.log(data);
    this.productService.getProducts(data)
    .subscribe((res:any)=>{
   //   console.log(res);
      this.products = res;
      console.log(this.products);
      this.router.navigate(["/product"]);
    })
 }
}
