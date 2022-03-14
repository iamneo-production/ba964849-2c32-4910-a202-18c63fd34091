package com.examly.springapp.service.impl;

import com.examly.springapp.model.AppointmentInfo;
import com.examly.springapp.model.Center;
import com.examly.springapp.repo.AppointmentInfoRepository;
import com.examly.springapp.service.AppointmentInfoService;
import com.examly.springapp.service.CenterService;
import com.examly.springapp.service.SlotService;
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

    @Autowired
    private SlotService slotService;

    @Override
    public AppointmentInfo addAppointment(AppointmentInfo appointmentInfo) {

        System.out.println("Function execution started----------------------------");

        long centerId = appointmentInfo.getServiceCenterId();

        String slotTime = appointmentInfo.getBookingTime();

        String bookingDate = appointmentInfo.getBookingDate();

        Slot toUpdateSlot = findSlot(centerId, bookingDate);

        if (toUpdateSlot != null) {

            switch (slotTime) {

                case "10:00":
                    toUpdateSlot.setTen(false);
                    break;
                case "11:00":
                    toUpdateSlot.setEleven(false);
                    break;
                case "12:00":
                    toUpdateSlot.setTwelve(false);
                    break;
                case "13:00":
                    toUpdateSlot.setThirteen(false);
                    break;
                case "14:00":
                    toUpdateSlot.setFourteen(false);
                    break;
                case "15:00":
                    toUpdateSlot.setFifteen(false);
                    break;
                case "16:00":
                    toUpdateSlot.setSixteen(false);
                    break;
                case "17:00":
                    toUpdateSlot.setSeventeen(false);
                    break;
                case "18:00":
                    toUpdateSlot.setEighteen(false);
                    break;
                default:
                    System.out.println("\n\n***********None of the cases matched********\n\n");
            }

            System.out.println("Slot after change: " + toUpdateSlot);

            slotService.editSlot(toUpdateSlot);
        }

        System.out.println("Function execution done------------------------------------------");

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
    public AppointmentInfo deleteAppointment(long id) {

        List<AppointmentInfo> appointmentinfo = allAppointments();

        AppointmentInfo appointmentInfo = new AppointmentInfo();
        for (AppointmentInfo x : appointmentinfo) {
            if (x.getAppointmentId() == id) {
                appointmentInfo = x;
                appointmentInfoRepository.delete(x);
            }
        }

        Long centerId = appointmentInfo.getServiceCenterId();
        String bookingDate = appointmentInfo.getBookingDate();
        String bookingTime = appointmentInfo.getBookingTime();

        Slot toDeleteSlot = findSlot(centerId, bookingDate);

        if (toDeleteSlot != null) {

            switch (bookingTime) {

                case "10:00":
                    toDeleteSlot.setTen(true);
                    break;
                case "11:00":
                    toDeleteSlot.setEleven(true);
                    break;
                case "12:00":
                    toDeleteSlot.setTwelve(true);
                    break;
                case "13:00":
                    toDeleteSlot.setThirteen(true);
                    break;
                case "14:00":
                    toDeleteSlot.setFourteen(true);
                    break;
                case "15:00":
                    toDeleteSlot.setFifteen(true);
                    break;
                case "16:00":
                    toDeleteSlot.setSixteen(true);
                    break;
                case "17:00":
                    toDeleteSlot.setSeventeen(true);
                    break;
                case "18:00":
                    toDeleteSlot.setEighteen(true);
                    break;
                default:
                    System.out.println("\n\n***********None of the cases matched********\n\n");
            }

            slotService.editSlot(toDeleteSlot);
        }

        return appointmentInfo;
    }

    public Slot findSlot(long centerId, String bookingDate) {

        Center center = centerService.getCenter(centerId);

        List<Slot> slotList = center.getSlots();

        Slot requiredSlot = null;

        for (Slot slot : slotList) {
            if (slot.getDate().equals(bookingDate)) {
                requiredSlot = slot;
            }
        }

        return requiredSlot;
    }
}
