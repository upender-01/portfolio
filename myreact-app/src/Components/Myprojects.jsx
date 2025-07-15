import React from 'react';
import Netfliximage from "../assets/netflix.png";
import Hospital from "../assets/hospital.png";
import Todo from "../assets/todo.png";

export const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center px-4 py-8 w-full">
      <h1 className="text-3xl font-extrabold mb-6 text-center">Projects</h1>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {/* Project Card */}
        <div className="transform transition-all duration-300 ease-in-out hover:-translate-y-2 shadow-lg w-[18rem] p-4 bg-white rounded-lg">
          <img src={Netfliximage} alt="Netflix Clone" className="object-contain w-full h-40 mb-3 rounded" />
          <h2 className="font-bold text-lg mb-1">Netflix Clone</h2>
          <a href="https://github.com/upender-01/Netflixclone-02" className="text-blue-600 hover:text-red-700 font-semibold">
            GitHub Link
          </a>
          <p className="text-sm font-serif font-semibold mt-1">Tech Stack: HTML, Tailwind CSS, JS, ReactJS</p>
          <p className="text-sm font-medium">A user-friendly Netflix clone with clean and efficient code.</p>
        </div>

        {/* Project Card */}
        <div className="transform transition-all duration-300 ease-in-out hover:-translate-y-2 shadow-lg w-[18rem] p-4 bg-white rounded-lg">
          <img src={Hospital} alt="Hospital Management" className="object-contain w-full h-40 mb-3 rounded" />
          <h2 className="font-bold text-lg mb-1">Hospital Management</h2>
          <a href="https://github.com/upender-01/Hospital-management" className="text-blue-600 hover:text-red-700 font-semibold">
            GitHub Link
          </a>
          <a href="https://bherasociety.vercel.app/" className="text-blue-600 hover:text-red-700 font-semibold block">
            Live Demo Link
          </a>
          <p className="text-sm font-serif font-semibold mt-1">Tech Stack: ReactJS, NodeJS, MongoDB, ExpressJS, Tailwind CSS</p>
          <p className="text-sm font-medium">Fully responsive hospital management site with user-friendly UI.</p>
        </div>

        {/* Project Card */}
        <div className="transform transition-all duration-300 ease-in-out hover:-translate-y-2 shadow-lg w-[18rem] p-4 bg-white rounded-lg">
          <img src={Todo} alt="Todo List" className="object-contain w-full h-40 mb-3 rounded" />
          <h2 className="font-bold text-lg mb-1">Todo List</h2>
          <a href="https://github.com/upender-01/Todo-List" className="text-blue-600 hover:text-red-700 font-semibold">
            GitHub Link
          </a>
          <p className="text-sm font-serif font-semibold mt-1">Tech Stack: HTML, Tailwind CSS, JS</p>
          <p className="text-sm font-medium">A simple, responsive, and user-friendly Todo List app.</p>
        </div>
      </div>
    </div>
  );
};
