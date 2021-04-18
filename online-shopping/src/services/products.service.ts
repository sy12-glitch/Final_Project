import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data:any[] = [];
  host: any;

  public set products(products){
    this.data=products;
  }
  public get products()
  {
    return this.data;
  }
  url:string="http://localhost:8080/products";  
  constructor(private _http:HttpClient) { }  
  
  getAllProduct(){  
    return this._http.get(`${this.host}/products`);
   
  } 
  getProductById(id){
    return this._http.get(`${this.host}/products/${id}`);
  }
  getProductByCategory(category){
    return this._http.get(`${this.host}/products/category${category}`);
  }

   saveProduct(product){
    return this._http.post(`${this.host}/products`, product);
  }
 

}
