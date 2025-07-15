import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col  items-center justify-center py-10 px-4 bg-gray-50">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4 ">About Me</h1>
        <p className="text-lg leading-relaxed mb-2">
          My name is <span className="font-bold"> Bhukya Upendar</span>. I am currently pursuing a <span className="font-bold">Bachelor of Technology</span> in <span className="font-bold">Electronics and Communication Engineering</span> at <span className="font-bold">IIT BHU Varanasi</span>.
        </p>
        <p className="text-lg leading-relaxed mb-2">
          I am passionate about <span className="font-bold">web development</span> and enjoy working on projects that involve creating responsive and user-friendly websites.
        </p>
        <p className="text-lg leading-relaxed mb-2">
          Some of my hobbies include <span className="font-semibold">playing games</span>, <span className="font-bold">reading books</span>, and <span className="font-bold">listening to music</span>.
        </p>
        <p className="text-lg leading-relaxed">
          I am always eager to learn new technologies and improve my skills in frontend and backend development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
