package com.examly.springapp.service;

import com.examly.springapp.model.AppointmentInfo;

import java.util.List;

public interface AppointmentInfoService {
    AppointmentInfo addAppointment(AppointmentInfo appointmentInfo);

    List<AppointmentInfo> allAppointments();
}
