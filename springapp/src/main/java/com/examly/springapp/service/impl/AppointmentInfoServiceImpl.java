package com.examly.springapp.service.impl;

import com.examly.springapp.model.AppointmentInfo;
import com.examly.springapp.model.Center;
import com.examly.springapp.repo.AppointmentInfoRepository;
import com.examly.springapp.service.AppointmentInfoService;
import com.examly.springapp.service.CenterService;
import com.examly.springapp.model.Slot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AppointmentInfoServiceImpl implements AppointmentInfoService {
    @Autowired
    private AppointmentInfoRepository appointmentInfoRepository;

    @Autowired
    private CenterService centerService;

    Map<String, String> timeMap;

    AppointmentInfoServiceImpl() {
        timeMap = new HashMap<>();
        timeMap.put("10:00", "ten");
        timeMap.put("11:00", "eleven");
        timeMap.put("12:00", "twelve");
        timeMap.put("13:00", "thirteen");
        timeMap.put("14:00", "fourteen");
        timeMap.put("15:00", "fifteen");
        timeMap.put("16:00", "sixteen");
        timeMap.put("17:00", "seventeen");
        timeMap.put("18:00", "eighteen");
    }

    @Override
    public AppointmentInfo addAppointment(AppointmentInfo appointmentInfo) {

        long centerId = appointmentInfo.getServiceCenterId();

        Center center = centerService.getCenter(centerId);

        String slotTime = timeMap.get(appointmentInfo.getBookingTime());

        List<Slot> slotList = center.getSlots();

        for (Slot slot : slotList) {
            if (slot.getDate() == appointmentInfo.getBookingDate()) {
                if (slotTime == "ten") {
                    slot.setTen(true);
                } else if (slotTime == "eleven") {
                    slot.setEleven(true);
                } else if (slotTime == "twelve") {
                    slot.setTwelve(true);
                } else if (slotTime == "thirteen") {
                    slot.setThirteen(true);
                } else if (slotTime == "fourteen") {
                    slot.setFourteen(true);
                } else if (slotTime == "fifteen") {
                    slot.setFifteen(true);
                } else if (slotTime == "sixteen") {
                    slot.setSixteen(true);
                } else if (slotTime == "seventeen") {
                    slot.setSeventeen(true);
                } else if (slotTime == "eighteen") {
                    slot.setEighteen(true);
                }
            }
        }

        centerService.editCenter(center, centerId);

        return this.appointmentInfoRepository.save(appointmentInfo);
    }

    @Override
    public List<AppointmentInfo> allAppointments() {
        return this.appointmentInfoRepository.findAll();
    }

    @Override
    public AppointmentInfo editAppointment(AppointmentInfo appointmentInfo, String id) {

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
