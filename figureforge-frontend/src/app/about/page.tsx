import React from "react";
import Image from "next/image";
import Banner from "../components/Banner/Banner";
import Rating from "../../../public/rating.jpg";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between mx-auto w-full max-w-screen-xl">
      <div className="w-full relative">
        <Image
          className=" brightness-90"
          src="https://daweebstop.com/cdn/shop/files/IMG_0171_c8d72572-d4b5-42b3-a240-b9bc2cc2aca9.jpg?v=1661460103"
          width={1600}
          height={900}
          alt="Hero Image"
        />
      </div>
      <Banner name="ABOUT US" />
      <div className="my-10">
        <p>
          At Figure Forge, our story is a tapestry woven with threads of passion
          for action figures and an unwavering commitment to the collector
          community. Nestled in the heart of the city, our shop stands as a
          haven for enthusiasts, both seasoned collectors and those just
          starting their journey. It all began with a shared love for these
          miniature heroes and characters, where the dream was to create a space
          that mirrored the nostalgia and joy these figures bring. Founded by a
          group of collectors, Figure Forge emerged from the desire to curate a
          haven that understood the emotional connections we forge with our
          action figures.
        </p>
      </div>
      <div className="bg-black w-full h-100 flex flex-row justify-between my-10">
        <div className="flex flex-col py-4 justify-around p-4">
          <h1 className=" text-2xl font-bold underline">RATING SYSTEM</h1>
          <h2 className=" font-semibold mt-5">
            ⭐⭐⭐⭐⭐ - 5 Stars: Excellent (Sealed in Box)
          </h2>
          <p>
            A five-star rating for an action figure signifies an exceptional
            collectible. This figure exceeds all expectations, showcasing
            outstanding quality, meticulous design, and an incredibly accurate
            representation of the character.
          </p>
          <h2 className=" font-semibold mt-5">
            ⭐⭐⭐⭐ - 4 Stars: Very Good (Sealed in Box with box damage)
          </h2>
          <p>
            A four-star rating for an action figure suggests that it surpasses
            the average expectations of a collector. The figure exhibits a high
            level of quality, good design, and accurate representation of the
            character. It might have some minor flaws or room for improvement
            but overall offers a positive experience.
          </p>
          <h2 className=" font-semibold mt-5">
            ⭐⭐⭐ - 3 Stars: Good (Back In Box)
          </h2>
          <p>
            A three-star rating for an action figure implies that it meets the
            basic expectations of an average collector. It's a decent figure
            with acceptable quality and design, providing a satisfactory
            representation of the character.
          </p>
          <h2 className=" font-semibold mt-5">⭐⭐ - 2 Stars: Fair</h2>
          <p>
            A two-star rating for an action figure suggests that it falls below
            average expectations. The figure might have several noticeable
            flaws, such as subpar quality, limited articulation, or poor design.
          </p>
          <h2 className=" font-semibold mt-5">⭐ - 1 Stars: Poor</h2>
          <p>
            A one-star rating for an action figure indicates significant
            shortcomings and dissatisfaction. This figure fails to meet even the
            most basic expectations of a collector. It might possess severe
            quality issues, poor design, lack of accuracy to the character, or
            limited functionality.
          </p>
        </div>
        <Image
          className=" brightness-75"
          src={Rating}
          width={400}
          height={400}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default About;
