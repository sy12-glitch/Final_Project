package com.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.entity.User;
import com.application.services.UserService;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = {"https://"})
public class UserController {

	@Autowired
	UserService userService;
	
	@GetMapping("/{id}")
	public User findBookById(@PathVariable int id) {
		return userService.findUserById(id);
	}
	@GetMapping("")
	public List<User> findUsers(){
		return userService.findUsers();
	}
	
	@PostMapping("/adduser")
	public User createUser(@RequestBody User user) {
		System.out.println(user);
		return userService.createUser(user);
	}
	
	@PutMapping("update/{id}")
	public User updatesUser(@PathVariable int id,@RequestBody User user) {
		return userService.updateUser(id, user);
	}
	
	@DeleteMapping("/{id}")
	public boolean deleteUser(@PathVariable int id) {
		userService.deleteUser(id);
		return true;

}
}
