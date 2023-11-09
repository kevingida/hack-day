package com.salt.figureforgebackend.repositories;

import com.salt.figureforgebackend.models.Toy;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToyRepository extends ListCrudRepository<Toy, Long> {
}
