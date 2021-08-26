import React from "react";
import logo from "../../../public/images/logo_big.png";

export default function Header() {
  return (
    <header className={"flex justify-center sticky top-0"}>
      <nav className="container flex items-center mt-5 mb-5 justify-around">
        <div className="w-44 object-contain lg:pl-0 pl-8">
          <img src={logo} alt="Holmgrens bygg och service" />
        </div>
        <div className="">
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-white uppercase text-s font-bold drop-shadow-xl">
            <NavItem text="Hem" link="/" />
            <NavItem text="Våra projekt" />
            <NavItem text="Om oss" />
            <NavItem text="Kontakt" link="/kontakt" />
          </ul>
        </div>
        <div className="flex sm:hidden flex-1 justify-end mr-6">
          <i className="text-4xl fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );

  function NavItem(props) {
    return (
      <li className="cursor-pointer hover:text-gray-300 hover:underline">
        <a href={props.link}>{props.text}</a>
      </li>
    );
  }
}
