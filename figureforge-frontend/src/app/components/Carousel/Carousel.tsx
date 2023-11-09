import Image from "next/image";
import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import slider from "./Carousel.module.css";

type Props = {
  slides: String[];
};

const CarouselPage = ({ slides }: Props) => {
  const [CurrentIndex, SetCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = CurrentIndex == 0;
    const newIndex = isFirstSlide ? slides.length - 1 : CurrentIndex - 1;
    SetCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = CurrentIndex == slides.length - 1;
    const newIndex = isLastSlide ? 0 : CurrentIndex + 1;
    SetCurrentIndex(newIndex);
  };

  return (
    <div className={slider.container}>
      <div className={slider.content}>
        <div className={slider.left} onClick={goToPrevious}>
          〈
        </div>
        <div className={slider.right} onClick={goToNext}>
          〉
        </div>
        <div
          className={slider.slide}
          style={{ backgroundImage: `url(${slides[CurrentIndex]})` }}
        />
      </div>
    </div>
  );
};

export default CarouselPage;
