import React from "react";
import Hero from "../../components/landingPage/Hero";
import Navbar from "../../components/landingPage/Navbar";
import Slider from "../../components/landingPage/Slider";
import Footer from "../../components/Footer/footer"
import inicio from "../../assets/peliculas.png";
import travel_02 from "../../assets/travel-02.jpg";
import travel_03 from "../../assets/travel-03.jpg";
const navbarLinks = [
    { url: "/", title: "Home" },
    { url: "/home", title: "Contact" },
    { url: "#", title: "About" },
  ];

const landingPage = ({ imageSrc }) => {
  return (
    <div>
      <Navbar navbarLinks={navbarLinks} />    
      <Hero imageSrc={inicio} />
      <Slider
        imageSrc={travel_02}
        title={"Ser un videomaniaco."}
        subtitle={
          "Nuestra plataforma ofrece una amplia variedad de Peliculas!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
      <Footer/>
      
    </div>
  );
};

export default landingPage;