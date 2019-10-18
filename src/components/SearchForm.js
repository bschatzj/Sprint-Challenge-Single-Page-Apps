import React, { useState } from "react";

export default function SearchForm(props) {
 
  console.log(props.peram)
  return (
    <section>
      <form onSubmit={props.submit}>
        <input
          name="search"
          type="search"
          placeholder='search here'
          value={props.peram}
          onChange={props.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}