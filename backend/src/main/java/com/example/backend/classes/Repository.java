package com.example.backend.classes;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<ClassEntity,String> {
}
