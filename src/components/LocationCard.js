import React from "react";
import styled from "styled-components";


const Card = styled.div`
background-color: green;
width: 40%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 1%;
color: maroon;
text-align: center;
`

export default function LocationCard(props) {
  return (
  <Card >
    <div>
      <h2>Name: {props.name}</h2>
      <p>Type: {props.type}</p>
      <p>Dimension: {props.dimension}</p>
  </div>
</Card>
  )
}
