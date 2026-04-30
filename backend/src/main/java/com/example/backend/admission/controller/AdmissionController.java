package com.example.backend.admission.controller;

import com.example.backend.admission.dto.AdmissionFormRequest;
import com.example.backend.admission.entity.AdmissionForm;
import com.example.backend.admission.service.AdmissionService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admission")
public class AdmissionController {
    private AdmissionService admissionService;
    public AdmissionController(AdmissionService admissionService){
        this.admissionService=admissionService;
    }
    @PostMapping("/apply")
    public AdmissionForm apply(@RequestBody AdmissionFormRequest admissionFormRequest){
          return admissionService.apply(admissionFormRequest);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}/approve")
    public AdmissionForm approve(@PathVariable String id) {
        return admissionService.approve(id);
    }

    @PutMapping("/{id}/reject")
    public AdmissionForm reject(@PathVariable String id) {
        return admissionService.reject(id);
    }
    @PostMapping("/{formId}/confirm")
    public String confirm(@PathVariable String formId) {
        admissionService.confirmAdmission(formId);
        return "Admission confirmed";
    }
}
