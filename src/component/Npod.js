import React from "react";

const Npod = (props) => {
  return (
    <li className="Photo-of-day" key={props.id}>
      <h2>Title: {props}</h2>
      <p>{props}</p>
      <p>Data!: {props}</p>
      <p>Data2: {props}</p>
    </li>
  );
};
export default Npod;
