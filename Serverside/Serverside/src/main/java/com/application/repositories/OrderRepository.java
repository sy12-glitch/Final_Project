package com.application.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.application.entity.Order;
import com.application.entity.User;

public 	interface OrderRepository extends CrudRepository<Order, Integer> {
	public List<Order> findByUser(User user);
}