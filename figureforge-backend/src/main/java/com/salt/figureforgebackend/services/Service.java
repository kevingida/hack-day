package com.salt.figureforgebackend.services;

import com.salt.figureforgebackend.dtos.AddToyDto;
import com.salt.figureforgebackend.dtos.ToyResponseDTO;
import com.salt.figureforgebackend.models.Picture;
import com.salt.figureforgebackend.models.Toy;
import com.salt.figureforgebackend.repositories.PictureRepository;
import com.salt.figureforgebackend.repositories.ToyRepository;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@org.springframework.stereotype.Service
public class Service {

    private final ToyRepository toyRepo;
    private final PictureRepository pictureRepo;

    public Service(ToyRepository toyRepo, PictureRepository pictureRepo) {
        this.toyRepo = toyRepo;
        this.pictureRepo = pictureRepo;
    }

    public List<ToyResponseDTO> getAllToys() {
        return toyRepo.findAll().stream().map(toy -> new ToyResponseDTO(toy.getId(), toy.getName(),toy.getOrigin(), toy.getBrand(), toy.getPrice(),toy.getWidth(), toy.getDiameter(), toy.getHeight(), toy.getRating(), toy.getDescription(), toy.getDetail(), toy.getPictures().stream().map(pic -> pic.getUrl()).toList())).collect(Collectors.toList());
    }

    public ToyResponseDTO getToyById(Long id) {
         Toy toy = toyRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Toy not found"));
        return new ToyResponseDTO(toy.getId(), toy.getName(),toy.getOrigin(), toy.getBrand(), toy.getPrice(),toy.getWidth(), toy.getDiameter(), toy.getHeight(), toy.getRating(), toy.getDescription(), toy.getDetail(), toy.getPictures().stream().map(pic -> pic.getUrl()).toList());
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
