package com.examly.springapp.service.impl;

import com.examly.springapp.model.AppointmentInfo;
import com.examly.springapp.model.Center;
import com.examly.springapp.repo.AppointmentInfoRepository;
import com.examly.springapp.service.AppointmentInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    @Override
    public AppointmentInfo editAppointment(AppointmentInfo appointmentInfo,String id) {
        // List<Center> serviceCenters = viewCenter();
        // for (Center x : serviceCenters) {
        // if (x.getId() == id) {
        // x.setName(serviceCenter.getName());
        // x.setMobileNumber(serviceCenter.getMobileNumber());
        // x.setAddress(serviceCenter.getAddress());
        // x.setImgUrl(serviceCenter.getImgUrl());
        // x.setEmail(serviceCenter.getEmail());
        // x.setDescription(x.getDescription());
        // }
        // }
        Optional<AppointmentInfo> appointmentinfo = appointmentInfoRepository.findById(Long.parseLong(id));

        AppointmentInfo myAppointment = appointmentinfo.orElseThrow(() -> new RuntimeException("No such data found"));

        myAppointment.setProductName(appointmentInfo.getProductName());
        myAppointment.setPurchaseDate(appointmentInfo.getPurchaseDate());
        myAppointment.setProductModelNo(appointmentInfo.getProductModelNo());
        myAppointment.setProblemStatement(appointmentInfo.getProblemStatement());
        myAppointment.setBookingDate(appointmentInfo.getBookingDate());
        myAppointment.setBookingTime(appointmentInfo.getBookingTime());

        appointmentInfoRepository.save(myAppointment);

        return myAppointment;
    }

    @Override
    public AppointmentInfo deleteAppointment(String id) {
        List<AppointmentInfo> appointmentinfo = allAppointments();
        AppointmentInfo appointmentInfo = new AppointmentInfo();
        for (AppointmentInfo x : appointmentinfo) {
            if (x.getAppointmentId() == Long.parseLong(id)) {
            	appointmentInfo = x;
                appointmentInfoRepository.delete(x);
            }
        }
        return appointmentInfo;
    }
}
