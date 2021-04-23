package com.application.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.entity.Order;
import com.application.entity.User;
import com.application.services.OrderService;

@RestController
@RequestMapping("home")
@CrossOrigin(origins = { "http://localhost:4200" })
public class OrderController {
	@Autowired
	OrderService orderService;
	
	@GetMapping("/orders")
	public List<Order> getAllOrders(){
		return orderService.getAllOrders();
	}


	@PostMapping("/orders")
	public Order createOrder(@RequestBody Order order) {
		System.out.println(order.getQuantity());
		System.out.println(order.getProduct());
		System.out.println(order.getUser());
		Order neworder = orderService.createOrder(order);
		// return repo.save(order);
		return neworder;
	}

//	@PostMapping("/orders/{userid}")
//	public Order createOrder(@PathVariable int userid, @RequestBody int productid) {
//		Order neworder = orderService.createOrder(userid, productid);
//		// return repo.save(order);
//		return neworder;
//	}

	@GetMapping("/getorders")
	public ArrayList<Order> findOrderByUser(@RequestBody User user) {
		int id = user.getUserid();
		ArrayList<Order> orders = orderService.getOrdersByUser(user);
		// return repo.findById(id);
		return orders;
	}
	
	@DeleteMapping("/deleteOrder")
	public void deleteOrder(@RequestBody Order order) {
		int id = order.getId();
		orderService.deleteOrder(id);
	}
	@GetMapping("getorders")
	public List<Order> findOrderById() {
		List<Order> getorder = orderService.getOrders();
		// return repo.findById(id);
		return getorder;
	}


}

