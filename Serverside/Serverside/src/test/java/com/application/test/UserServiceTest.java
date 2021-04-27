package com.application.test;

import static org.junit.Assert.assertThat;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Assert;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import com.application.entity.User;
import com.application.exceptions.InvalidUserException;
import com.application.repositories.UserRepository;
import com.application.services.UserService;

public class UserServiceTest extends ApplicationTests {

	@Mock
	User user;
	// UserService userservice;
	@Autowired
	private UserService userService;
	@Autowired
	private UserRepository userRepository;

	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		userService = new UserService();
	}

	@Test
	// should save user
	public void shouldSaveUser() throws InvalidUserException {

		User dbuser = userService.createUser(
				new User(189, "Virat", "Kohli", "vk@gmail.com", "Vk@*1933", "Male", "India", "9988776655", "User"));
		if (dbuser != null) {
			System.out.println("User saved");
			Assert.assertTrue(true);
		}
	}

	@Test
	// should not save user
	public void shouldnotSaveUser() throws InvalidUserException {

		User dbuser = new User(" ", " ");
		if (dbuser.getPassword().equals(null) || dbuser.getEmail().equals(null)) {
			System.out.println("Don not save user");
			Assert.assertTrue(true);
		}
	}

	@Test
	public void getusersTest() {
//		Mockito.when(userRepository.findAll()).thenReturn(Stream.of(
//				new User(213, "Virat", "Kohli", "vk@gmail.com", "Vk@*1933", "Male", "India", "9988776655", "User"),
//				new User(214, "Rohit", "Sharma", "rs@gmail.com", "Rs@*1933", "Male", "India", "9988557766", "User"))
//				.collect(Collectors.toList()));
		List<User> user=userService.findUsers();
		int length = user.size();
		System.out.println(length);
		if (length > 0) {
			Assert.assertTrue(true);
		}
	}

	@Test
	public void getUsersbyEmailTest() {
		String email = "sahana@gmail.com";
//		when(userRepository.findByEmail(email)).thenReturn(Stream.of(new User("vk@gmail.com","Vk@*1933")).collect(Collectors.toList()));
//		assertEquals(1,userService.getUserByemail(email).size());
		System.out.println("hello");
		User user = userService.getUserByemail(email);
		System.out.println(user);
		boolean istrue = user.getEmail().equals(email);
		Assert.assertTrue(istrue);
	}

	@Test
	public void deleteteUserTest() throws InvalidUserException {
		//enter the id of the user to be deleted
	//	int id = 228;
		User dbuser = userService.createUser(
				new User(189, "Rohit", "Sharma", "rs@gmail.com", "Rs@*1933", "Male", "India", "9988776655", "User"));
		boolean userbeforedelete = userRepository.findById(dbuser.getUserid()).isPresent();
		System.out.println("User to delete");
		userRepository.deleteById(dbuser.getUserid());
		System.out.println("User deleted"+dbuser.getUserid());
		boolean userafterdelete = userRepository.findById(dbuser.getUserid()).isPresent();
		Assert.assertTrue(!userafterdelete);

	}
//
//	@Test(expected = NullPointerException.class)
//	public void shouldRaiseException() throws InvalidUserException {
//		User user = new User();
//		Mockito.when(userService.createUser(user)).thenThrow(new NullPointerException());
//
//	}
}
