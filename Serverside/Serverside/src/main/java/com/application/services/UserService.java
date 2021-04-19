package com.application.services;

import java.util.List;

import java.util.Optional;

import java.util.ArrayList;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.entity.User;
import com.application.exceptions.InvalidUserException;
import com.application.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
//	private User.role r;
	private boolean isvalid = false;

//find users by ID
	public User findUserById(int id) throws InvalidUserException {
		Optional<User> optional = userRepository.findById(id);
		User user = optional.orElse(null);
		if ((user.getIsactive())) {
			return user;
		} else
			throw new InvalidUserException("Access denied");
	}

//find all users
	public List<User> findUsers() {
		Iterable<User> iterable = userRepository.findAll();
		Iterator<User> iterator = iterable.iterator();
		List<User> users = new ArrayList<User>();

		while (iterator.hasNext()) {
			users.add(iterator.next());
		}
		System.out.println(users.toString());
		return users;
	}

//New User signup(POST method)
	public User createUser(User user) throws InvalidUserException {
		if (((user.getFname() == null) || (user.getFname().length() == 0) || (namevalidation(user.getFname())))) {
			throw new InvalidUserException("Name not valid");

		} else if (!(emailvalidation(user.getEmail()))) {
			throw new InvalidUserException("Email ID is is incorrect");
		} else if (!(passwordvalidation(user.getPassword()))) {
			throw new InvalidUserException("Password incorrect");
		} else if (!(mobilenovalidation(user.getMobile()))) {
			throw new InvalidUserException("Invalid mobile number");
		} else {
			return userRepository.save(user);
		}
	}

//update service(PUT method)
	public User updateUser(int id, User user) throws InvalidUserException {
		user.setUserid(id);
		userRepository.save(user);
		return user;

	}

//
	public void deleteUser(User user, int id) throws InvalidUserException {
		Optional<User> optional = userRepository.findById(id);
		User dbusers = optional.orElse(null);
		if (dbusers != null && user.getRole().equals("ADMIN") && (user.getIsactive())) {
			userRepository.deleteById(id);
		} else
			throw new InvalidUserException("Permission Denied");

	}
	// User user=new User();
	// if((user.getRole().equals(("ADMIN")))||(user.getRole().equals("admin"))||(user.getRole().equals("Admin"))){
	// userRepository.deleteById(id);
	// }else
	// throw new InvalidUserException("Permission Denied");

	// }
//login service
	public User Userlogin(User user) throws InvalidUserException {
		User users = userRepository.findByEmail(user.getEmail());
		if ((user.getEmail().equals("admin@gmail.com")) && (user.getPassword().equals("Admin@123"))) {
			user.setUserid(1);
			user.setFname("Admin");
			user.setLname("A");
			user.setAddress("Manyata Tech Park");
			user.setRole("Admin");
			user.setMobile("987654321");
			user.setEmail("admin@gmail.com");
			user.setPassword("Admin@123");
			user.setGender("Male");
			user.setIsactive(true);
			if (users==null) {
				userRepository.save(user);
			}
		}

		else if (users == null) {
			throw new InvalidUserException("Invalid username or password.");
		}

		else if ((user.getEmail().equals(users.getEmail())) && (user.getPassword().equals(users.getPassword()))) {

			users.setIsactive(true);
			userRepository.save(users);
		} else {
			throw new InvalidUserException("Invalid username or password.");
		}
		return users;

	}

//logout service
	public User Userlogout(User user) throws InvalidUserException {
		User users = userRepository.findByEmail(user.getEmail());
		System.out.println(users.getIsactive());
		if (users.getIsactive() == true) {
			users.setIsactive(false);
			userRepository.save(users);
		} else {
			throw new InvalidUserException("Invalid username or password.");
		}
		return users;
	}

	public boolean emailvalidation(String email) {
		String emailregex = "[A-ZA-z0-9_\\.]+[@][a-z]+[\\.]([a-z]{2,3})";
		return email.matches(emailregex);
	}

	public boolean passwordvalidation(String password) {
		String passregex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{5,13}$";
		return password.matches(passregex);
	}

	public boolean namevalidation(String name) {
		if (!(name.matches("^[a-zA-Z][a-zA-Z\\\\s]+$"))) {
			return true;
		} else
			return false;
	}

	public boolean mobilenovalidation(String mobile) {
		if (!(mobile.matches("\\\\d{10}$"))) {
			return true;
		} else
			return false;
	}

}
