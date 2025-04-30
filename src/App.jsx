import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import Feature from "./sections/Feature";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSection />
      <Feature />
      <Experience />
      <TechStack />
    </>
  );
};

export default App;
