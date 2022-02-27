package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Login {

    private String email;
    private String password;
}
