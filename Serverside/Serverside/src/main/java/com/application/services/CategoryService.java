package com.application.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.entity.Category;
import com.application.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository categoryRepository;
	
	public int getCategoryId(String name) {
		Category c = categoryRepository.findByName(name);
		int category_id = c.getId();
		return category_id;
	}
	
	public Category addCategory(Category category) {
		return categoryRepository.save(category);
	}
	
	public void deleteCategory(int id) {
		categoryRepository.deleteById(id);
	}
}
