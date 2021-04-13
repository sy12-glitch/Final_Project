package com.application.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.entity.Product;
import com.application.entity.User;
import com.application.exceptions.NotPermittedException;
import com.application.services.ProductService;

import java.util.List;

@RestController
@RequestMapping("home")
@CrossOrigin(origins = {"https://"})
public class ProductController {

	@Autowired
	ProductService productService;
	
	@GetMapping("/{id}")
	public Optional<Product> getProductById(@PathVariable int id) {
		return productService.getProductById(id);
	}
	
	@GetMapping("/{category_id}")
	public List<Product> getProductsByCategory(@PathVariable int id){
		return productService.getProductsByCategory(id);
	}
	
	@PostMapping("/AddProduct")
	public Product addProduct(@RequestBody Product product, @RequestBody User user) throws NotPermittedException {
		return productService.addProduct(user, product);
	}
}
