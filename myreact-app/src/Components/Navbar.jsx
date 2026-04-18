import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a glass-morphism effect when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 px-6 py-4 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Name  */}
        <h1 className="font-extrabold text-2xl tracking-tighter text-gray-900">
          Upendar<span className="text-lime-500">.Dev</span>
        </h1>

        {/* Desktop Navigation Links [cite: 15] */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-sm font-bold text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2 bg-black text-white text-sm font-bold rounded-full hover:bg-lime-500 transition-colors shadow-lg shadow-lime-500/20"
          >
            Connect Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-3xl text-gray-900 focus:outline-none"
          >
            {openMenu ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {openMenu && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpenMenu(false)}
                className="text-lg font-bold text-gray-800 hover:text-lime-600 border-b border-gray-50 pb-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;