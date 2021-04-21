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

<<<<<<< HEAD
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
=======
products:Product[]
  getAllProduct: any;

constructor(private _data:ProductsService) { }  
ngOnInit() {  
  this._data.getAllProduct().subscribe(  
    (data:Product[])=>{  
      this.getAllProduct=data;  
    }  
  );  
}  
onClicked(value:string){  
  
this._data.getAllProduct().subscribe(  
    (data:Product[])=>{  
      this.getAllProduct=data;  
    }  
  );  
}  
}  
>>>>>>> b88fc21b4b7f747d80936d9e86a2d954178aee2c
