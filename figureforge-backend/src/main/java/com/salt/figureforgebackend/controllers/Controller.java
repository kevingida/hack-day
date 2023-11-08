package com.salt.figureforgebackend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/toys")
public class Controller {

    @GetMapping
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Test toys connection");
    }
}
