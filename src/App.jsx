import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Toolkit from "./components/Toolkit";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <div className="wrap" id="top">
        <Header />
        <main id="main">
          <Hero />
          <Toolkit />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
