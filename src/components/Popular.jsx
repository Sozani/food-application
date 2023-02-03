import React from "react";

function Popular() {
  const getPopular = async () => {
    const api = await fetch('https://api.spoonacular.com/recipes/random?apiKey=${process.env.React-APP-API-KEY}')
  }
  return <div>Popular</div>;
}

export default Popular;
