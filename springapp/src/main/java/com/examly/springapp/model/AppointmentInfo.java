package com.examly.springapp.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Entity

public class AppointmentInfo {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long appointmentId;
    private long userId;
    private long serviceCenterId;
    private String productName;
    private String purchaseDate;
    private String productModelNo;
    private String problemStatement;
    private String bookingDate;
    private String bookingTime;
}
