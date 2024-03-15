import React, { useEffect, useState } from "react";
import { useLoaderData, useMatches } from "react-router-dom";
import Banner from "./components/Banner";
import Products from "./components/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
    console.log("DATA", data)
  }, [data]);
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
