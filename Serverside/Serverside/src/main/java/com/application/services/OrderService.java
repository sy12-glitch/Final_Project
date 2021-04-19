package com.application.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.entity.Order;
import com.application.repositories.OrderRepository;
@Service
public class OrderService {

	@Autowired
	static
	OrderRepository orderRepository;

	public Order createOrder(Order order) {

		return orderRepository.save(order);
	}

	public Optional<Order> getOrderbyIdOrder(int id) {
		return orderRepository.findById(id);

	}
	
	public static List<Order> getOrdersByUser(int userid){
		return orderRepository.findByUser(userid);
	}
	
	public static void deleteOrder(int id) {
		orderRepository.deleteById(id);
	}
}