import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Head = styled.header`
display:flex;
justify-content: space-evenly;
`
const Nav = styled.h3`
font-size: 1.8rem;
text-decoration: none;
color: blue;
`
const Title = styled.div`
color: red;
text-align: center;
font-size: 3rem;
`

export default function Header() {
  return (
    <>
    <Title>
    <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </Title>
    <Head>
      <NavLink to={'/'}><Nav>Home</Nav></NavLink>
      <NavLink to={'/characters/'}><Nav>Characters</Nav></NavLink>
      <NavLink to={'/locations/'}><Nav>Locations</Nav></NavLink>
    </Head>
    </>
  );
}
