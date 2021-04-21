import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
    products:Product[]=[];
    
    
    constructor(private router: Router, 
      private productService:ProductsService) { }
  
  
  

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
  
  deleteProduct(product){
    this.productService.deleteProduct(product.id)
    .subscribe((res:any)=>{
      this.getAllProducts();
    })
  }


}

function id(id: any) {
  throw new Error('Function not implemented.');
}
