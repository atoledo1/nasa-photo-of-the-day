import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Picture() {
  const [pictureData, setpictureData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=h21NGDWMvCsrP2bUcHoI6PEjHKa9mV1Wu7IdxCvd"
      )
      .then((response) => {
        const nasaData = response.data;
        console.log(nasaData);
        setpictureData(nasaData);
        console.log(pictureData);
        console.log(response.data.url);
        const body = document.querySelector("body");
        const h2 = document.createElement("h3");
        const img = document.createElement("img");

        body.appendChild(img);
        body.appendChild(h2);
        h2.text = nasaData.title;
        console.log(nasaData.title);
        img.src = nasaData.url;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3></h3>
      <img></img>
    </div>
  );
}
