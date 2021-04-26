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
}
