package com.salt.figureforgebackend.repositories;

import com.salt.figureforgebackend.models.Picture;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PictureRepositories extends ListCrudRepository<Picture, Long> {
    List<Picture> findByToyId(Long id);
}
