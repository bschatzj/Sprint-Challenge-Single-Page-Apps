import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'
import Search from './SearchForm'
import styled from "styled-components";


const List = styled.section`
display:flex;
flex-direction: column;
align-items: center;
width:100%;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [peram, setPeram] = useState('');


  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('error', error)
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  const handleChange = event => {
    setPeram(event.target.value.toLowerCase());
  };

  const submit = e => {
    e.preventDefault();
    setSearch(peram)
  };


  return (
    <List>

      <Search
        handleChange={handleChange}
        peram={peram}
        search={search}
        submit={submit}
      />
      {characters.map(char => {
        if (char.name.toLowerCase().includes(search)) {
          return (
            <CharacterCard
              name={char.name}
              species={char.species}
              image={char.image}
              gender={char.gender}
              status={char.status}
              location={char.location}
            />
          )
        }
      })
      }
      {/* <CharacterCard search={filteredCharacters} /> */}
    </List>
  );
}
