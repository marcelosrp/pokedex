import React, { useState, useEffect, useCallback } from "react";

import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";
import Skeleton from "../../components/Skeleton";

const Home = () => {
  const [isLoading, setIsLoadig] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const getPokemonURL = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

  const generatePokemonPromises = useCallback(() => {
    return Array(150)
      .fill()
      .map((_, index) =>
        fetch(getPokemonURL(index + 1)).then((response) => response.json())
      );
  }, []);

  const fetchPokemon = useCallback(() => {
    const pokemonPromises = generatePokemonPromises();

    Promise.all(pokemonPromises).then((pokemons) => {
      setPokemons(pokemons);
      setIsLoadig(false);
    });
  }, [generatePokemonPromises]);

  useEffect(() => {
    setIsLoadig(true);
    fetchPokemon();
  }, [fetchPokemon]);

  return (
    <Layout>
      <section className="listPokemonsContainer">
        {isLoading ? (
          <Skeleton />
        ) : (
          pokemons &&
          pokemons.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                pokemonName={pokemon.name}
                pokemonNumber={pokemon.id}
                pokemonType={pokemon.types[0].type.name}
              />
            );
          })
        )}
      </section>
    </Layout>
  );
};

export default Home;
