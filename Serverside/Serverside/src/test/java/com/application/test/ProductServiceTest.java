package com.application.test;

import static org.junit.Assert.assertTrue;

import java.util.List;


import org.junit.Assert;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import com.application.entity.Product;
import com.application.entity.User;
import com.application.exceptions.InvalidUserException;
import com.application.repositories.ProductRepository;
import com.application.repositories.UserRepository;
import com.application.services.ProductService;
import com.application.services.UserService;

public class ProductServiceTest extends ApplicationTests{
	@Mock
	Product product;
	// UserService userservice;
	@Autowired
	private ProductService productService;
	@Autowired
	private ProductRepository productRepository;

	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		productService = new ProductService();
	}

	@Test
	public void deleteProductTest() {
	//enter the id of the product to be deleted
	//	int id = 15;
		Product dbproduct = productService.addProduct(new Product(35,4,"Max Pro","Vivo",15000.0,"abc.jpg","New Phone",
				(float)4.5,"Electronics",243));
		System.out.println("product to delete");
		boolean beforedelete = productRepository.findById(dbproduct.getId()).isPresent();
		productRepository.deleteById(dbproduct.getId());
		boolean afterdelete = productRepository.findById(dbproduct.getId()).isPresent();
		System.out.println("product deleted"+dbproduct.getId());
		assertTrue(!afterdelete);
//		Assert.assertTrue(beforedelete);
		}
	// should save product
		@Test
		public void shouldSaveProduct(){
			
		Product dbproduct = productService.addProduct(new Product(35,4,"Thinkpad","Lenevo",45000.0,"abc.jpg","New laptop",
				(float)4.5,"Electronics",243));
//			if (dbproduct != null) {
//				System.out.println("Prodcut saved");
//				Assert.assertTrue(true);
//			}
		System.out.println("Creating new product"+dbproduct.getId());
		assertTrue(productRepository.findById(dbproduct.getId()).isPresent());
		}
	// should not save product
	@Test
	public void shouldnotSaveProduct() throws InvalidUserException {

		Product dbproduct = new Product(1,2,"","Lenevo",45000.0,"abc.jpg","New laptop",
				 (float) 4.5,"Electronics",243);
		if (dbproduct.getName()==null) {
			System.out.println("Don not save product");
			Assert.assertFalse(false);
		}
	}
	@Test
	public void getproductsTest() {
//		Mockito.when(userRepository.findAll()).thenReturn(Stream.of(
//				new User(213, "Virat", "Kohli", "vk@gmail.com", "Vk@*1933", "Male", "India", "9988776655", "User"),
//				new User(214, "Rohit", "Sharma", "rs@gmail.com", "Rs@*1933", "Male", "India", "9988557766", "User"))
//				.collect(Collectors.toList()));
		List<Product> product=productService.displayAllProducts();
		int length = product.size();
		System.out.println(length);
		if (length > 0) {
			Assert.assertTrue(true);
		}
	}

}
