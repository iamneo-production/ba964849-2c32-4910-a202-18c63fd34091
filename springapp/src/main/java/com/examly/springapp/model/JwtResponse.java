package com.examly.springapp.model;

import lombok.*;

@Data
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class JwtResponse {
    private String token;
}
