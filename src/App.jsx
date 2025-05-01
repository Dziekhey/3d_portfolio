import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import Feature from "./sections/Feature";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./sections/Footer";

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
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};

export default App;
