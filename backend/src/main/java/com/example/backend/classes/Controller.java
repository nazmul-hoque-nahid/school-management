package com.example.backend.classes;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/class")
public class Controller {
    private final ClassService service;
    public Controller(ClassService service){
        this.service=service;
    }
    @PostMapping("/create")
    public ClassEntity createClass(@RequestBody ClassEntity classEntity){
        return service.createClass(classEntity);
    }
}
