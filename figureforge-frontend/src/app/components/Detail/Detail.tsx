import React from "react";
import { Toy } from "../Catalog/Catalog";

type Props = {
  toy: Toy;
};

const Detail = ({ toy }: Props) => {
  return (
    <section className="py-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <div className="pr-10">
            <h1>Name </h1>
            <h1>Origin</h1>
            <h1>Brand</h1>
            <h1>Price</h1>
          </div>
          <div>
            <h1> </h1>
            <h1>: {toy.name}</h1>
            <h1>: {toy.origin}</h1>
            <h1>: {toy.brand}</h1>
            <h1>: $ {toy.price.toString()}</h1>
          </div>
        </div>
        <div className=" w-[50%] px-20">
          <h1>Dimension :</h1>
          <div className="flex flex-row">
            <div className="pr-10">
              <h1>Width </h1>
              <h1>Height</h1>
              <h1>Diameter</h1>
            </div>
            <div>
              <h1> </h1>
              <h1>: {toy.width.toString()}</h1>
              <h1>: {toy.height.toString()}</h1>
              <h1>: {toy.diameter.toString()}</h1>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <p className="font-bold mb-2 text-xl"> Description :</p>
      <p>{toy.description}</p>
      <hr className="my-4" />
      <p className="font-bold mb-2 text-xl">Detail :</p>
      <p className="">{toy.detail}</p>
    </section>
  );
};

export default Detail;
