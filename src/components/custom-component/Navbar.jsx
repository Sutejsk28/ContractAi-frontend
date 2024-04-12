import { useEffect, useState } from "react";
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
    <nav className="bg-white shadow-lg py-4 text-gray-800">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/home"
          className="text-3xl font-bold text-dark-600"
        >
          ContractIQ
        </a>

        {isLoggedIn && (
          <div className="hidden md:flex space-x-4">
            <a
              href="/new-contract"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Create new contract
            </a>
            <button
              onClick={logout}
              className="px-4 py-2 border border-red-500 text-black rounded-md transition duration-300"
            >
              Logout
            </button>
          </div>
        )}

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none p-2 rounded-md text-gray-800 hover:text-gray-600"
        >
          <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
