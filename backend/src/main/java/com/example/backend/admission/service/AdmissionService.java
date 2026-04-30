package com.example.backend.admission.service;
import ch.qos.logback.core.status.Status;
import com.example.backend.admission.dto.AdmissionFormRequest;
import com.example.backend.admission.dto.AdmissionResponse;
import com.example.backend.admission.entity.Admission;
import com.example.backend.admission.entity.AdmissionForm;
import com.example.backend.admission.entity.ApplicationStatus;
import com.example.backend.admission.entity.Gender;
import com.example.backend.admission.repository.AdmissionFormRepository;
import com.example.backend.admission.repository.AdmissionRepository;
import com.example.backend.enrollment.entity.ClassEnrollment;
import com.example.backend.enrollment.repository.EnrollmentRepository;
import com.example.backend.student.entity.Student;
import com.example.backend.student.repository.StudentRepository;
import org.springframework.stereotype.Service;
@Service
public class AdmissionService {
private final AdmissionRepository admissionRepo;
private  final AdmissionFormRepository formRepo;
private  final StudentRepository studentRepo;
private  final  EnrollmentRepository enrollmentRepo;
    public AdmissionService(
            AdmissionFormRepository formRepo,
            AdmissionRepository admissionRepo,
            StudentRepository studentRepo,
            EnrollmentRepository enrollmentRepo
    ) {
        this.formRepo = formRepo;
        this.admissionRepo = admissionRepo;
        this.studentRepo = studentRepo;
        this.enrollmentRepo = enrollmentRepo;
    }

    public AdmissionForm apply(AdmissionFormRequest req) {

        AdmissionForm form = new AdmissionForm();

        form.setApplicantName(req.applicantName);
        form.setDob(req.dob);
        form.setGender(Gender.valueOf(req.gender));

        form.setIntendedClass(req.intendedClass);
        form.setSessionId(req.sessionId);

        form.setBirthCertificateNo(req.birthCertificateNo);
        form.setPreviousSchool(req.previousSchool);

        form.setFatherName(req.fatherName);
        form.setMotherName(req.motherName);
        form.setGuardianName(req.guardianName);

        form.setPhone(req.phone);
        form.setEmail(req.email);

        form.setCurrentAddress(req.currentAddress);
        form.setPermanentAddress(req.permanentAddress);

        return formRepo.save(form);
    }

    public AdmissionForm approve(String id) {
        AdmissionForm form = formRepo.findById(id).orElseThrow();
        form.setApplicationStatus(ApplicationStatus.APPROVED);
        return formRepo.save(form);
    }

    public AdmissionForm reject(String id) {
        AdmissionForm form = formRepo.findById(id).orElseThrow();
        form.setApplicationStatus(ApplicationStatus.REJECTED);
        return formRepo.save(form);
    }

    public void confirmAdmission(String formId) {

        AdmissionForm form = formRepo.findById(formId)
                .orElseThrow();

        if (form.getApplicationStatus() != ApplicationStatus.APPROVED) {
            throw new RuntimeException("Form not approved");
        }

        // 1. Create Admission
        Admission admission;
        admission = new Admission();
        admission.setForm(form);
        admissionRepo.save(admission);

        // 2. Create Student
        Student student = new Student();
        student.setAdmission(admission);
        student.setFullName(form.getApplicantName());
        student.setDob(form.getDob());
        student.setGender(Student.Gender.valueOf(form.getGender().name()));
        student.setPhone(form.getPhone());
        student.setEmail(form.getEmail());
        studentRepo.save(student);

        // 3. Create Enrollment
        ClassEnrollment enrollment = new ClassEnrollment();
        enrollment.setStudent(student);
        enrollment.setClassId(form.getIntendedClass());
        enrollment.setSessionId(form.getSessionId());
        enrollment.setRollNo(1); // temporary
        enrollmentRepo.save(enrollment);
    }
}