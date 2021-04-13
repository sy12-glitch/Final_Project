package com.application.controllers;

import java.time.LocalDate;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.entity.ErrorMessage;
import com.application.entity.User;
import com.application.exceptions.InvalidUserException;
import com.application.services.UserService;

@RestController
@RequestMapping("home")
@CrossOrigin(origins = {"https://"})
public class UserController {

	@Autowired
	UserService userService;
	
	@GetMapping("/{id}")
	public User findUserById(@PathVariable int id) {
		return userService.findUserById(id);
	}
	@GetMapping("/users")
	public List<User> findUsers(){
		return userService.findUsers();
	}
	
	@PostMapping("/signup")
	public ResponseEntity<User> createUserSignup(@RequestBody User user) throws InvalidUserException {
		System.out.println(user);
		User saveduser = userService.createUser(user);
		ResponseEntity<User> res = ResponseEntity.status(HttpStatus.CREATED).body(saveduser);
		System.out.println(res);
		return res;
		//return userService.createUser(user);
	}
	@PostMapping("/login")
	public String Userlogin(@RequestBody User user) throws InvalidUserException {
		System.out.println(user);
		User loggeduser = userService.Userlogin(user);
		ResponseEntity<User> res =new ResponseEntity<User>(user,HttpStatus.ACCEPTED);
		System.out.println(res);
	//	return res;
		return "Login success";
	}
	
	@PutMapping("update/{id}")
	public User updatesUser(@PathVariable int id,@RequestBody User user) {
		return userService.updateUser(id, user);
	}
	
	@DeleteMapping("delete/{id}")
	public boolean deleteUser(@PathVariable int id) throws InvalidUserException {
		userService.deleteUser(id);
		return true;

}
	@ExceptionHandler(InvalidUserException.class)
	public ResponseEntity<ErrorMessage> handleException(HttpServletRequest req, InvalidUserException e){
		ErrorMessage error = new ErrorMessage(e.getMessage(), LocalDate.now(), req.getRequestURL(), HttpStatus.BAD_REQUEST);
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	}
}
