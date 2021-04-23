package com.application.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import com.application.entity.Order;
import com.application.entity.User;

public 	interface OrderRepository extends CrudRepository<Order, Integer> {
	public ArrayList<Order> findByUser(User user);
}