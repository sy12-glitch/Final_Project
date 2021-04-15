import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/cart.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  products: Array<object> = [];
  constructor(private http: HttpService) {}
  _getProducts(): void {
    this.http.getAllProducts().subscribe((data: any) => {
      this.products = data.data;
      console.log(this.products);
    });
  }
  _addItemToCart( id, quantity): void {
    let payload = {
      productId: id,
      quantity,
    };
    this.http.addToCart(payload).subscribe(() => {
      this._getProducts();
      alert('Product Added');
    });
  }
  ngOnInit(): void {
    this._getProducts();
  }
}
