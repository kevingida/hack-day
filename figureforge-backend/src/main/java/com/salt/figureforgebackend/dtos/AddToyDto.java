package com.salt.figureforgebackend.dtos;


import com.salt.figureforgebackend.models.Picture;

import java.util.List;

public record AddToyDto (
    String name,
    String origin,
    String brand,
    Double price,
    Integer width,
    Integer diameter,
    Integer height,
    String description,
    String detail,
    String pictures
) {
}
