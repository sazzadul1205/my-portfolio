"use client";

import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      // Check which section is in view and update the active section
      const sections = ["hero", "about", "projects", "contact"];
      const offset = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (
          sectionElement &&
          offset >= sectionElement.offsetTop &&
          offset < sectionElement.offsetTop + sectionElement.clientHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed flex-col md:flex-row top-0 w-full transition-all duration-300 px-8 sm:px-16 lg:px-52 z-30 py-5 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex-1">
        <a className="font-semibold text-xl">Sazzadul Islam Molla</a>
      </div>
      <div className="flex-none mt-4 md:mt-0">
        <div className="relative flex gap-5">
          <a
            href="#hero"
            className={`hover:text-blue-200 font-semibold md:font-bold ${
              activeSection === "hero" ? "active-sparkle" : ""
            }`}
          >
            Hero
          </a>
          <a
            href="#about"
            className={`hover:text-blue-200 font-semibold md:font-bold ${
              activeSection === "about" ? "active-sparkle" : ""
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`hover:text-blue-200 font-semibold md:font-bold ${
              activeSection === "projects" ? "active-sparkle" : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`hover:text-blue-200 font-semibold md:font-bold ${
              activeSection === "contact" ? "active-sparkle" : ""
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
