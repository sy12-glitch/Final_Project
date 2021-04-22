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
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserController {

	@Autowired
	UserService userService;
	
	@GetMapping("/users/{id}")
	public User findUserById(@PathVariable int id) throws InvalidUserException {
		return userService.findUserById(id);
	}
	
	@GetMapping("/getuser")
	public User getUserByEmail(@RequestBody String email) {
		return userService.getUserByemail(email);
	}
	
	@GetMapping("/users")
	public List<User> findUsers(){
		return userService.findUsers();
	}
	
	@PostMapping("user/signup")
	public ResponseEntity<User> createUserSignup(@RequestBody User user) throws InvalidUserException {
		System.out.println(user);
		User saveduser = userService.createUser(user);
		ResponseEntity<User> res = ResponseEntity.status(HttpStatus.CREATED).body(saveduser);
		System.out.println(res);
		return res;
		//return "SingUp success";
		//return userService.createUser(user);
	}
	@PostMapping("user/login")
	public ResponseEntity<User> Userlogin(@RequestBody User user) throws InvalidUserException {
		//System.out.println(user);
		User loggeduser = userService.Userlogin(user);
		ResponseEntity<User> res =new ResponseEntity<User>(user,HttpStatus.ACCEPTED);
		System.out.println(res);
		System.out.println("Login success");
	//	return res;
		return res;
	}

	@PostMapping("user/logout")
	public ResponseEntity<User> Userlogout(@RequestBody User user) throws InvalidUserException {
		// System.out.println(user);
		User loggedoutuser = userService.Userlogout(user);
		ResponseEntity<User> res = new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
		System.out.println(res);
		System.out.println("Logot success");
		// return res;
		return res;
	}
	
	@PutMapping("update/{userid}")
	public User updatesUser(@PathVariable int userid,@RequestBody User user) throws InvalidUserException {
		return userService.updateUser(userid, user);
	}
	
	@DeleteMapping("delete/{userid}")
	public boolean deleteUser(@PathVariable int userid) throws InvalidUserException {
		userService.deleteUser(userid);
		return true;

}

	@GetMapping("user/isloggedin")
	public boolean isloggedin(@RequestBody User user) {
		return userService.isloggedin(user);
		
	}

	@ExceptionHandler(InvalidUserException.class)
	public ResponseEntity<ErrorMessage> handleException(HttpServletRequest req, InvalidUserException e){
		ErrorMessage error = new ErrorMessage(e.getMessage(), LocalDate.now(), req.getRequestURL(), HttpStatus.BAD_REQUEST);
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	}
}
