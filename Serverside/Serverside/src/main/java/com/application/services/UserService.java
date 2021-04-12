package com.application.services;

import java.util.List;
import java.util.Optional;

import java.util.ArrayList;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.entity.User;
import com.application.repositories.UserRepository;
@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public User findUserById(int id) {
		Optional<User> optional = userRepository.findById(id);
		User user = optional.orElse(null);
		
		System.out.println(user);
		
		return user;
	}

	public List<User> findUsers() {
		Iterable<User> iterable = userRepository.findAll();
		Iterator<User> iterator = iterable.iterator();
		List<User> users = new ArrayList<User>();

		while(iterator.hasNext()){
			users.add(iterator.next());
		}

		return users;
	}

	public User createUser(User user) {
		if(user.getUserid() == 0)
			 user = userRepository.save(user);
			return user;
	}

	public User updateUser(int id, User user) {
	User dbUser = findUserById(id);
		if(dbUser != null){
		user=userRepository.save(dbUser);
		}
		return user;
		
	}

	public void deleteUser(int id) {
		userRepository.deleteById(id);
		
	}

}
