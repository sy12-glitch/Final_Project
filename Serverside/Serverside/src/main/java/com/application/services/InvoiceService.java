package com.application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.entity.Invoice;
import com.application.entity.Order;
import com.application.entity.User;
import com.application.exceptions.InvalidUserException;
import com.application.repositories.InvoiceRepository;

@Service
public class InvoiceService {

	@Autowired
	InvoiceRepository invoiceRepository;
	
	public Invoice createInvoice(int userid) throws InvalidUserException {
	//	int userid = invoice.getUser().getUserid();
		User user = UserService.findUserById(userid);
		Invoice invoice = new Invoice();
		List<Order> orders =  OrderService.getOrdersByUser(userid);
		double amount =0;
		for(Order order:orders) {
			amount = amount + order.getProduct().getPrice();
		}
		invoice.setAmount(amount);
		invoice.setOrders(orders);
		invoice.setStatus("Order Placed");
		invoice.setUser(user);
	//	invoice.setDate(date);
		
		for(Order order:orders) {
			OrderService.deleteOrder(order.getId());
		}
		invoiceRepository.save(invoice);
		return invoice;
	}
}
