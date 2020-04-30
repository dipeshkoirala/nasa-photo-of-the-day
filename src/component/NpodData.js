import React, { useState, useEffect } from "react";
import axios from "axios";

import Npod from "./Npod";

export default function testList() {
  const [text, setTest] = useState();
  
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-20`)
      .then((response) => {
        console.log(response.data);
        setTest(response);
      })
      .catch((err) => {
        console.log("couldn;t get the resuelt" + err);
      });
  };

  return (
    <div className="photo">
      <Npod item1={text} />
      <ul></ul>
    </div>
  );
}
