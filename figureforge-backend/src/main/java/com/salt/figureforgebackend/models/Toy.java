package com.salt.figureforgebackend.models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;


@Entity
public class Toy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String origin;
    private String brand;
    private Double price;
    private Integer width;
    private Integer Diameter;
    private Integer Height;
    private Integer rating;
    @Column(columnDefinition = "text")
    private String description;
    @Column(columnDefinition = "text")
    private String detail;
    @OneToMany(
            mappedBy = "toy",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER)
    private List<Picture> pictures= new ArrayList<>();

    public Toy() {
    }

    public Toy(String name, String origin, String brand, Double price, Integer width, Integer diameter, Integer height, Integer rating, String description, String detail, List<Picture> pictures) {
        this.name = name;
        this.origin = origin;
        this.brand = brand;
        this.price = price;
        this.width = width;
        Diameter = diameter;
        Height = height;
        this.rating = rating;
        this.description = description;
        this.detail = detail;
        this.pictures = pictures;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getDiameter() {
        return Diameter;
    }

    public void setDiameter(Integer diameter) {
        Diameter = diameter;
    }

    public Integer getHeight() {
        return Height;
    }

    public void setHeight(Integer height) {
        Height = height;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public List<Picture> getPictures() {
        return pictures;
    }

    public void setPictures(List<Picture> pictures) {
        this.pictures = pictures;
    }
}
