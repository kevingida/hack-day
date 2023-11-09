"use client";
import axios from "axios";
import { type } from "os";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

export type Toy = {
  id: Number;
  name: String;
  origin: String;
  brand: String;
  price: Number;
  width: Number;
  diameter: Number;
  height: Number;
  rating: number;
  description: String;
  detail: String;
  pictures: String[];
};

const Catalog = () => {
  const [data, setData] = useState<Toy[]>();
  const fetchbackend = async () => {
    const response = await axios.get("http://localhost:8080/api/toys");
    setData(response.data);
  };

  useEffect(() => {
    fetchbackend();
  }, []);
  return (
    <section className="grid lg:grid-cols-3 lg:gap-4">
      {data?.map((toy) => <Card toy={toy} />)}
    </section>
  );
};

export default Catalog;
