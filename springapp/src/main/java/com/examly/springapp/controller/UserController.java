package com.examly.springapp.controller;

import com.examly.springapp.model.Login;
import com.examly.springapp.model.User;
import com.examly.springapp.repo.UserRepository;
import com.examly.springapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    // properties
    @Autowired
    private UserService userService;



    // create user
    @PostMapping("/signup")
    public String createUser(@RequestBody User user) {
        user.setUserType("USER");
        return this.userService.createUser(user);
    }
    // Return all User
    public List<User> getUser() {
        return this.userService.getUser();
    }

    // login
    @PostMapping("/login")
    public User userLogin(@RequestBody Login login) {
        List<User> user = getUser();
        for (User u : user) {
            if (login.getEmail().equals(u.getEmail()) && login.getPassword().equals(u.getPassword())) {
                return u;
            }
        }
        return null;
    }

    //update user
    @PutMapping("/updateUser")
    public User updateUser(@RequestBody User user){
        return this.userService.updateUser(user);
    }
    //delete user
    @DeleteMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable String id){
        return this.userService.deleteUser(Long.parseLong(id));
    }
}
