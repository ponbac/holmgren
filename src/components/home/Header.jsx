import React from "react";
import logo from "../../../public/images/logo_big.png";
import fb from "../../../public/images/facebook.png";
import insta from "../../../public/images/instagram.png";

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
            <NavItem text="Våra projekt" link="#galleri" />
            <NavItem text="Om oss" link="#omoss"/>
            <NavItem text="Kontakt" link="/kontakt" />
            <NavIcon image={fb} alt="Facebook" link="https://www.facebook.com/Holmgrens-Bygg-Service-101504525041548"></NavIcon>
            <NavIcon image={insta} alt="Instagram" link="https://www.instagram.com/holmgrensbyggservice/"></NavIcon>
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

  function NavIcon(props) {
    return (
      <li className="cursor-pointer h-8 w-8 hover:animate-bounce -mr-10">
        <a href={props.link} target="_blank"><img src={props.image} alt={props.alt} /></a>
      </li>
    );
  }
}
