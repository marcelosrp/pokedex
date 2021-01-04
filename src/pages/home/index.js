import React, { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoadig] = useState(false);
  const [hasError, setHasError] = useState("");

  useEffect(() => {
    async function getPokemons() {
      try {
        setIsLoadig(true);

        const url = `https://pokeapi.co/api/v2/pokedex/2`;
        const response = await fetch(url);

        if (!response.ok)
          throw new Error("Um erro foi encontrado, tente novamente");

        if (response.status === 200) {
          const data = await response.json();
          setPokemons(data.pokemon_entries);
          setIsLoadig(false);
        } else {
          throw new Error("Um erro foi encontrado, tente novamente");
        }
      } catch (error) {
        setHasError(error);
      }
    }

    getPokemons();
  }, []);

  return (
    <Layout>
      {isLoading && <h1>Carregando...</h1>}
      {hasError && <h1>{hasError}</h1>}
      <section className="listPokemonsContainer">
        {pokemons.map((pokemon) => {
          const {
            entry_number,
            pokemon_species: { name },
          } = pokemon;

          return (
            <PokemonCard
              key={entry_number}
              pokemonName={name}
              pokemonNumber={entry_number}
            />
          );
        })}
      </section>
    </Layout>
  );
};

export default Home;
