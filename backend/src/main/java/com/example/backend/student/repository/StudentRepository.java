package com.example.backend.student.repository;

import com.example.backend.student.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository  extends JpaRepository<Student,String> {

}
