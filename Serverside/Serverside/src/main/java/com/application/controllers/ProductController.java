package com.application.controllers;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.entity.ErrorMessage;
import com.application.entity.Product;
import com.application.entity.User;
import com.application.exceptions.InvalidUserException;
import com.application.exceptions.NotPermittedException;
import com.application.services.ProductService;

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
	public ResponseEntity<Product> addProduct(@RequestBody Product product, @RequestBody User user) throws NotPermittedException {
		System.out.println(product);
		Product addedProduct = productService.addProduct(user, product);
		ResponseEntity<Product> res = ResponseEntity.status(HttpStatus.CREATED).body(addedProduct);
		System.out.println(res);
		return res;
	}
	
	@PutMapping("/AddProduct")
	public ResponseEntity<Product> updateProduct(@RequestBody Product product, @RequestBody User user, @RequestBody int id) throws NotPermittedException {
		System.out.println(product);
		Product updatedProduct = productService.updateProduct(user, id, product);
		ResponseEntity<Product> res = ResponseEntity.status(HttpStatus.CREATED).body(updatedProduct);
		System.out.println(res);
		return res;
	}
	
	@DeleteMapping("deleteProduct/{id}")
	public boolean deleteProduct(@PathVariable int id, @RequestBody User user) throws NotPermittedException {
		productService.deleteProduct(user, id);
		return true;

	}
	
	@ExceptionHandler(NotPermittedException.class)
	public ResponseEntity<ErrorMessage> handleException(HttpServletRequest req, InvalidUserException e){
		ErrorMessage error = new ErrorMessage(e.getMessage(), LocalDate.now(), req.getRequestURL(), HttpStatus.BAD_REQUEST);
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	}
	
}
