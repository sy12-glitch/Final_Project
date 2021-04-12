package com.application.repositories;

import org.springframework.data.repository.CrudRepository;

import com.application.entity.Product;


public interface ProductRepository extends CrudRepository<Product, Integer> {

}