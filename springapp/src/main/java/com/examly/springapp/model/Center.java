package com.examly.springapp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import com.examly.springapp.model.Slot;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "servicecenter")
public class Center {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long serviceCenterId;

    private String name;
    private String mobileNumber;
    private String address;
    private String city;
    private String pincode;
    private String imgUrl;
    private String email;
    private String description;

    @OneToMany(targetEntity = Slot.class, cascade = CascadeType.ALL)
    private List slots;

    public void initSlots() {
        LocalDate startDate = LocalDate.now();
        slots = new ArrayList<>();
        for (int i = 0; i < 90; i++) {
            Slot slot = new Slot();
            LocalDate nextDate = startDate.plusDays(1);
            startDate = nextDate;
            DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE;
            String date = nextDate.format(formatter);
            slot.setDate(date);
            slot.setTen(true);
            slot.setEleven(true);
            slot.setTwelve(true);
            slot.setThirteen(true);
            slot.setFourteen(true);
            slot.setFifteen(true);
            slot.setSixteen(true);
            slot.setSeventeen(true);
            slot.setEighteen(true);
            slots.add(slot);
        }
    }

}
