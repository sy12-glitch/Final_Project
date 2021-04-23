package com.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.entity.Invoice;
import com.application.entity.Order;
import com.application.entity.User;
import com.application.exceptions.InvalidUserException;
import com.application.services.InvoiceService;

@RestController
@RequestMapping("invoice")
@CrossOrigin(origins = { "http://localhost:4200" })
public class InvoiceController {
	
	@Autowired
	InvoiceService invoiceService;
	
	@PostMapping("")
	public Invoice createInvoice(@RequestBody User user) throws InvalidUserException {
		return invoiceService.createInvoice(user);
	}
	
	@PostMapping("/myOrders")
	public List<Order> getOrders(@RequestBody User user){
		return invoiceService.getOrdersByUser(user);
	}
}
