import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md text-gray-800 mb-5">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          ContractAI
        </a>

        {/* Navigation links (desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/new-contract" className="hover:text-gray-600">
            <div className="p-3 font-medium">Create new contract</div>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none inline-flex items-center justify-center p-2 text-gray-800 rounded-md hover:text-gray-600"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile menu (slide in) */}
        <div
          className={`${
            isOpen
              ? "block absolute z-10 top-0 left-0 w-full bg-white text-gray-800"
              : "hidden"
          } md:hidden`}
        >
          <div className="container mx-auto px-4 py-2">
            <a href="/" className="block py-2 hover:text-gray-600">
              Create new contract
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
