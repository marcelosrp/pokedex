import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

function PokemonCard({ pokemonName, pokemonNumber, pokemonType }) {
  const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${pokemonNumber}.png`;
  return (
    <S.Card style={{ backgroundColor: colors[pokemonType] }}>
      <S.ThumbWrap>
        <S.Thumb src={imgURL} alt={pokemonName} />
      </S.ThumbWrap>
      <S.PokemonNumber>
        #{pokemonNumber.toString().padStart(3, "0")}
      </S.PokemonNumber>
      <S.PokemonName>{pokemonName}</S.PokemonName>
      <S.PokemonType>Type: {pokemonType}</S.PokemonType>
    </S.Card>
  );
}

PokemonCard.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  pokemonNumber: PropTypes.number.isRequired,
  pokemonType: PropTypes.string.isRequired,
};

export default PokemonCard;
