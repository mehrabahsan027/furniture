import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About US" },
];

function NavItems({ handleMenu }) {
  return (
    <ul className="flex flex-col  md:flex-row items-center text-lg md:space-x-8 gap-8 ">
      {navItems.map((items, index) => {
        return (
          <li
            onClick={handleMenu}
            className="hover:text-red-500 hover:underline underline-offset-8 duration-300 font-medium"
            key={index}
          >
            <NavLink
              to={items.path}
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : ""
              }
            >
              {items.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

function Navbar({ darkMode, onDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(window.scrollY);
  console.log(isScrolled);

  return (
    <header
      className={` ${
        isScrolled ? "bg-white shadow-md text-black" : "text-yellow-50"
      } fixed top-0 left-0 right-0 z-10  font-montserrat 
    transition-all duration-300 ease-in-out
    `}
    >
      <nav className="container mx-auto flex justify-between items-center py-6 px-4 ">
        {/* Logo */}
        <Link to="/" className=" text-2xl font-bold  ">
          FurniNest
        </Link>

        {/*Hamburger Mobile For Menu */}
        <div
          onClick={handleMenu}
          className="text-xl md:hidden hover:bg-slate-100 p-1 rounded-md cursor-pointer hover:text-stone-700"
        >
          {isMenuOpen ? null : <FaBars />}
        </div>

        {/*desktop menu items  */}
        <div className="hidden md:block ">
          <NavItems />
        </div>

        {/* Mobile Menu Items */}

        <div
          className={`md:hidden fixed top-0 left-0 bg-black bg-opacity-80 w-full h-screen text-white flex flex-col justify-center items-center space-y-8 duration-300
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
            
            
            `}
        >
          <div
            onClick={handleMenu}
            className="cursor-pointer absolute mx-auto top-10"
          >
            <IoClose className="w-10 h-10" />
          </div>
          <NavItems handleMenu={handleMenu} />
        </div>

        <div >
          <button
            className=" p-2 hover:bg-slate-50  text-lg bg-white border border-black text-black rounded-full"
            onClick={() => onDark(!darkMode)}
          >
            {darkMode ? <FiSun /> : <FaMoon />}
          </button>
        </div>

        {/* Cart Icon */}
       
      </nav>
    </header>
  );
}

export default Navbar;
