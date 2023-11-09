import React from "react";
import { Toy } from "../Catalog/Catalog";

type Props = {
  toy: Toy;
};

const Detail = ({ toy }: Props) => {
  return (
    <section>
      <h1>Name : {toy.name}</h1>
      <h1>Origin: {toy.origin}</h1>
      <h1>Brand: {toy.brand}</h1>
      <h1>W : {toy.width.toString()}</h1>
      <h1>D: {toy.diameter.toString()}</h1>
      <h1>H : {toy.height.toString()}</h1>
      <hr />
      <p>Description :</p>
      <p>{toy.description}</p>
      <hr />
      <p>Detail :</p>
      <p>{toy.detail}</p>
    </section>
  );
};

export default Detail;
