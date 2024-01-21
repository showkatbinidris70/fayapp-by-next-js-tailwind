"use client";
import React, { useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="text-white py-2 rounded focus:outline-none flex items-center justify-end"
        >
          English <AiFillCaretUp className="ms-1" />
        </button>

        <div
          className={`absolute ${
            isOpen ? "block" : "hidden"
          } mt-2 bg-white border rounded right-0 bottom-10 z-20 w-56 shadow`}
        >
          <a
            href="#"
            className="block px-4 py-3 border-b-2 text-gray-800 hover:bg-gray-200 hover:text-emerald-500"
          >
            Nederlands
          </a>
          <a
            href="#"
            className="block px-4 py-3 border-b-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-500 "
          >
            Español
          </a>
          <a
            href="#"
            className="block px-4 py-3 border-b-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-500 "
          >
            हिंदी
          </a>
          <a
            href="#"
            className="block px-4 py-3 border-b-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-500 "
          >
            Deutsch
          </a>
          <a
            href="#"
            className="block px-4 py-3 border-b-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-500 "
          >
            Français
          </a>
          <a
            href="#"
            className="block px-4 py-3 border-b-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-500 "
          >
            中文
          </a>
        </div>
      </div>
    </div>
  );
}
