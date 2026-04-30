package com.example.backend.user.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginRequest {
    public String email;
    public String password;
}