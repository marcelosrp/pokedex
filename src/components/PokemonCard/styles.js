import styled from "styled-components";

export const Card = styled.div`
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  height: 260px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  width: 160px;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ThumbWrap = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  height: 120px;
  margin-bottom: 20px;
  text-align: center;
  width: 120px;
`;

export const Thumb = styled.img`
  margin-top: 20px;
  max-width: 90%;
`;

export const PokemonNumber = styled.span`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 0.8em;
  padding: 5px 10px;
`;

export const PokemonName = styled.h3`
  letter-spacing: 1px;
  margin: 15px 0 7px;
  text-transform: capitalize;
`;

export const PokemonType = styled.h3`
  font-size: 13px;
  font-weight: 400;
`;
