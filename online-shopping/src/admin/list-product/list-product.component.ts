import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productsService: any;

  constructor() { }

  ngOnInit(): void {
  }
  getAllProducts(){
    this.productsService.getProducts()
    .subscribe((res:any)=>{
      console.log(res);
      // this.books = res;
      this.productsService.products = res;
    })
  }
 
}
