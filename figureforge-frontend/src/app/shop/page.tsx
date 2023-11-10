import React from "react";
import Catalog from "../components/Catalog/Catalog";
import Banner from "../components/Banner/Banner";

const Shop = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between mx-auto w-full max-w-screen-xl py-20">
      <Banner name="OUR COLLECTIONS" />
      <h1 className="h-20"> </h1>
      <Catalog />
    </div>
  );
};

export default Shop;
