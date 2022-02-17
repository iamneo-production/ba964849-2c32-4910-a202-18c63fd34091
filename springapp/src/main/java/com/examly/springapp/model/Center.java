package com.examly.springapp.model;

import javax.persistence.*;

@Entity
@Table(name = "servicecenter")
public class Center {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String mobileNumber;
    private String address;
    private String imgUrl;
    private String email;
    private String description;

    public Center(){}
    public Center(long id, String name, String mobileNumber, String address, String imgUrl, String email, String description) {
        this.id = id;
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.imgUrl = imgUrl;
        this.email = email;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
