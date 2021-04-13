package com.application.exceptions;



public class InvalidUserException extends Exception {
	public InvalidUserException() {
		super();
	}
	public InvalidUserException(String message) {
		super(message);
	}
	public InvalidUserException(Exception e) {
		super(e);
	}
	public InvalidUserException(String m, Exception e) {
		super(m, e);
	}
}
