package com.examly.springapp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "servicecenter")
public class Center {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long serviceCenterId;

    private String name;
    private String mobileNumber;
    private String address;
    private String imgUrl;
    private String email;
    private String description;

}
