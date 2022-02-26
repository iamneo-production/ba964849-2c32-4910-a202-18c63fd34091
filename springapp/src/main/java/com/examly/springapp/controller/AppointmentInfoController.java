package com.examly.springapp.controller;


import com.examly.springapp.model.AppointmentInfo;
import com.examly.springapp.service.AppointmentInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AppointmentInfoController {
    @Autowired
    private AppointmentInfoService appointmentInfoService;
    @PostMapping("/appointment")
    public AppointmentInfo addAppointment(@RequestBody AppointmentInfo appointmentInfo){
        return this.appointmentInfoService.addAppointment(appointmentInfo);
    }
    @GetMapping("/getAppointments")
    public List<AppointmentInfo> getAppointments(){
        return this.appointmentInfoService.allAppointments();
    }

    @GetMapping("/getAppointments/{id}")
    public List<AppointmentInfo> getUserAppointments(@PathVariable String id){
        List<AppointmentInfo> temp = getAppointments();
        List<AppointmentInfo> result = new ArrayList<>();
        for(AppointmentInfo a:temp){
            if(a.getUserId()==(Long.parseLong(id))){
                result.add(a);
            }
        }
        return result;
    }
}
