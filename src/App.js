import React from "react";
import "./App.css";
import Npod from "./component/NpodData"; //It has to be defined

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <Npod />
    </div>
  );
}

export default App;
