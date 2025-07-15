import React from "react";
import Js from "../assets/js.png";
import Nodejs1 from "../assets/nodejs.png";
import Html from "../assets/html-5.png";
import Expressjs from "../assets/expresslogo.png";
import Mongodb from "../assets/mongodblogo.png";
import Pandas from "../assets/pandaslogo.svg";
import Numpy from "../assets/numpylogo.svg";
import Matplotlib from "../assets/matplotlib.svg";
import Cplus from "../assets/c++ logo.svg";
import Reactjs from "../assets/library.png";
import Css from "../assets/css-3.png";
import Tailwindcss from "../assets/Tailwindcsslogo.png";

const Skills = () => {
  const skills = [
    { src: Html, label: "90%" },
    { src: Css, label: "90%" },
    { src: Js, label: "90%" },
    { src: Reactjs, label: "90%" },
    { src: Tailwindcss, label: "90%" },
    { src: Nodejs1, label: "90%" },
    { src: Expressjs, label: "90%" },
    { src: Mongodb, label: "90%" },
    { src: Cplus, label: "90%" },
    { src: Numpy, label: "90%" },
    { src: Pandas, label: "90%" },
    { src: Matplotlib, label: "90%" },
  ];

  return (
    <section id="skills" className="py-8 px-4">
      <h1 className="text-center font-bold text-2xl mb-6">Skills</h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="h-24 w-24 md:h-28 md:w-28 border-2 outline-none rounded-xl shadow-xl shadow-gray-500/50 flex flex-col justify-center items-center p-2 transition duration-300 transform hover:-translate-y-2 hover:border-sky-500"
          >
            <img src={skill.src} alt="image not found!!!" className="w-12 h-12 object-contain" />
            <h1>{skill.label}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
