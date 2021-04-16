package com.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.entity.Category;
import com.application.entity.Product;
import com.application.services.CategoryService;
import com.application.services.ProductService;

@RestController
@RequestMapping("display")
@CrossOrigin(origins = {"https://"})
public class CategoryController {

	@Autowired
	CategoryService categoryService;
	
	@GetMapping("/products")
	public List<Product> getProductByCategory(@RequestBody String name){
		int category_id = categoryService.getCategoryId(name);
		return ProductService.getProductsByCategory(category_id);
	}
	
	@PostMapping("/add_category")
	public Category addCategory(@RequestBody Category category) {
		return categoryService.addCategory(category);
	}
	
	@DeleteMapping("/delete_category")
	public void deleteCategory(@RequestBody String name) {
		int category_id = categoryService.getCategoryId(name);
		categoryService.deleteCategory(category_id);
	}
}
