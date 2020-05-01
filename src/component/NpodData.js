import React, { useState, useEffect } from "react";
import axios from "axios";

import Npod from "./Npod";

export default function NpodData() {
  const [text, setTest] = useState([]);

  const key = "Aeyyd7vDYTVuCTrsTzH6gjaHeijstPm4OU3ejcl0";

  // const [...data] = text;

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
      .then((response) => {
        console.log("the Response" + response.data);

        setTest(response.data);
      }) //close response
      .catch((err) => {
        console.log("couldn;t get the resuelt" + err);
      }); //close error
  }, []);

  return (
    <div className="photo">
      <ul>
        <Npod
          copyright={text.copyright}
          date={text.date}
          title={text.title}
          explanation={text.explanation}
          url={text.url}
          hdurl={text.hdurl}
          type={text.media_type}
        />
      </ul>
    </div>
  );
}
