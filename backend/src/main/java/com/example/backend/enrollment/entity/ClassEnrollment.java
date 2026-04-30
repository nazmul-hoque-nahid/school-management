package com.example.backend.enrollment.entity;

import com.example.backend.student.entity.Student;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "class_enrollment",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"student_id", "session_id"}),
                @UniqueConstraint(columnNames = {"class_id", "session_id", "roll_no"})
        })
public class ClassEnrollment {
    @Id
    private String enrollmentId;
    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;
    private Integer classId;
    private Integer sessionId;
    private Integer rollNo;
    private LocalDateTime enrollmentDate;
    @PrePersist
    public void prePersist() {
        this.enrollmentId = UUID.randomUUID().toString();
        this.enrollmentDate = LocalDateTime.now();
    }

}