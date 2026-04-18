 import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Bhukya Upendar </h2>
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://github.com/upender-01" className="hover:text-lime-400 transition-colors"><FaGithub size={32}/></a>
          <a href="https://www.linkedin.com/in/upender-bhukya-2767472a8/" className="hover:text-lime-400 transition-colors"><FaLinkedin size={32}/></a>
        </div>
        <p className="text-gray-400">Email: bhukyaupender804@gmail.com [cite: 6]</p>
        <p className="text-gray-400 mt-2">Contact: +91-8074995761 [cite: 5]</p>
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500">
          © {new Date().getFullYear()} Upendar.Dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};