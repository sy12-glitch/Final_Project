package com.application.repositories;

import org.springframework.data.repository.CrudRepository;


import com.application.entity.User;


public interface UserRepository extends CrudRepository<User, Integer> {

}
