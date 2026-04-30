package com.example.backend.admission.repository;

import com.example.backend.admission.entity.AdmissionForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdmissionFormRepository extends JpaRepository<AdmissionForm,String> {

}
