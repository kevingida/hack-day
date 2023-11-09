package com.salt.figureforgebackend.dtos;

import java.util.List;

public record ToyResponseDTO(
        Long id,
        String name,
        String origin,
        String brand,
        Double price,
        Integer width,
        Integer diameter,
        Integer height,
        Integer rating,
        String description,
        String detail,
        List<String> pictures
) {
}
