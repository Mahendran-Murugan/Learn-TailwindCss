import React from "react";
import logo from "../assets/logo.png";
import { ListElemetnt } from "./ListElemetnt";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="p-5 bg-white shadow-sm md:flex md:items-center md:justify-between">
      <div className="flex flex-row items-center gap-2 cursor-pointer hover:text-red-500">
        <img src={logo} className="inline h-10" />
        <span className="text-2xl font-pm font-thin">Inception</span>
      </div>
      <ul className="md:flex md:items-center md:gap-6">
        <ListElemetnt content="Home" />
        <ListElemetnt content="About" />
        <ListElemetnt content="Services" />
        <ListElemetnt content="Contact" />
        <Button content="Get Started" />
      </ul>
    </nav>
  );
};
