import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/Models/Category.model';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  categories:Category[];
  msg: any;
  catname:String;
  constructor(private router: Router, 
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe(
      (data:Category[])=>{
        console.log(data);
        this.categories = data;
      })
  }
  deleteCategory(name){
    console.log(name);
    this.categoryService.deleteCategory(name)
    .subscribe(
      data=>{
        alert("Delete successful")
      }
    )
  }

  addCategory(id){
    console.log(id);
    this.categoryService.addCategory(id)
    .subscribe(
      (data:Category)=>{
        console.log(data);
        this.router.navigate(["/manage-cat"]);
      }
    )
  }
}
