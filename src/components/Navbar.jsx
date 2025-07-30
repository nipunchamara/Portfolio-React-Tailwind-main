import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full z-50 px-4 md:px-8 lg:px-16 fixed top-0">
      {/* Changed flex-col to flex for default, then md:flex-row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-3">
        {/* New wrapper div for Logo and Hamburger to control their alignment on small screens */}
        <div className="flex justify-between items-center w-full md:w-auto">
          {/* Logo */}
          <div className="text-2xl font-bold">Nipun</div>

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-6 text-sm md:text-base w-full md:w-auto mt-3 md:mt-0 transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <a
            href="#home"
            className="hover:text-gray-400 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-400 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </a>
          <a
            href="#service"
            className="hover:text-gray-400 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#project"
            className="hover:text-gray-400 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;