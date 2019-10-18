import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import Characters from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import Location from './components/LocationsList';



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={Characters} />
      <Route path="/locations" component={Location} />
    </main>
  );
}
