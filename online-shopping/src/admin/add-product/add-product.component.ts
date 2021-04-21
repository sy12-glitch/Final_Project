import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class ProductCreateComponent implements OnInit {
productForm: FormGroup;

  
form = new FormGroup({
  category: new FormControl('', Validators.required)
});

get f(){
  return this.form.controls;
}
  constructor(private productService:ProductsService,private router:Router, private http: HttpClient) { }

  

  ngOnInit(): void {
    this.productForm = new FormGroup({

      
      category: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      brand: new FormControl("", Validators.required),
      image: new FormControl("", Validators.required),
      price: new FormControl("", [Validators.required, Validators.min(1)]),
      description: new FormControl("", Validators.required),
      quantity: new FormControl("", Validators.required),
      rating: new FormControl("", [Validators.required,Validators.max(5)])

    });
  }

  create(){
    console.log(this.productForm.value);
    this.productService.saveProduct(this.productForm.value)
    .subscribe((res:any)=>{
      console.log(res);
      // this.router.navigate(["/add-product"]);
      alert("submited");
    }) 
    error=>{
      console.log("exception occured");
      alert("error");
    }
  }

}
function fruits() {
  throw new Error('Function not implemented.');
}

