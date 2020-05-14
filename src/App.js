import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Picture from "./components/picture";

function App() {
  return (
    <div className="App">
      <h1>NASA's Picture of the Day</h1>
      <p>
        Enjoy the picture{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <Picture />
    </div>
  );
}

export default App;
