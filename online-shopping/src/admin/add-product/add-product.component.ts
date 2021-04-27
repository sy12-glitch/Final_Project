import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/Models/Category.model';
import { CategoryService } from 'src/Services/category.service';

import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class ProductCreateComponent implements OnInit {
productForm: FormGroup;
img = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
msg:string;
categories:Category[]=[{'name':'clothing'},{'name':'shoes'},{'name':'accessories'}] 
form = new FormGroup({
  category: new FormControl('', Validators.required)
});

get f(){
  return this.form.controls;
}
  constructor(private productService:ProductsService,private categoryService:CategoryService, private router:Router, private http: HttpClient) { }

  

  ngOnInit(): void {
    this.getCategories();
    this.productForm = new FormGroup({

      
      category: new FormControl("", Validators.required),
      name: new FormControl("",[ Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
      brand: new FormControl("", [ Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
      image: new FormControl(this.img),
      price: new FormControl("", [Validators.required, Validators.min(1),Validators.max(10000000)]),
      description: new FormControl("",  [ Validators.required,Validators.minLength(10),Validators.maxLength(50)]),
      quantity: new FormControl("", [Validators.required,Validators.min(1),Validators.max(1000)]),
      rating: new FormControl("", [Validators.required,Validators.max(5),Validators.min(1)])

    });
  }

  create(){
    console.log(this.productForm.value);
    this.productService.saveProduct(this.productForm.value)
    .subscribe((res:any)=>{
      console.log(res);
      // this.router.navigate(["/add-product"]);
      // alert("submited");
      this.reloadCurrentPage();
      this.msg="Successfuly Added";
    }) 
    error=>{
      console.log("exception occured");
      this.msg="Something went wrong";
    }
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe(
      (data:Category[])=>{
        this.categories = data;
      }
    )
  }
  reloadCurrentPage() {
    window.location.reload();
   }
}

function fruits() {
  throw new Error('Function not implemented.');
}
