package com.application.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.entity.Product;
import com.application.entity.User;
import com.application.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
	public List<Product> displayAllProducts(){
		Iterable<Product> iterable = productRepository.findAll();
		Iterator<Product> iterator = iterable.iterator();
		List<Product> products = new ArrayList<Product>();

		while(iterator.hasNext()){
			products.add(iterator.next());
		}

		return products;
	}
	
//	public List<Product> getProductsByCategory(int category){
//		List<Product> products = new ArrayList<Product>();
//		Iterable<Product> iterable = productRepository.findAll();
//		Iterator<Product> iterator = iterable.iterator();
//			
//		return products;
//	}
	
	public Product addProduct(User user,Product product) {
		Product p = product;
		if(user.getIsactive()) {
			productRepository.save(product);
		}
		return p;
	}
	
	public Product updateProduct(User user,int id,Product product) {
		Optional<Product> optional = productRepository.findById(id);
		Product p = optional.orElse(null);
		if(p!=null) {
			productRepository.save(p);
		}
		return p;
	}
	
	
}
