package com.examly.springapp.service.impl;

import com.examly.springapp.model.AppointmentInfo;
import com.examly.springapp.repo.AppointmentInfoRepository;
import com.examly.springapp.service.AppointmentInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentInfoServiceImpl implements AppointmentInfoService {
    @Autowired
    private AppointmentInfoRepository appointmentInfoRepository;

    @Override
    public AppointmentInfo addAppointment(AppointmentInfo appointmentInfo) {
        return this.appointmentInfoRepository.save(appointmentInfo);
    }

    @Override
    public List<AppointmentInfo> allAppointments() {
        return this.appointmentInfoRepository.findAll();
    }
}
