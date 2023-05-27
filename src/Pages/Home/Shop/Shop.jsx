import React from "react";
import ShopCard from "./ShopCard";

const Shop = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      <ShopCard />
    </div>
  );
};

export default Shop;
