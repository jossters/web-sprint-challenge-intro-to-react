// Write your Character component here
import React from "react";
import stlyed from "styled-components";
export default function Character({ character, action }) {
  const CharStyle = stlyed.div`
    font-size:2rem;
    color:white;
    button{
        padding: 0%;
        font-family: orbitron;
        background-color: black;
        color: white;
        margin:2%;
        font-size:1.2rem;
    }
    `;
  return (
    <CharStyle>
      {character.name}
      <button onClick={() => action(character)}>{character.birth_year}</button>
    </CharStyle>
  );
}
