import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import Details from "./components/Details";
export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setcharacters] = useState([]);
  const [currentName, setCurrentName] = useState("");

  const openDetails = (name) => {
    setCurrentName(name);
  };

  const closeDetails = () => {
    setCurrentName(null);
  };

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setcharacters(res.data);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((char) => {
        return (
          <Character key={char.name} character={char} action={openDetails} />
        );
      })}
      {currentName && <Details character={currentName} close={closeDetails} />}
    </div>
  );
}
