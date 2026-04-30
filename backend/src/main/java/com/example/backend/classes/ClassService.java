package com.example.backend.classes;

import org.springframework.stereotype.Service;

@Service
public class ClassService {
    private  final Repository repository;
    ClassService(Repository repository){
        this.repository=repository;
    }
    public ClassEntity createClass(ClassEntity classEntity){
      return   repository.save(classEntity);
    }
}
