 import React from "react";
import Profile from "../assets/upender.png";
import Resume from "../assets/uppiresume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:min-h-screen flex flex-col md:flex-row justify-around items-center px-8 bg-white overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-lime-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative z-10 max-w-2xl text-center md:text-left">
        <h2 className="text-lime-600 font-mono font-bold tracking-widest uppercase text-sm mb-4">
          IIT (BHU) Varanasi • Class of 2027
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-lime-600">
            Bhukya Upendar
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
          An <span className="font-bold text-black">Electronics Engineering</span> student and 
          <span className="font-bold text-black"> Fullstack Developer</span>.
          I specialize in building responsive, pixel-perfect web applications with the MERN stack.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
          <a 
            href={Resume} 
            download 
            className="px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-lime-500 transition-all shadow-xl shadow-gray-200 active:scale-95"
          >
            Download CV
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-gray-200 rounded-2xl font-bold hover:border-black hover:bg-gray-50 transition-all active:scale-95"
          >
            Let's Talk
          </a>
        </div>

        {/* Social Quick Links */}
        <div className="mt-10 flex justify-center md:justify-start space-x-6 text-gray-400">
          <a href="https://github.com/upender-01" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/upender-bhukya-2767472a8/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>

      {/* Profile Image with Modern Framing */}
      <div className="relative mt-16 md:mt-0 group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-lime-400 to-green-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative">
          <img 
            src={Profile} 
            alt="Bhukya Upendar" 
            className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-full object-cover border-[12px] border-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {/* Floating Badge */}
        
        </div>
      </div>
    </section>
  );
};

export default Hero;