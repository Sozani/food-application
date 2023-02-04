import React, { useEffect,useState } from "react";

function Popular() {
  useEffect(() => {
    getPopular()
  },[])
  const getPopular = async () => {
    const api = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
    const data = await api.json()
    console.log(data)
  }
  return <div>Popular</div>;
}

export default Popular;
