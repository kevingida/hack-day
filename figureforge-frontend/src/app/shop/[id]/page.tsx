"use client";
import Carousel from "@/app/components/Carousel/Carousel";
import { Toy } from "@/app/components/Catalog/Catalog";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Banner from "@/app/components/Banner/Banner";
import Detail from "@/app/components/Detail/Detail";
import { Rating } from "@material-tailwind/react";

type Props = {
  params: { id: string };
};

const Figure = ({ params }: Props) => {
  const [data, setData] = useState<Toy>();
  const fetchbackend = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/toys/" + params.id
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchbackend();
  }, []);
  if (data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24 mx-auto w-full max-w-screen-xl">
        {data?.pictures && <Carousel slides={data.pictures} />}
        <Banner name={data!.name} />
        <Detail toy={data!} />
        <h1>below rating</h1>
        <h1>{data.rating.toString()}</h1>
        <Rating
          unratedColor="amber"
          ratedColor="amber"
          value={data.rating}
          readonly
        />
      </div>
    );
  }
};
export default Figure;
