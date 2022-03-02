package com.examly.springapp.controller;

import com.examly.springapp.model.AppointmentInfo;

import com.examly.springapp.model.Center;
import com.examly.springapp.service.AppointmentInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AppointmentInfoController {

    @Autowired
    private AppointmentInfoService appointmentInfoService;

    @PostMapping("/bookappointment")
    @CrossOrigin(origins = "http://localhost:3000")
    public AppointmentInfo addAppointment(@RequestBody AppointmentInfo appointmentInfo) {
        return this.appointmentInfoService.addAppointment(appointmentInfo);
    }

    @GetMapping("/getAppointments")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<AppointmentInfo> getAppointments() {
        return this.appointmentInfoService.allAppointments();
    }

    @GetMapping("/getAppointments/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<AppointmentInfo> getUserAppointments(@PathVariable String id) {
        List<AppointmentInfo> temp = getAppointments();
        List<AppointmentInfo> result = new ArrayList<>();
        for (AppointmentInfo a : temp) {
            if (a.getUserId() == (Long.parseLong(id))) {
                result.add(a);
            }
        }
        return result;
    }

    // updating Service Center
    @PutMapping(value = "/editAppointment/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public AppointmentInfo editAppointment(@RequestBody AppointmentInfo appointmentInfo,
            @PathVariable("id") String id) {
        return this.appointmentInfoService.editAppointment(appointmentInfo, id);
    }

    // delete Service Center
    @DeleteMapping("/deleteAppointment/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public AppointmentInfo deleteAppointment(@PathVariable String id) {
        AppointmentInfo temp = this.appointmentInfoService.deleteAppointment(id);
        return temp;
    }
}
