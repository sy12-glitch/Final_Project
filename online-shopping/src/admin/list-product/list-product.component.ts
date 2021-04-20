import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
    products:Product[]=[];
    
    
    constructor(private productService:ProductsService) { }
  
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
