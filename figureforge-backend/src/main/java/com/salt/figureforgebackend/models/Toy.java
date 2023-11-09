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
    private String origin= "";
    private String brand = "";
    private Double price  = 0.0;
    private Integer width = 0;
    private Integer diameter = 0;
    private Integer height = 0;
    private Integer rating = 0;
    @Column(columnDefinition = "text")
    private String description = "";
    @Column(columnDefinition = "text")
    private String detail = "";
    @OneToMany(
            mappedBy = "toy",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER)
    private List<Picture> pictures= new ArrayList<>();

    public Toy() {
    }

    public Toy(String name, String origin, String brand, Double price, Integer width, Integer diameter, Integer height, String description, String detail) {
        this.name = name;
        this.origin = origin;
        this.brand = brand;
        this.price = price;
        this.width = width;
        this.diameter = diameter;
        this.height = height;
        this.description = description;
        this.detail = detail;
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
        return diameter;
    }

    public void setDiameter(Integer diameter) {
        this.diameter = diameter;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
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
