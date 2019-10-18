import React from "react";
import styled from "styled-components";

const Header = styled.h1`
color: orange;
font-size: 3.5rem;
`
const Welcome = styled.header`
display:flex;
justify-content:center;
flex-direction: column;
align-items: center;
`
const Pic = styled.img`
width: 60%;
height: auto;
`


export default function WelcomePage() {
  return (
    <Welcome>
        <Header>Welcome to the ultimate fan site!</Header>
        <Pic
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
    </Welcome>
  );
}
