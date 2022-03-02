package com.examly.springapp.service;

import com.examly.springapp.model.AppointmentInfo;
//import com.examly.springapp.model.Center;
import java.util.List;

public interface AppointmentInfoService {
    AppointmentInfo addAppointment(AppointmentInfo appointmentInfo);

    List<AppointmentInfo> allAppointments();

    public AppointmentInfo editAppointment(AppointmentInfo appointmentInfo,String id);

    public AppointmentInfo deleteAppointment(String id);
}
