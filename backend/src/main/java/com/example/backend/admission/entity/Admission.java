package com.example.backend.admission.entity;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.UUID;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="admissions")
public class Admission {
    @Id
    private String admissionId;
    @OneToOne
    @JoinColumn(name="form_id",nullable=false,unique=true)
    private AdmissionForm form;
    private LocalDateTime admissionDate;
    @PrePersist
    public void prePersist() {
        this.admissionId = UUID.randomUUID().toString();
        this.admissionDate = LocalDateTime.now();
    }
}