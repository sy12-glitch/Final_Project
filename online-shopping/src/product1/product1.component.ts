import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  
  constructor(private router: Router, 
    private http: HttpClient,
    private productService:ProductsService,
    private cartService:CartService
    , private userdetailsService:UserdetailsService
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
  getAllUsers(){
    this.userdetailsService.getAllUsers()
    .subscribe((res:any)=>{
      console.log(res);
      this.users = res;
    })
  }
  
  _addItemToCart( id, quantity): void {
    let product = {
      productId: id,
      quantity,
     
    }  
    this.cartService.addToCart(product)
    .subscribe(() => {
      this.getAllProducts();
      this.getAllUsers();
      alert('Product Added');
    });   
    
  }
 
}
 
