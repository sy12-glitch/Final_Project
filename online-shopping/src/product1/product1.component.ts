import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Product } from 'src/models/products.model';
import { User } from 'src/Models/User.Model';
import { CartService } from 'src/services/cart.service';
import { ProductsService } from 'src/services/products.service';
import { UserdetailsService } from 'src/services/userdetails.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  products:Product[]=[];
  users:User[]=[];
  email='';
  
  constructor(private router: Router, 
    private http: HttpClient,
    private productService:ProductsService,
    
    ) { }

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
 
