import "./App.css";
import travel_01 from "./assets/peliculas.png";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import Hero from "./components/landingPage/Hero";
import Navbar from "./components/landingPage/Navbar";
import Slider from "./components/landingPage/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Contact" },
    { url: "#", title: "About" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01} />
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
    </div>
  );
}

export default App;
