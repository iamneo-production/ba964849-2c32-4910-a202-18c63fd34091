package com.examly.springapp.controller;

import com.examly.springapp.model.Center;
import com.examly.springapp.service.CenterService;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CenterController {
    // properties
    @Autowired
    private CenterService serviceCenterService;

    // adding Service Center
    @PostMapping("/addServiceCenter")
    @CrossOrigin(origins = "http://localhost:3000")
    public Center addServiceCenter(@RequestBody Center serviceCenter) {
        return this.serviceCenterService.addCenter(serviceCenter);
    }

    // view all Service Center
    @GetMapping("/getServiceCenter")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Center> viewServiceCenter() {
        return this.serviceCenterService.viewCenter();
    }

    // updating Service Center
    @PutMapping(value = "/editServiceCenter")
    @CrossOrigin(origins = "http://localhost:3000")
    public Center editCenter(@RequestBody Center serviceCenter,
            @PathVariable("id") Long id) {
        return this.serviceCenterService.editCenter(serviceCenter, id);
    }

    // delete Service Center
    @DeleteMapping("/deleteServiceCenter/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Center deleteServiceCenter(@PathVariable long id) {
        Center temp = this.serviceCenterService.deleteCenter(id);
        return temp;
    }
}