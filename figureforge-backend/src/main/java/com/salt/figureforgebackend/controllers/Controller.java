package com.salt.figureforgebackend.controllers;

import com.salt.figureforgebackend.dtos.AddToyDto;
import com.salt.figureforgebackend.dtos.ToyResponseDTO;
import com.salt.figureforgebackend.models.Toy;
import com.salt.figureforgebackend.services.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/toys")
public class Controller {

    private Service service;

    public Controller(Service service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<ToyResponseDTO>> test() {
        return ResponseEntity.ok(service.getAllToys());
    }

    @GetMapping("{id}")
    public ResponseEntity<ToyResponseDTO> testbyid(@PathVariable Long id) {
        return ResponseEntity.ok(service.getToyById(id));
    }

    @PostMapping("create")
    ResponseEntity<Toy> addToy(
            @RequestBody AddToyDto addToyDto) {
        return ResponseEntity.accepted().body(service.addToy(addToyDto));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteCart(@PathVariable Long id) {
        service.deleteToy(id);
        return ResponseEntity.noContent().build();
    }
}
