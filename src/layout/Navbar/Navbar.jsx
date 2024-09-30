import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/header_logo.png";

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className="bg-white bg-opacity-80 text-blue-900 shadow-md backdrop-filter backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="logo da página" className="h-12 w-auto" />
        </Link>

        <button
          className="lg:hidden block text-blue-900 focus:outline-none"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>

        <nav className={`w-full lg:w-auto ${isNavOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
          <ul className="lg:flex lg:space-x-4">
            <li className="mb-2 lg:mb-0">
              <Link to="/" className="block py-2 px-4 text-blue-900 hover:bg-blue-100 rounded transition duration-300">Início</Link>
            </li>
            <li className="mb-2 lg:mb-0">
              <Link to="/about" className="block py-2 px-4 text-blue-900 hover:bg-blue-100 rounded transition duration-300">Quem Sou</Link>
            </li>
            <li className="mb-2 lg:mb-0">
              <Link to="/contact" className="block py-2 px-4 text-blue-900 hover:bg-blue-100 rounded transition duration-300">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}