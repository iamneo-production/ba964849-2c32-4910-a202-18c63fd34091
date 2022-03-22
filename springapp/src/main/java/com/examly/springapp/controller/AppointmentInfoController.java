package com.examly.springapp.controller;

import com.examly.springapp.model.AppointmentInfo;

import com.examly.springapp.model.Center;
import com.examly.springapp.repo.CenterRepository;
import com.examly.springapp.service.AppointmentInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentInfoController {
    // properties
    @Autowired
    private AppointmentInfoService appointmentInfoService;

    //Booking Appointment
    @PostMapping("/bookappointment")
    public AppointmentInfo addAppointment(@RequestBody AppointmentInfo appointmentInfo) {
        return this.appointmentInfoService.addAppointment(appointmentInfo);

    }
    //Return all appointments details
    @GetMapping("/getAppointments")
    public List<AppointmentInfo> getAppointments() {
        return this.appointmentInfoService.allAppointments();
    }

    //Return all appointments details by UserId
    @GetMapping("/getAppointments/{id}")
    public List<AppointmentInfo> getUserAppointments(@PathVariable String id) {
        long Id = Long.parseLong(id);
        return this.appointmentInfoService.getAppointmentByUserId(Id);
    }

    // updating Service Center
    @PutMapping(value = "/editAppointment/{id}")
    public AppointmentInfo editAppointment(@RequestBody AppointmentInfo appointmentInfo,
            @PathVariable("id") String id) {
        return this.appointmentInfoService.editAppointment(appointmentInfo, id);
    }

    // delete Service Center
    @DeleteMapping("/deleteAppointment/{id}")
    public AppointmentInfo deleteAppointment(@PathVariable String id) {
        return this.appointmentInfoService.deleteAppointment(Long.parseLong(id));
    }
}
