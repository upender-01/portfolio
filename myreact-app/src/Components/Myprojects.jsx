 import React from 'react';

export const Projects = () => {
  const projectList = [
    {
      title: "Hospital Management",
      tech: "React, Node, Express, MongoDB ",
      desc: "Full-stack system featuring appointment booking and doctor profile management.",
      github: "https://github.com/upender-01/Hospital-management",
      live: "https://bherasociety.vercel.app/"
    },
    {
      title: "Expense Tracker",
      tech: "React.js, Node.js, Express, MongoDB ",
      desc: "Personal finance management app with secure cloud storage via MongoDB Atlas.",
      github: "https://github.com/upender-01/Expense-Tracker"
    },
    {
      title: "Task Manager",
      tech: "React, Node.js, Express ",
      desc: "Full-stack application implementing RESTful APIs for CRUD operations.",
      github: "https://github.com/upender-01/Todo-List",
      live: "https://task-manager-lkml.vercel.app/"
    },
    {
      title: "Netflix Clone",
      tech: "React, Vite, Tailwind CSS ",
      desc: "A responsive frontend clone focused on pixel-perfect UI and dynamic content.",
      github: "https://github.com/upender-01/Netflixclone-02"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lime-600 font-mono text-sm mb-4">{project.tech}</p>
              <p className="text-gray-600 mb-8">{project.desc}</p>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-black">GitHub</a>
                {project.live && (
                  <a href={project.live} target="_blank" className="px-5 py-2 border border-black rounded-lg hover:bg-gray-100">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};