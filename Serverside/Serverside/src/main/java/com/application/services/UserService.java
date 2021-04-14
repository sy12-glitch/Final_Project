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

//find users by ID(admin only) -logic for admin access is pending
	public User findUserById(int id) throws InvalidUserException {
		Optional<User> optional = userRepository.findById(id);
		User user = optional.orElse(null);
		System.out.println(user);
		if ((user.getIsactive())) {
			return user;
		} else
			throw new InvalidUserException("Access denied");
	}

//find all users(only admin should have access)-logic for admin access is pending
	public List<User> findUsers() {
		Iterable<User> iterable = userRepository.findAll();
		Iterator<User> iterator = iterable.iterator();
		List<User> users = new ArrayList<User>();

		while (iterator.hasNext()) {
			users.add(iterator.next());
		}

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
		User dbUser = findUserById(id);
		if (dbUser != null) {
			user = userRepository.save(dbUser);
		}
		return user;

	}

//Yet to be finish this method.-logic for admin access is pending
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
		Iterable<User> iterable = userRepository.findAll();
		Iterator<User> iterator = iterable.iterator();
		List<User> users = new ArrayList<User>();

		while (iterator.hasNext()) {
			users.add(iterator.next());
		}
		for (User u1 : users) {
			if (((u1.getEmail().equals(user.getEmail())) && ((u1.getPassword().equals(user.getPassword()))))) {
				isvalid = true;
			} else
				isvalid = false;
			System.out.println(users);
		}
		if (isvalid) {
			user.setIsactive(true);
			System.out.println(user.getIsactive());
			System.out.println(user.getRole());
			return user;
		} else
			throw new InvalidUserException("Invalid credentials");
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
