import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data: any[] = [];

  public set customer_order(customer_order) {
    this.data = customer_order;
  }
  public get customer_order() {
    return this.data;
  }
  
  public set user(user) {
    this.data = user;
  }
  public get user() {
    return this.data;
  }
  private host:string = "http://localhost:8080/home";
  constructor(private http: HttpClient) { }
  getAllUsers(id) {
    return this.http.get(`${this.host}/users/${id}`);

  }
  getCartItems(id) {
    return this.http.get(`${this.host}/orders/${id}`);
  }
  
  addToCart(product) {
    const headers= new HttpHeaders()

    return this.http.post(`${this.host}/orders/`, product);
  }
  getAllOrder(orders) {
    const headers= new HttpHeaders()

    return this.http.post(`${this.host}/orders`,orders);
  }
  deleteItem(){
    return this.http.delete(`${this.host}/orders/deleteOrder`);
  }

  getOrders(user){
    console.log(user);
    const headers = new HttpHeaders()
    return this.http.post(`${this.host}/getorders`, user);
  }
  
}

