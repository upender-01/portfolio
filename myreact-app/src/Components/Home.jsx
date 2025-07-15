import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Profile from "../assets/upender.png";
import Resume from "../assets/uppiresume.pdf";
import AboutMe from "./Aboutme";
import Skills from "./Skills";
import { Projects } from "./Myprojects";
import { Connecting } from "./connect";
import { Footer } from "./Footer";
function Home() {
  const [OpenMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!OpenMenu);
  };

  return (
    <main>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-8 py-4 border-b border-gray-500 shadow-lg bg-white">
        <h1 className="font-bold text-2xl">Upendar.Dev</h1>

        <GiHamburgerMenu
          onClick={toggleMenu}
          className="lg:hidden cursor-pointer text-3xl"
        />

        <div className="hidden lg:flex space-x-4 font-bold text-lg">
          <span className="hover:bg-gray-100 px-[1.5rem] py-[0.5rem] rounded-sm font-bold "><a href="/">Home</a></span>
          <span className="hover:bg-gray-100 px-[1.5rem] py-[0.5rem] rounded-sm font-bold   "><a href="#about">About</a></span>
          <span className="hover:bg-gray-100 px-[1.5rem] py-[0.5rem] rounded-sm font-bold    "><a href="#skills">Skills</a></span>
          <span className="hover:bg-gray-100 px-[1.5rem] py-[0.5rem] rounded-sm font-bold    "><a href="#projects">Projects</a></span>
          <span className="hover:bg-gray-100 px-[1.5rem] py-[0.5rem] rounded-sm font-bold    "><a href="#contact">Contact</a></span>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {OpenMenu && (
        <div className="flex flex-col space-y-2 font-bold text-lg text-center bg-white shadow-lg z-40 lg:hidden fixed top-[4.5rem] left-0 w-full px-4 py-2">
          <span className="hover:bg-gray-100 px-[1.5rem] py-[0.5rem] rounded-sm font-bold    "><a href="/">Home</a></span>
          <span className="hover:bg-gray-100 px-[1.5rem] py-[0.5rem] rounded-sm font-bold  "><a href="#about">About</a></span>
          <span className="hover:bg-gray-100  px-[1.5rem] py-[0.5rem] rounded-sm font-bold  "><a href="#skills">Skills</a></span>
          <span className="hover:bg-gray-100 px-[1.5rem] py-[0.5rem] rounded-sm font-bold "><a href="#projects">Projects</a></span>
          <span className="hover:bg-gray-100 px-[1.5rem] py-[0.5rem] rounded-sm font-bold "><a href="#contact">Contact</a></span>
        </div>
      )}

      {/* HERO SECTION */}
      <div className="pt-28 lg:h-screen flex flex-col md:flex-row justify-around items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-8 px-4">
        <div>
          <h1 className="text-3xl font-bold my-4">
            Hi, I'm <span className="text-red-500 hover:text-green-500">Bhukya Upendar</span> <br/>
            I'm a Fullstack Developer. <br />I can Build Responsive Webpages.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href={Resume}
              download
              className="px-6 py-3 bg-gray-100 hover:bg-gray-900 hover:text-white font-bold rounded-lg"
            >
              Download CV
            </a>
            <button
              onClick={() => alert("Thank you for your interest!")}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-900 hover:text-white font-bold rounded-lg"
            >
              Hire Me
            </button>
          </div>
        </div>
        <div>
          <img
            src={Profile}
            alt="Upendar profile"
            className="w-64 h-64 md:w-80 md:h-80 shadow-xl shadow-yellow-500/50 rounded-full object-cover"
          />
        </div>
      </div>
      {/* Aboutme */}
      <AboutMe/>
      {/* Skills  */}
      <Skills/>
      {/* My projects */}
      <Projects/>
      <Connecting/>
      <Footer/>
    </main>
  );
}

export default Home;
