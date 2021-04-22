package com.application.services;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.entity.Order;
import com.application.entity.Product;
import com.application.entity.User;
import com.application.repositories.OrderRepository;
import com.application.repositories.ProductRepository;
import com.application.repositories.UserRepository;
@Service
public class OrderService {

	@Autowired
	OrderRepository orderRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	ProductRepository productRepository;

	public Order createOrder(int userid, int productid) {
		Optional<User> u = userRepository.findById(userid);
		User user = u.orElse(null);
		Optional<Product> p = productRepository.findById(productid);
		Product product = p.orElse(null);
		Order order = new Order();
		order.setUser(user);
		order.setProduct(product);
		return orderRepository.save(order);
	}

	public Optional<Order> getOrderbyIdOrder(int id) { 
		return orderRepository.findById(id);

	}
	
	public List<Order> getOrdersByUser(int userid){
		return orderRepository.findByUser(userid);
	}
	
	public void deleteOrder(int id) {
		orderRepository.deleteById(id);
	}
}