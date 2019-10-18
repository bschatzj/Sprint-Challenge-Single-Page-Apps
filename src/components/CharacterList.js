import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'
import Search from './SearchForm'

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
        console.log(characters)
      })
      .catch(error => {
        console.log('error', error)
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log(characters)

  const handleChange = event => {
    setPeram(event.target.value.toLowerCase());
  };

  const submit = e => {
    e.preventDefault();
    setSearch(peram)
  };


  return (
    <div class='list'>

      <Search
        handleChange={handleChange}
        peram={peram}
        search={search}
        submit={submit}
      />
      }
      {/* <CharacterCard search={filteredCharacters} /> */}
    </div>
  );
}
