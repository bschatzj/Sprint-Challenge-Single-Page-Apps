import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
width: 160px;
background: blueviolet;
margin: 20px;
height: 80px;
font-size: 2rem;
color: white;
border: none;
`

const Input = styled.input`
width: 220px;
color: blueviolet;
height: 80px;
font-size: 2rem;
`


export default function SearchForm(props) {
 
  console.log(props.peram)
  return (
    <section>
      <form onSubmit={props.submit}>
        <Input
          name="search"
          type="search"
          placeholder='search here'
          value={props.peram}
          onChange={props.handleChange}
        />
        <Button type="submit">Search</Button>
      </form>
    </section>
  );
}