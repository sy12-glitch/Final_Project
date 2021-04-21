import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from 'src/Models/products.model';
import { ProductsService } from 'src/services/products.service';
import {HomePageComponent} from 'src/home-page/home-page.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

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
