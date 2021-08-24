import React from "react";
import logo from "../../../public/images/logo_small.png";

export default function Header() {
  return (
    <header className="flex justify-center">
      <nav className="container items-center mt-5">
        <div className="pb-1 lg:pl-0 pl-8">
          <img src={logo} alt="" />
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-white uppercase text-s font-bold drop-shadow-xl">
          <li className="cursor-pointer hover:text-gray-300">Hem</li>
          <li className="cursor-pointer hover:text-gray-300">Våra projekt</li>
          <li className="cursor-pointer hover:text-gray-300">Om oss</li>
          <li className="cursor-pointer hover:text-gray-300">Kontakt</li>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <i className="text-2xl fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
}
