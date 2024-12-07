"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Form from "../Form";

const ContactSection = ({ contact, socialLinks }) => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-slate-200 py-20 sm:py-32">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
          Contacts
        </h2>
        <div className="h-1 bg-white w-24 mx-auto mb-8"></div>

        <p className="text-center text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          {contact?.intro}
        </p>

        {/* Form and Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <Form />

          {/* Social Media & Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Connect Me
            </h3>
            {/* Social Links Section */}
            <nav className="flex justify-center md:justify-start gap-4 mb-6">
              <Link
                href={socialLinks?.google}
                className="text-xl hover:scale-110 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Google"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcGoogle />
              </Link>
              <Link
                href={socialLinks?.facebook}
                className="text-xl text-blue-600 hover:scale-110 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={socialLinks?.twitter}
                className="text-xl text-blue-400 hover:scale-110 transition-transform transform bg-white p-3 rounded-full"
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
                href={socialLinks?.github}
                className="text-xl text-gray-800 hover:scale-110 transition-transform transform bg-white p-3 rounded-full"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
              <Link
                href={socialLinks?.linkedin}
                className="text-xl text-blue-700 hover:scale-110 transition-transform transform bg-white p-3 rounded-full"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link>
            </nav>

            <div className="space-y-2">
              <p className="text-lg">
                <strong>Phone:</strong> {contact?.phone}
              </p>
              <p className="text-lg">
                <strong>Address:</strong> {contact?.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
