package com.application.repositories;

import org.springframework.data.repository.CrudRepository;

import com.application.entity.Category;

public interface CategoryRepository extends CrudRepository<Category, Integer>{
	
	public Category findByName(String name);
}
