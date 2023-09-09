import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/hero/Hero";
import "./Home.css";
import Songcontainer from "../components/songs/Songcontainer";
const Homepage = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Songcontainer />
    </div>
  );
};

export default Homepage;
