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



 

  constructor(private productService:ProductsService, private router:Router) {
   
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({

      
      category: new FormControl("clothing", Validators.required),
      name: new FormControl("zara1", Validators.required),
      brand: new FormControl("zara", Validators.required),
      price: new FormControl("500", [Validators.required, Validators.min(1)]),
      description: new FormControl("soft material", Validators.required),
      quantity: new FormControl("4", Validators.required),
      rating: new FormControl("4", Validators.required)

    });
  }

  create(){
    console.log(this.productForm.value);
    this.productService.saveProduct(this.productForm.value)
    

    .subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(["/list-product"]);

      
    })
  }

}
function fruits() {
  throw new Error('Function not implemented.');
}

