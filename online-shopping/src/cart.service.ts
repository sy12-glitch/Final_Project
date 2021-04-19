import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private host:string="https//localhost:8080";
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(`${this.host}/product`);
  }
  addToCart(payload) {
    return this.http.post(`${this.host}/cart`, payload);
  }
  getCartItems() {
    return this.http.get(`${this.host}/cart`);
  }
  increaseQty(payload) {
    return this.http.post(`${this.host}/cart`, payload);
  }
  emptyCart() {
    return this.http.delete(`${this.host}/cart/empty-cart`);
  }
}