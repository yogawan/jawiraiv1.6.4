import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Navbar = ({ href = "/", label = "Default" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const ChatHistory = [
    { label: "Yogawan Aditya Pratama", path: "https://github.com/yogawan", icon: "" },
    { label: "Miko Dian Rachmadany", path: "https://github.com/mikodian", icon: "" },
    { label: "Loo Tze Lui", path: "https://github.com/lootzelui", icon: "" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black/5 backdrop-blur border-b border-white/10 z-50">
      
      <div className="w-full px-4 py-4 flex items-center justify-between">
        <div className="flex justify-between items-center">
          <button
            className="relative w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-white rounded transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white rounded transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* <Link href={href} legacyBehavior>
          <Icon className="text-white" icon={label} width="32" height="32" />
        </Link> */}
        <div>
          <p className="p-3 border border-white/15 text-white text-xs rounded-full">ꦗꦮꦶꦫꦆꦌ (JawirAIv1.6.4)</p>
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 bottom-0 h-screen w-screen pb-60 pt-10 pl-10 bg-black dark:bg-black flex flex-col items-start justify-start z-50 transform overflow-auto ${
          isMenuOpen
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 -translate-x-full scale-95"
        } transition-all duration-500 ease-in-out`}
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
        <button
          className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <div className="relative w-6 h-5">
            <span className="absolute top-0 left-0 block w-6 h-0.5 bg-white rounded transform rotate-45"></span>
            <span className="absolute top-0 left-0 block w-6 h-0.5 bg-white rounded transform -rotate-45"></span>
          </div>
        </button>

        <ul className="space-y-[-12px] text-start">
          <p className="text-3xl text-white m-3">Contributor</p>
          {ChatHistory.map((item, index) => (
            <li
              key={index}
              className="flex justify-start items-start text-white dark:text-white transition duration-500"
            >
              {/* Perbaikan di sini */}
              <Link href={item.path} legacyBehavior>
                <a
                  className="font-inter m-3 text-xl font-thin transition-transform transform hover:scale-110"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;