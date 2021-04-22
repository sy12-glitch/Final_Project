
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/cart.service';
import { Cart } from 'src/models/Cart.Model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Cart[]=[];
    
    
  constructor(private router: Router, 
    private cartService: CartService) { }
    carts;
    cartDetails;
   
    _getCart(): void {
      this.cartService.getCartItems().subscribe((data: any) => {
        this.carts = data.data;
        // this.cartDetails = data.data;
        console.log(this.carts);
      });
    }
    _increamentQTY(id, quantity): void {
      const payload = {
        productId: id,
        quantity,
      };
      this.cartService.increaseQty(payload).subscribe(() => {
        this._getCart();
        alert('Product Added');
      });
    }
    _emptyCart(): void {
      this.cartService.emptyCart().subscribe(() => {
        this._getCart();
        alert('Cart Emptied');
      });
    }
    ngOnInit(): void {
      this._getCart();
    }
  }