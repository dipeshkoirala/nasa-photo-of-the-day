import React from "react";
import styled from "styled-components";

import NpodData from "./NpodData";
const h3 = ({ className, children }) => (
  <div className={"dipesh"}>{children}</div>
);

const StyledH3 = styled.h3`
  background: dodgerblue;
  border: 2px solid green;
  font-weight: bold;
  font-size: 50px;
  color: red;
  border-radius: 10px;
`;

const Para = styled.p`
  background-color: green
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 15px;
  text-align:justify
 
`;

const H1 = styled.span`
  font-size: 20px;
  color: red;
  margin: 10px;
`;
const H11 = styled.span`
  font-size: 30px;
  color: white;
  background: black;
`;

const Image = styled.img`
  width: 98%;
`;
const Npod = (props) => {
  return (
    <li className="Photo-of-day" key={props.date}>
      <StyledH3>Copyright: {props.copyright}</StyledH3>
      <h1>
        <H1>Title:</H1>
        <H11> {props.title}</H11>
      </h1>
      <p>Date: {props.date}</p>
      <Para>Description:{props.explanation}</Para>

      <img src={props.url} alt={props.alt} />
    </li>
  );
};
export default Npod;

//

// "date": "2020-04-28",
//   "explanation": "Do other stars have planetary systems like our own? Yes -- one such system is Kepler-90. Cataloged by the  Kepler satellite that operated from Earth orbit between 2009 and 2018,  eight planets were discovered, giving Kepler-90 the same number of known planets as our Solar System. Similarities between Kepler-90 and our system include a G-type star comparable to our Sun, rocky planets comparable to our Earth, and large planets comparable in size to Jupiter and Saturn. Differences include that all of the known Kepler-90 planets orbit relatively close in -- closer than Earth's orbit around the Sun -- making them possibly too hot to harbor life. However, observations over longer time periods may discover cooler planets farther out. Kepler-90 lies about 2,500 light years away, and at magnitude 14 is visible with a medium-sized telescope toward the constellation of the Dragon (Draco).  The exoplanet-finding mission TESS was launched in 2018, while missions with exoplanet finding capability planned for launch in the next decade include NASA's JWST and WFIRST.   Experts Debate: How will humanity first discover extraterrestrial life?",
//   "hdurl": "https://apod.nasa.gov/apod/image/2004/Kepler90Illustration_Kepler_1820.jpg",
//   "media_type": "image",
//   "service_version": "v1",
//   "title": "The Kepler-90 Planetary System",
//   "url": "https://apod.nasa.gov/apod/image/

//
