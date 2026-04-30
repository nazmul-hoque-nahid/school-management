package com.example.backend.student.entity;

import com.example.backend.admission.entity.Admission;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "students")
public class Student {

    @Id
    private String studentId;

    @OneToOne
    @JoinColumn(name = "admission_id", nullable = false, unique = true)
    private Admission admission;

    private String fullName;
    private LocalDate dob;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private String phone;
    private String email;

    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.studentId = UUID.randomUUID().toString();
        this.createdAt = LocalDateTime.now();
    }
    public enum Gender {
        Male, Female
    }
}