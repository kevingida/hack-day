package com.salt.figureforgebackend.services;

import com.salt.figureforgebackend.models.Toy;
import com.salt.figureforgebackend.repositories.PictureRepositories;
import com.salt.figureforgebackend.repositories.ToyRepository;

import java.util.NoSuchElementException;

@org.springframework.stereotype.Service
public class Service {

    private ToyRepository toyRepo;
    private PictureRepositories pictureRepo;

    public Service(ToyRepository toyRepo, PictureRepositories pictureRepo) {
        this.toyRepo = toyRepo;
        this.pictureRepo = pictureRepo;
    }

    public Toy getToyById(Long id) {
        return toyRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Cart not found"));
    }
}
