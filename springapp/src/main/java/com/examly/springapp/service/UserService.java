package com.examly.springapp.service;

import com.examly.springapp.model.User;

import java.util.List;

public interface UserService {
    // create user
    public String createUser(User user);

    public List<User> getUser();
}
