 import React from "react";
import Js from "../assets/js.png";
import Nodejs from "../assets/nodejs.png";
import Expressjs from "../assets/expresslogo.png";
import Mongodb from "../assets/mongodblogo.png";
import Cplus from "../assets/c++ logo.svg";
import Reactjs from "../assets/library.png";
import Tailwindcss from "../assets/Tailwindcsslogo.png";
import SQL from "../assets/sql.jpg";

const Skills = () => {
  const skills = [
    { name: "C++ / DSA", level: "90%", img: Cplus, desc: "500+ Problems Solved ." },
    { name: "React.js", level: "90%", img: Reactjs, desc: "Frontend Development ." },
    { name: "Node.js", level: "85%", img: Nodejs, desc: "Server-side Runtime ." },
    { name: "Express.js", level: "85%", img: Expressjs, desc: "REST APIs ." },
    { name: "MongoDB", level: "80%", img: Mongodb, desc: "NoSQL Database ." },
    { name: "SQL", level: "80%", img: SQL, desc: "Relational Databases ." },
    { name: "JavaScript", level: "90%", img: Js, desc: "Core Logic ." },
    { name: "Tailwind CSS", level: "95%", img: Tailwindcss, desc: "Modern Styling ." },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16">Technical Arsenal</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-lime-400 group">
              <img src={skill.img} className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform" alt={skill.name} />
              <h3 className="font-bold text-lg">{skill.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;