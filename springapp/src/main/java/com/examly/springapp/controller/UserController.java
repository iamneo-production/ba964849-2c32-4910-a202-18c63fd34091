package com.examly.springapp.controller;

import com.examly.springapp.model.Login;
import com.examly.springapp.model.User;
import com.examly.springapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    public List<User> getUser(){
        return this.userService.getUser();
    }

    //create user
    @PostMapping("/signup")
    @CrossOrigin(origins = "http://localhost:3000")
    public User createUser(@RequestBody User user){
        return this.userService.createUser(user);
    }

    //login
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public boolean userLogin(@RequestBody Login login){
        List<User> user = getUser();
        for(User u : user){
            if(login.getEmail().equals(u.getEmail()) && login.getPassword().equals(u.getPassword())){
                return true;
            }
        }
        return false;
    }
}
