import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Product} from 'src/Models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  images = [1,2,3].map(() => `https://visitclearwaterflorida.com/wp-content/uploads/2017/05/women-shopping.jpg`);

  constructor(private productService:ProductsService,private router:Router, private http: HttpClient) { }

  name:String;

  ngOnInit(): void {
  }

  getName(data:String){
    this.name=data;
  }
}
