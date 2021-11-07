import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomeCSS from "../styles/Home.module.css";

export default function Home({ arrayPokemon }) {
  return (
    <>
      <ul className={HomeCSS.columns}>
        {arrayPokemon.map((pokemon, idx) => {
          return (
            <li key={pokemon.id}>
              <Link
                href={{
                  pathname: "/pokemon/[name]",
                  query: {
                    name: pokemon.name,
                  },
                }}
              >
                <a>
                  <div
                    className={`${HomeCSS.card} ${pokemon.types[0].type.name}`}
                  >
                    <div className={HomeCSS.typeName}>
                      <h3>{pokemon.name}</h3>
                      <div className={HomeCSS.types}>
                        {pokemon.types.map((pokeType, idx) => {
                          return (
                            <p key={idx} className={HomeCSS.type}>
                              {pokeType.type.name}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    <img 
                      src={pokemon.image}
                      alt="Pokemon sprite"
                      className={HomeCSS.image}
                      height="100"
                      width="100" />
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const fetchPokemonData = (number) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((response) => response.json())
      .then((data) => data);
  };

  let arrayPokemon = [];
  for (let idx = 1; idx <= 20; ++idx) {
    let pokeData = await fetchPokemonData(idx);
    arrayPokemon.push({
      id: pokeData.id,
      name: pokeData.name,
      image: pokeData.sprites.other.dream_world.front_default,
      types: pokeData.types,
    });
  }

  return {
    props: {
      arrayPokemon,
    },
  };
}
