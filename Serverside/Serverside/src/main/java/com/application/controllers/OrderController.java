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

import com.application.entity.Order;
import com.application.entity.User;
import com.application.services.OrderService;
import com.application.services.ProductService;

@RestController
@RequestMapping("home")
@CrossOrigin(origins = { "http://localhost:4200" })
public class OrderController {
	@Autowired
	OrderService orderService;

	@PostMapping("/orders")
	public Order createOrder(@RequestBody Order order) {
		Order neworder = orderService.createOrder(order);
		// return repo.save(order);
		return neworder;
	}

	@GetMapping("orders/{id}")
	public Optional<Order> findOrderById(@PathVariable int id) {
		Optional<Order> getorder = orderService.getOrderbyIdOrder(id);
		// return repo.findById(id);
		return getorder;
	}

}

