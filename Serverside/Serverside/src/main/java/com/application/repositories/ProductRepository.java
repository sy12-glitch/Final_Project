package com.application.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.application.entity.Product;


public interface ProductRepository extends CrudRepository<Product, Integer> {
	
}