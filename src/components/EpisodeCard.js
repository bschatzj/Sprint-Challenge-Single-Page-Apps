import React from "react";
import styled from "styled-components";


const Card = styled.div`
background-color: darkmagenta;
width: 50%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 1%;
color: dodgerblue;
text-align: center;
`

export default function EpisodeCard(props) {
  return (
  <Card >
    <div>
      <h2>Name: {props.name}</h2>
      <p>Date: {props.date}</p>
      <p>Episode: {props.episode}</p>
  </div>
</Card>
  )
}
