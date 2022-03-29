package com.examly.springapp.model;

import lombok.*;
import javax.persistence.*;
import com.examly.springapp.model.Center;
import com.examly.springapp.model.User;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long reviewId;
    String dateCreated;
    String reviewContent;

    @ManyToOne
    User user;

    @ManyToOne
    Center center;
}
