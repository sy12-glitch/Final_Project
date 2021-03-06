import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/Models/Category.model';
import { CategoryService } from 'src/Services/category.service';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  images = [1,2,3].map(() => `https://visitclearwaterflorida.com/wp-content/uploads/2017/05/women-shopping.jpg`);

  constructor(private productService:ProductsService, private categoryService:CategoryService, private router:Router, private http: HttpClient) { }

  catName:String;
  categories:Category;

  ngOnInit(): void {
    this.getCategories();
  }

  getProducts(data:String){
    sessionStorage.setItem('catName', JSON.stringify(data));
    this.router.navigate(["product"]);
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe(
      (data:Category[])=>{
        this.categories = data;
      }
    )
  }
}