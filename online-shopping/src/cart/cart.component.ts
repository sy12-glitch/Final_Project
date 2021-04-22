import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/services/cart.service';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts;
  cartDetails;
  constructor(private router: Router, 
    private http: HttpClient,
    private productService:ProductsService,
    private cartService:CartService) {}

  _getCart(id): void {
    this.cartService.getCartItems(id).subscribe((data: any) => {
      this.carts = data.data;
      // this.cartDetails = data.data;
      console.log(this.carts);
    });
  }
 
  ngOnInit(): void {
    this._getCart(id);
  }
}

function id(id: any) {
  throw new Error('Function not implemented.');
}
