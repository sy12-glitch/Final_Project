package com.application.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.entity.Invoice;
import com.application.entity.Order;
import com.application.entity.User;
import com.application.exceptions.InvalidUserException;
import com.application.repositories.InvoiceRepository;
import com.application.repositories.OrderRepository;
import com.application.repositories.UserRepository;

@Service
public class InvoiceService {


	@Autowired

	UserRepository userRepository;
	@Autowired
	InvoiceRepository invoiceRepository;
	@Autowired
	OrderRepository orderRepository;
	
	public Invoice createInvoice(int userid) throws InvalidUserException {
	//	int userid = invoice.getUser().getUserid();	
		User user = findUserById(userid);
		Invoice invoice = new Invoice();
		List<Order> orders = getOrdersByUser(user);
		double amount =0;
		for(Order order:orders) {
			amount = amount + order.getProduct().getPrice();
		}
		invoice.setAmount(amount);
		invoice.setOrders(orders);
		invoice.setStatus("Order Placed");
		invoice.setUser(user);
		SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
		Date orderdate = new Date(System.currentTimeMillis());
		invoice.setDate(orderdate);
		
		for(Order order:orders) {
			deleteOrder(order.getId());
		}
		invoiceRepository.save(invoice);
		return invoice;
	}
	public  User findUserById(int id) throws InvalidUserException {
		Optional<User> optional = userRepository.findById(id);
		User user = optional.orElse(null);
		System.out.println(user);
		if ((user.getIsactive())) {
			return user;
		} else
			throw new InvalidUserException("Access denied");
	}

	public  List<Order> getOrdersByUser(User user){
		return orderRepository.findByUser(user);
	}
	
	public void deleteOrder(int id) {
		orderRepository.deleteById(id);
	}
}