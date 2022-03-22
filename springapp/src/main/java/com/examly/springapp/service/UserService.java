package com.examly.springapp.service;

import com.examly.springapp.model.User;

import java.util.List;

public interface UserService {
    public String createUser(User user);

    public List<User> getUser();

    public String deleteUser(long id);

    public User updateUser(User user);
}
