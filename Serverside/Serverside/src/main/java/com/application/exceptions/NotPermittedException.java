package com.application.exceptions;

public class NotPermittedException extends Exception {
	public NotPermittedException() {
		super();
	}
	public NotPermittedException(String message) {
		super(message);
	}
	public NotPermittedException(Exception e) {
		super(e);
	}
	public NotPermittedException(String m, Exception e) {
		super(m, e);
	}
}
