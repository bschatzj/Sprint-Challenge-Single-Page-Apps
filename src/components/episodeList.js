import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import EpisodeSearch from './EpisodeSearch';
import styled from "styled-components";


const List = styled.section`
display:flex;
flex-direction: column;
align-items: center;
width:100%;
`

export default function LocationsList() {


    const [episode, setEpisode] = useState([])
    const [epSearch, setEpSearch] = useState("");
    const [epPeram, setEpPeram] = useState('');

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then(response => {
                setEpisode(response.data.results);
                console.log(response)
            })
            .catch(error => {
                console.log('error', error)
            });
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);
    
  const handleChange = event => {
    setEpPeram(event.target.value.toLowerCase());
  };

const submit = e => {
  e.preventDefault();
  setEpSearch(epPeram)
  setEpPeram("")
  console.log(epPeram)
};

    return (
        <List>

        <EpisodeSearch
          handleChange={handleChange}
          epPeram={epPeram}
          epSearch={epSearch}
          submit={submit}
        />
        {episode.map(ep => { if(ep.name.toLowerCase().includes(epSearch)){
          return (
          <EpisodeCard
            name={ep.name}
            date={ep.air_date}
            episode={ep.episode}
        />
        )}})
        }
      </List>
    );
  }
