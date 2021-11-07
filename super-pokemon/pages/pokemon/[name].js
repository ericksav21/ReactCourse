import React from "react";

export default function Pokemon({ pokemon }) {
  return (
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.query;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await data.json();

  return {
    props: {
        pokemon
    },
  };
}
