package com.example.backend.user.controller;

import com.example.backend.user.dto.LoginRequest;
import com.example.backend.user.dto.RegisterRequest;
import com.example.backend.user.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService service;

    public AuthController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest registerRequest) {

        service.register(registerRequest);
        return "User created";
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {

     return   service.login(loginRequest);

    }
}