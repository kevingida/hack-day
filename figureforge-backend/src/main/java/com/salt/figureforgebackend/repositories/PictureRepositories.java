package com.salt.figureforgebackend.repositories;

import com.salt.figureforgebackend.models.Picture;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureRepositories extends ListCrudRepository<Picture, Long> {
}
