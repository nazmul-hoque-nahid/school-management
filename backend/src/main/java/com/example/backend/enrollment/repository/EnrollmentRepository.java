package com.example.backend.enrollment.repository;

import com.example.backend.enrollment.entity.ClassEnrollment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnrollmentRepository extends JpaRepository<ClassEnrollment,String> {

}
