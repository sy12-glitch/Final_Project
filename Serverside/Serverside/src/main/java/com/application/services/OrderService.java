package com.application.services;

import java.util.ArrayList;
import java.util.Iterator;
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

	public Order createOrder(Order order) {
	//	order.getProduct().setQuantity((order.getProduct().getQuantity()-order.getQuantity()));
		return orderRepository.save(order);
	}
	
	public List<Order> getAllOrders(){
		Iterable<Order> iterable = orderRepository.findAll();
		Iterator<Order> iterator = iterable.iterator();
		List<Order> orders = new ArrayList<Order>();
		
		while(iterator.hasNext()) {
			orders.add(iterator.next());
		}
		return orders;
		
	}

//	public Order createOrder(int userid, int productid) {
//		Optional<User> u = userRepository.findById(userid);
//		User user = u.orElse(null);
//		Optional<Product> p = productRepository.findById(productid);
//		Product product = p.orElse(null);
//		Order order = new Order();
//		order.setUser(user);
//		order.setProduct(product);
//		return orderRepository.save(order);
//	}

	public Optional<Order> getOrderbyIdOrder(int id) { 
		return orderRepository.findById(id);

	}
	
	public List<Order> getOrdersByUser(User user){
		return orderRepository.findByUser(user);
	}
	
	public void deleteOrder(int id) {
		orderRepository.deleteById(id);
	}

	public List<Order> getOrders() {
		Iterable<Order> iterable = orderRepository.findAll();
		Iterator<Order> iterator = iterable.iterator();
		List<Order> orders = new ArrayList<Order>();

		while(iterator.hasNext()){
			orders.add(iterator.next());
		}

		return orders;
	}


}