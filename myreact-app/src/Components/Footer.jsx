import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Resume from '../assets/uppiresume.pdf';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-12 border-t border-gray-300">
      <div className="w-11/12 max-w-4xl mx-auto text-center flex flex-col items-center space-y-4">
        <h1 className="text-xl font-bold text-gray-800">Bhukya Upendar</h1>

        {/* Contact Info */}
        <div className="space-y-1 text-gray-700 text-sm">
          <p><strong>Email:</strong> <a href="mailto:bhukyaupender31@gmail.com" className="text-blue-600 hover:underline">bhukyaupender31@gmail.com</a></p>
          <p><strong>Contact:</strong> <a href="tel:+919000000000" className="hover:underline">+91 90000 00000</a></p>
        </div>

        {/* Buttons and Links */}
        <div className="flex gap-6 items-center justify-center mt-4">
          <a
            href={Resume}
            download
            className="px-5 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-lime-500 transition duration-300"
          >
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/upender-bhukya-2767472a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://github.com/upender-01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <FaGithub size={28} />
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} Bhukya Upendar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
