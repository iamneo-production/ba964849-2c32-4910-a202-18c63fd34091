package com.examly.springapp.service.impl;

import com.examly.springapp.model.User;
import com.examly.springapp.repo.UserRepository;
import com.examly.springapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public String createUser(User user) {
        boolean emailAlreadyExists = userRepository.existsUserByEmail(user.getEmail());
        boolean mobileAlreadyExists = userRepository.existsUserByMobileNumber(user.getMobileNumber());

        if (emailAlreadyExists) {
            return "Email id already exists";
        }
        if (mobileAlreadyExists) {
            return "Mobile number already exists";
        }
        try {
            userRepository.save(user);
            return "User created succesfully";
        } catch (Exception e) {
            return "User creation failed. Try Again";
        }
    }

    @Override
    public List<User> getUser() {
        return this.userRepository.findAll();
    }
}
