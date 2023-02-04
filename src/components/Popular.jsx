import React, { useEffect, useState } from "react";

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const api = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
    );
    const data = await api.json();
    console.log(data);
    setPopular(data.products);
  };
  return (
    <div>
      {popular.map((product) => {
        return <div key={product.id}>{product.brand}</div>;
      })}
    </div>
  );
}

export default Popular;
