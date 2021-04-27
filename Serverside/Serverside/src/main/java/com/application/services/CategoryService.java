package com.application.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.entity.Category;
import com.application.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository categoryRepository;
	
	public List<Category> getCategoryList(){
		Iterable<Category> iterable = categoryRepository.findAll();
		Iterator<Category> iterator = iterable.iterator();
		List<Category> categories = new ArrayList<Category>();
		
		while(iterator.hasNext()){
			categories.add(iterator.next());
		}

		return categories;
	}
	
	public int getCategoryId(String name) {
		Category c = categoryRepository.findByName(name);
		int category_id = c.getId();
		return category_id;
	}
	
	public Category addCategory(String name) {
		Category category = new Category();
		category.setName(name);
		return categoryRepository.save(category);
	}
	
	public void deleteCategory(int id) {
		categoryRepository.deleteById(id);
	}
}
