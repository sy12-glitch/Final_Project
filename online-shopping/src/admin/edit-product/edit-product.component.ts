import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: any = {};

  productForm: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductsService) { }
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params.id);

      // send request to fetch/find/load data from server where id = id
      this.findProduct(params.id);
    })
  }

  findProduct(id) {
    this.productService.findProductById(id)
      .subscribe((res: any) => {
        console.log(res);
        this.product = res;


        this.initProductForm();
      })
  }


  initProductForm() {
    this.productForm = new FormGroup({

      category: new FormControl(this.product.category, Validators.required),
      name: new FormControl(this.product.name, Validators.required),
      brand: new FormControl(this.product.brand, Validators.required),
      image: new FormControl(this.product.image, Validators.required),
      price: new FormControl(this.product.price, [Validators.required, Validators.min(1)]),
      description: new FormControl(this.product.description, Validators.required),
      quantity: new FormControl(this.product.quantity, Validators.required),
      rating: new FormControl(this.product.rating, [Validators.required,Validators.max(5)])

    });
    

  }


  update(){
    console.log(this.productForm.value);
    console.log(this.product.id);

    this.productService.editProduct(this.product.id, this.productForm.value)
    .subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(["list"]);
    })
  }

}


