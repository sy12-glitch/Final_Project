package com.application.entity;

import java.time.LocalDate;

import org.springframework.http.HttpStatus;

public class ErrorMessage {
	private String error;
	private LocalDate date;
	private StringBuffer url;
	private HttpStatus statusCode;
	
	public ErrorMessage() {}
	
	public ErrorMessage(String error, LocalDate date, StringBuffer url, HttpStatus statusCode) {
		super();
		this.error = error;
		this.date = date;
		this.url = url;
		this.statusCode = statusCode;
	}
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public StringBuffer getUrl() {
		return url;
	}
	public void setUrl(StringBuffer url) {
		this.url = url;
	}
	public HttpStatus getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(HttpStatus statusCode) {
		this.statusCode = statusCode;
	}
	
	
	
}