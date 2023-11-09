import React from "react";
import { Toy } from "../Catalog/Catalog";
import Link from "next/link";
import Image from "next/image";

type Props = {
  toy: Toy;
};

const Card = ({ toy }: Props) => {
  return (
    <Link
      href={`/shop/${toy.id}`}
      className="w-[300px] h-[380px] bg-purple border-4 border-white flex flex-col justify-between"
    >
      <div className="w-full h-[300px] border-white flex item-center justify-center overflow-hidden">
        <Image
          className="w-full"
          src={toy.pictures[1].toString()}
          alt="some Pic"
          width={300}
          height={500}
        />
      </div>

      <h3>{toy.name}</h3>
      <h3>$ {toy.price.toString()}</h3>
    </Link>
  );
};

export default Card;
