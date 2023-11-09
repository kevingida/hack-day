package com.salt.figureforgebackend.services;

import com.salt.figureforgebackend.dtos.AddToyDto;
import com.salt.figureforgebackend.models.Picture;
import com.salt.figureforgebackend.models.Toy;
import com.salt.figureforgebackend.repositories.PictureRepositories;
import com.salt.figureforgebackend.repositories.ToyRepository;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@org.springframework.stereotype.Service
public class Service {

    private final ToyRepository toyRepo;
    private final PictureRepositories pictureRepo;

    public Service(ToyRepository toyRepo, PictureRepositories pictureRepo) {
        this.toyRepo = toyRepo;
        this.pictureRepo = pictureRepo;
    }

    public List<Toy> getAllToys() {
        return toyRepo.findAll();
    }

    public Toy getToyById(Long id) {
        return toyRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Toy not found"));
    }

    public Toy addToy(AddToyDto addToyDto) {
        Toy newToy = new Toy(
                addToyDto.name(),
                addToyDto.origin(),
                addToyDto.brand(),
                addToyDto.price(),
                addToyDto.width(),
                addToyDto.diameter(),
                addToyDto.height(),
                addToyDto.description(),
                addToyDto.detail()
        );

        toyRepo.save(newToy);

    addToyDto.pictures().stream()
                .map(pic -> new Picture(pic,newToy))
                .forEach(pictureRepo::save);
        return toyRepo.findById(newToy.getId())
                .orElseThrow(() -> new NoSuchElementException("Toy not found"));
    }

    public void deleteToy(Long id) {
        toyRepo.deleteById(id);
    }
}
