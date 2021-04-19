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

import com.application.entity.Category;
import com.application.entity.ErrorMessage;
import com.application.entity.Order;
import com.application.entity.Product;
import com.application.entity.User;
import com.application.exceptions.InvalidUserException;
import com.application.exceptions.NotPermittedException;
import com.application.services.CategoryService;
import com.application.services.OrderService;
import com.application.services.ProductService;
import com.application.services.UserService;

@RestController
@RequestMapping("admin")
@CrossOrigin(origins = { "http://localhost:4200" })
public class AdminController {

	@Autowired
	CategoryService categoryService;
	@Autowired
	ProductService productService;
	@Autowired
	UserService userService;
	@Autowired
	OrderService orderService;

	@PostMapping("/login")
	public ResponseEntity<User> Userlogin(@RequestBody User user) throws InvalidUserException {
		 System.out.println(user);
		User loggeduser = userService.Userlogin(user);
		ResponseEntity<User> res = new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
		System.out.println(res);
		System.out.println("Login success");
		// return res;
		return res;
	}

	@GetMapping("/users/{id}")
	public User findUserById(@PathVariable int id) throws InvalidUserException {
		return userService.findUserById(id);
	}

	@GetMapping("/users")
	public List<User> findUsers() {
		return userService.findUsers();
	}

	
//Category
	
	@GetMapping("category/display")
	public List<Category> getCategories() {
		return categoryService.getCategoryList();
	}

	@GetMapping("category/products")
	public List<Product> getProductByCategory(@RequestBody String name) {
		System.out.println(name);
		int category_id = categoryService.getCategoryId(name);
		return productService.getProductsByCategory(category_id);
	}

	@PostMapping("category/add")
	public Category addCategory(@RequestBody Category category) {
		return categoryService.addCategory(category);
	}

	@DeleteMapping("category/delete")
	public void deleteCategory(@RequestBody String name) {
		int category_id = categoryService.getCategoryId(name);
		categoryService.deleteCategory(category_id);
	}

	//Products
	
	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return productService.displayAllProducts();
	}

	@GetMapping("/product/{id}")
	public Optional<Product> getProductById(@PathVariable int id) {
		return productService.getProductById(id);
	}

	@GetMapping("/category/{id}")
	public List<Product> getProductsByCategory(@PathVariable int id) {
		return productService.getProductsByCategory(id);
	}

	@PostMapping("/addProduct")
	public Product addProduct(@RequestBody Product product) {
		return productService.addProduct(product);
	}

	@PutMapping("/updateProduct")
	public ResponseEntity<Product> updateProduct(@RequestBody Product product, @RequestBody User user,
			@RequestBody int id) throws NotPermittedException {
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

	
	//orders 
	
	@GetMapping("orders/{id}")
	public Optional<Order> findOrderById(@PathVariable int id) {
		Optional<Order> getorder = orderService.getOrderbyIdOrder(id);
		// return repo.findById(id);
		return getorder;
	}

	@ExceptionHandler(NotPermittedException.class)
	public ResponseEntity<ErrorMessage> handleException(HttpServletRequest req, InvalidUserException e) {
		ErrorMessage error = new ErrorMessage(e.getMessage(), LocalDate.now(), req.getRequestURL(),
				HttpStatus.BAD_REQUEST);
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	}

}
