package com.example.backend.user.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RegisterRequest {
    public String email;
    public String password;
    public String role;
}
