import React from "react";
import "./Hero.css";
import Button from "react-bootstrap/Button";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Travel" className="hero__image" />
      <h1 className="hero__title">Buscar peliculas Facilmente.<br/>
      <center>
      <Button variant="info">Ingresar</Button>
      </center>
      </h1>
      
    </div>
  );
};

export default Hero;
