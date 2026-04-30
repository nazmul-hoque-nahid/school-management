package com.example.backend.classes;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="classes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClassEntity {
    @Id
    private int classId;
    private  String className;
}
