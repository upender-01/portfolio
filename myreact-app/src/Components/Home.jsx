 import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./Aboutme";
import Skills from "./Skills";
import { Projects } from "./Myprojects";
import { Connecting } from "./connect";
import { Footer } from "./Footer";

function Home() {
  return (
    <main className="bg-white font-sans text-gray-900">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Connecting />
      <Footer />
    </main>
  );
}

export default Home;