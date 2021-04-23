package com.application.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.entity.Invoice;
import com.application.exceptions.InvalidUserException;
import com.application.services.InvoiceService;

@RestController
@RequestMapping("invoice")
@CrossOrigin(origins = { "http://localhost:4200" })
public class InvoiceController {
	
	@Autowired
	InvoiceService invoiceService;
	
	@GetMapping("")
	public Invoice createInvoice(@RequestBody int userid) throws InvalidUserException {
		return invoiceService.createInvoice(userid);
	}
}
