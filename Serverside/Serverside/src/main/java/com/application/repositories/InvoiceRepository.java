package com.application.repositories;

import org.springframework.data.repository.CrudRepository;

import com.application.entity.Invoice;

public interface InvoiceRepository extends CrudRepository<Invoice, Integer>{
	public Invoice findByUser(int userid);
}
