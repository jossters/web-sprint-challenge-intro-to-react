import React from "react";
import styled from "styled-components";
export default function Details(props) {
  const { character, close } = props;

  const DetailsStyle = styled.div`
    background-color: black;
    color: white;
  `;
  return (
    <DetailsStyle>
      {character && (
        <>
          <p>Name: {character.name}</p>
          <p>Gender: {character.gender}</p>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>BirthYear: {character.birth_year}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Skin Color: {character.skin_color}</p>
        </>
      )}
      <button onClick={close}>Close</button>
    </DetailsStyle>
  );
}
