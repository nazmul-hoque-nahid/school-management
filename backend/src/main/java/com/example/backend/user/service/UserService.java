package com.example.backend.user.service;

import com.example.backend.user.entity.User;
import com.example.backend.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repo;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository repo,PasswordEncoder passwordEncoder) {
        this.repo = repo;
        this.passwordEncoder=passwordEncoder;
    }

    public User register(String email, String password, String role) {

        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(User.Role.valueOf(role));

        return repo.save(user);
    }

    public User login(String email, String password) {

        User user = repo.findByEmail(email)
                .orElseThrow();

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid credentials");
        }

        return user;
    }
}