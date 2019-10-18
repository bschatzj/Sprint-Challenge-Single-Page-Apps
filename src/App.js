import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import Characters from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import Location from './components/LocationsList';
import Episode from './components/episodeList'
import styled from "styled-components";

const Main = styled.main`
background: black;
`



export default function App() {
  return (
    <Main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={Characters} />
      <Route path="/locations" component={Location} />
      <Route path="/episodes" component={Episode} />
    </Main>
  );
}
