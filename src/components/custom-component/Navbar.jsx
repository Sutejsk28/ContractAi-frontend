import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [isLoggedIn, setIsLoggedIn] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md text-gray-800 mb-5 min-h-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/home"
          className="text-2xl font-bold text-gray-800 min-h-12 align-middle"
        >
          ContractAI
        </a>

        {isLoggedIn && (
          <div className="flex">
            <div className="container mx-3 px-4 py-2">
              <a
                href="/new-contract"
                className="block py-2 hover:text-gray-600 border-2 rounded-sm"
              >
                Create new contract
              </a>
            </div>
            <div className="container mx-3 px-4 py-2">
              <button
                onClick={logout}
                className="block py-2 hover:text-gray-600 border-2 rounded-sm"
              >
                Logout
              </button>
            </div>
          </div>
        )}

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
          {isLoggedIn && (
            <>
              <div className="container mx-auto px-4 py-2">
                <a href="/" className="block py-2 hover:text-gray-600">
                  Create new contract
                </a>
              </div>
              <div className="container mx-auto px-4 py-2">
                <a href="/logout" className="block py-2 hover:text-gray-600">
                  Logout
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
