package com.application.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.entity.Category;
import com.application.entity.Product;
import com.application.entity.User;
import com.application.exceptions.NotPermittedException;
import com.application.repositories.CategoryRepository;
import com.application.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	@Autowired
	CategoryRepository categoryRepository;
	
	
	public List<Product> displayAllProducts(){
		Iterable<Product> iterable = productRepository.findAll();
		Iterator<Product> iterator = iterable.iterator();
		List<Product> products = new ArrayList<Product>();

		while(iterator.hasNext()){
			products.add(iterator.next());
		}

		return products;
	}
	
	public Optional<Product> getProductById(int id) {
		return productRepository.findById(id);
	}
	
	public List<Product> getProductsByCategory(String category){
		List<Product> products = productRepository.findByCategory(category);
		return products;
	}
	
	
//	public Product addProduct(User user, Product product) throws NotPermittedException {
//		if((user.getRole().equals("ADMIN")||user.getRole().contentEquals("SELLER"))&&(user.getIsactive()))
//		{
//			productRepository.save(product);
//			return product;
//		}
//		else
//		{
//			throw new NotPermittedException("You are not permitted to take this action");
//		}
//	
//	}
	
	public Product addProduct(Product product) {
		String cat = product.getCategory();
		System.out.println(cat);
		Category category = categoryRepository.findByName(cat);
		product.setCategory_id(category.getId());
		return productRepository.save(product);
	}
	
	public Product updateProduct(User user,int id,Product product) throws NotPermittedException {
		Optional<Product> optional = productRepository.findById(id);
		Product dbProduct = optional.orElse(null);
		if(dbProduct!=null&&user.getRole().equals("ADMIN")&&(user.getIsactive()))
		{
			productRepository.save(product);
			return product;
		}
		else
		{
			throw new NotPermittedException("You are not permitted to update this product");
		}
	}
	public boolean editProduct(int id, Product product) {
		product.setId(id);
		productRepository.save(product);

		return true;
	}
	
	public void deleteProduct(int id) throws NotPermittedException {
		Optional<Product> optional = productRepository.findById(id);
		Product dbProduct = optional.orElse(null);
			productRepository.deleteById(id);
			
	}
	
	
}