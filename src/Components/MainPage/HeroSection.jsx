"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const HeroSection = ({ hero, socialLinks }) => {
  return (
    <section className="bg-gradient-to-tr from-blue-500 to-purple-600 text-white">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center gap-5 pt-[150px] md:pt-[250px] md:py-[250px] justify-between">
        {/* Profile Image */}
        <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] overflow-hidden border-4 border-white mb-6 md:mb-0">
          <Image
            src={hero.profileImage}
            alt={hero.name}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-right">
          <p className="text-3xl md:text-4xl font-bold">Hello,</p>
          <p className="text-3xl md:text-3xl font-bold">My Name Is,</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-6">{hero.name}</h2>
          <h3 className="text-lg md:text-xl font-medium mt-2">
            <span>I am a </span>
            <span>
              <Typewriter
                words={hero.typewriterWords}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </h3>
          <p className="text-base md:text-lg mt-4 max-w-xl mx-auto md:max-w-2xl leading-relaxed">
            {hero.tagline}
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-end">
            {/* Resume Button */}
            <a
              href="/SazzadulIslamMollaResume.pdf"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition items-center gap-5 flex font-semibold mx-auto md:mx-0"
              download
            >
              <FaArrowLeft />
              <span>View My Resume</span>
            </a>
            {/* Social Links */}
            <nav className="flex gap-4 mt-4 sm:mt-0 justify-center">
              <Link
                href={socialLinks.google}
                className="text-xl hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Google"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcGoogle />
              </Link>
              <Link
                href={socialLinks.facebook}
                className="text-xl text-blue-600 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={socialLinks.twitter}
                className="text-xl text-blue-400 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/MyImage/twitter.png"}
                  alt={"Twitter Icon"}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
              <Link
                href={socialLinks.github}
                className="text-xl text-gray-800 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
              <Link
                href={socialLinks.linkedin}
                className="text-xl text-blue-700 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
