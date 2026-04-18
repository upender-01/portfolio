 import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">About Me</h2>
          <div className="w-20 h-1.5 bg-lime-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Main Introduction */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Aspiring Software Engineer & Problem Solver
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am <span className="font-bold text-black">Bhukya Upendar</span>, currently pursuing a B.Tech in 
              Electronics Engineering at <span className="font-bold text-black">IIT (BHU) Varanasi</span>. 
              With a strong foundation in <span className="text-lime-600 font-semibold">Object-Oriented Programming (OOP)</span> and 
              <span className="text-lime-600 font-semibold">Data Structures & Algorithms</span>, I am passionate about 
              building scalable web applications that solve real-world problems.
            </p>
            <p className="text-gray-600 italic border-l-4 border-lime-500 pl-4">
              "I enjoy the process of turning complex logic into responsive, user-friendly digital experiences."
            </p>
          </div>

          {/* Hobbies & Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Activities - Positions of Responsibility */}
            <div className="p-6 bg-gray-50 rounded-3xl hover:shadow-md transition-shadow border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">🏆</span> Leadership
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Marketing Executive, SPARDHA 2024 .</li>
                <li>• Co-Coordinator, EES Mashals .</li>
                <li>• Event Engagement & Strategy .</li>
              </ul>
            </div>

            {/* Hobbies */}
            <div className="p-6 bg-lime-50 rounded-3xl hover:shadow-md transition-shadow border border-lime-100">
              <h4 className="font-bold text-lime-900 mb-3 flex items-center">
                <span className="mr-2">🎨</span> Hobbies
              </h4>
              <ul className="text-sm text-lime-800 space-y-2 font-medium">
                <li>• Competitive Gaming</li>
                <li>• Reading Tech Blogs & Books</li>
                <li>• Listening to Music</li>
                <li>• Building Digital Side-Projects</li>
              </ul>
            </div>

            {/* Problem Solving Stat */}
            <div className="p-6 bg-gray-900 rounded-3xl sm:col-span-2 text-white flex justify-between items-center">
              <div>
                <h4 className="font-bold text-lg">500+ Problems</h4>
                <p className="text-xs text-gray-400">Solved on LeetCode & GFG </p>
              </div>
              <div className="text-3xl font-extrabold text-lime-400">DSA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;