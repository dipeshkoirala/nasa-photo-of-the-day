import React, { useState, useEffect } from "react";
import axios from "axios";

import Npod from "./Npod";

export default function MovList() {
  const [mov, setMov] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-04-28"
      )
      .then((response) => {
        console.log(response);
        setMov(response.data);
      })
      .catch((err) => {
        console.log("couldn;t get the resuelt" + err);
      });
  }, []);

  // call an web API, and get a list of movies
  // https://ghibliapi.herokuapp.com/films
  return (
    <div className="photo">
      <ul>
        {/* {mov.map((mo) => {
          return (
            <Npod
            // id={mo.id}
            // val={mo.title}
            // description={mo.description}
            // director={mo.director}
            // release_date={mo.release_date}
            />
          ); */}
        })}
      </ul>
    </div>
  );
  // render the movies to the screen using the MovieCard component for each movie.
}
