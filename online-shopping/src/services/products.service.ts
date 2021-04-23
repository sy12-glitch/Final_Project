import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data: any[] = [];

  public set products(products) {
    this.data = products;
  }
  public get products() {
    return this.data;
  }
  private host:string = "http://localhost:8080/home";
  constructor(private _http: HttpClient) { }

  getAllProduct() {
    return this._http.get(`${this.host}/products`);

  }
  getProductById(id) {
    return this._http.get(`${this.host}/product/${id}`);
  }

  deleteProduct(id){
    return this._http.delete(`${this.host}/deleteProduct/${id}`);
  }
  saveProduct(product) {
    return this._http.post(`${this.host}/addProduct`, product);
  }
  getProducts(data){
    return this._http.post(`${this.host}/category`, data);
  }
 findProductById(id){
    return this._http.get(`http://localhost:8080/admin/findproduct/${id}`);
  }

  editProduct(id, newProduct){
    return this._http.put(`http://localhost:8080/admin/updateproduct/${id}`, newProduct);
  }


}
