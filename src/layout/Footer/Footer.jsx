import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 font-sans text-sm">
      <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-around">
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
          <h4 className="text-white-500 text-lg mb-3">NGS Consultoria e Gestão</h4>
          <p className="mb-1">Assessoria e consultoria em planejamento estratégico.</p>
          <p>Gestão administrativa de empresas públicas e privadas.</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
          <h4 className="text-white-500 text-lg mb-3">Navegue pelo site:</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="text-blue-200 hover:text-white hover:underline transition duration-300">
                Página principal
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-200 hover:text-white hover:underline transition duration-300">
                Mais informações
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-200 hover:text-white hover:underline transition duration-300">
                Entrar em contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-6 mt-6 border-t border-blue-800 text-xs text-blue-200">
        © 2024 Copyright: Lucas González-Sember
      </div>
    </footer>
  );
}
