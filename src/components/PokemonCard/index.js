import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

function PokemonCard({ pokemonName, pokemonNumber, pokemonType }) {
  const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${pokemonNumber}.png`;
  return (
    <S.Card>
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
