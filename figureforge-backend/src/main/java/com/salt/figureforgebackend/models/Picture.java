package com.salt.figureforgebackend.models;

import jakarta.persistence.*;

@Entity
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String url;

    @ManyToOne
    @JoinColumn(name = "toy_id", nullable = false)
    private Toy toy;

    public Picture() {
    }

    public Picture(String url) {
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
