package com.salt.figureforgebackend.controllers;

import com.salt.figureforgebackend.models.Toy;
import com.salt.figureforgebackend.services.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/toys")
public class Controller {

    private Service service;

    public Controller(Service service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Test toys connection");
    }

    @GetMapping("{id}")
    public ResponseEntity<Toy> testbyid(@PathVariable Long id) {
        return ResponseEntity.ok(service.getToyById(id));
    }
}
