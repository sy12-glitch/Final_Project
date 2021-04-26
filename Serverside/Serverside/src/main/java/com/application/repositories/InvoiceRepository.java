package com.application.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.application.entity.Invoice;
import com.application.entity.User;

public interface InvoiceRepository extends CrudRepository<Invoice, Integer>{
	public Invoice findByUser(int userid);
	public List<Invoice> findByUser(User user);
}
