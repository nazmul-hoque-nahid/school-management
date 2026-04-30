package com.example.backend.admission.entity;

import ch.qos.logback.core.status.Status;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "admission_forms")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdmissionForm {

    @Id
    private String formId;

    private String applicantName;
    private LocalDate dob;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private Integer intendedClass;
    private Integer sessionId;

    private String birthCertificateNo;
    private String previousSchool;

    private String fatherName;
    private String motherName;
    private String guardianName;

    private String phone;
    private String email;

    private String currentAddress;
    private String permanentAddress;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus applicationStatus = ApplicationStatus.PENDING;

    private LocalDateTime applicationDate;

    @PrePersist
    public void prePersist() {
        this.formId = UUID.randomUUID().toString();
        this.applicationDate = LocalDateTime.now();
    }

}