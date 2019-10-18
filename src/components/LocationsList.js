import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';
import LocationSearch from './locationsearch';
import styled from "styled-components";


const List = styled.section`
display:flex;
flex-direction: column;
align-items: center;
width:100%;
`





export default function LocationsList() {


    const [location, setLocation] = useState([])
    const [locSearch, setLocSearch] = useState("");
    const [locPeram, setLocPeram] = useState('');

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/location/')
            .then(response => {
                setLocation(response.data.results);
            })
            .catch(error => {
                console.log('error', error)
            });
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);
    
  const handleChange = event => {
    setLocPeram(event.target.value.toLowerCase());
  };

const submit = e => {
  e.preventDefault();
  setLocSearch(locPeram)
  setLocPeram("")
  console.log(locPeram)
};

    return (
        <List>

        <LocationSearch
          handleChange={handleChange}
          locPeram={locPeram}
          locSearch={locSearch}
          submit={submit}
        />
        {location.map(loc => { if(loc.name.toLowerCase().includes(locSearch)){
          return (
          <LocationCard
            name={loc.name}
            type={loc.type}
            dimension={loc.dimension}
        />
        )}})
        }
      </List>
    );
  }
