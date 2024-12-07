"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "../MainPage/HeroSection";
import AboutMeSection from "../MainPage/AboutMeSection";
import ProjectsSection from "../MainPage/ProjectsSection";
import ContactSection from "../MainPage/ContactSection";
import { getHeroData } from "@/Services/getHeroData";
import { getSocial } from "@/Services/getSocial";
import { getAboutMe } from "@/Services/getAboutMe";
import Load from "../Load/Load";
import { getProjects } from "@/Services/getProjects";
import { getContact } from "@/Services/getContact";

const HomePage = () => {
  const [hero, setHero] = useState(null);
  const [socialLinks, setSocialLinks] = useState(null);
  const [aboutMeData, setAboutMeData] = useState(null);
  const [projects, setProjects] = useState(null);
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const HeroData = await getHeroData();
        const SocialData = await getSocial();
        const AboutMe = await getAboutMe();
        const Projects = await getProjects();
        const Contact = await getContact();

        setHero(HeroData[0]);
        setSocialLinks(SocialData[0]);
        setAboutMeData(AboutMe[0]);
        setProjects(Projects);
        setContact(Contact[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-tr from-blue-500 to-purple-600 text-white min-h-screen flex justify-center items-center">
        <Load />
      </div>
    );
  }

  if (!hero || !socialLinks || !aboutMeData || !projects || !contact) {
    return (
      <div className="bg-gradient-to-tr from-blue-500 to-purple-600 text-white min-h-screen flex justify-center items-center">
        <p className="text-xl font-semibold">
          Failed to load data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div id="hero">
        <HeroSection hero={hero} socialLinks={socialLinks} />
      </div>
      <div id="about">
        <AboutMeSection aboutMeData={aboutMeData} />
      </div>
      <div id="projects">
        <ProjectsSection projects={projects} />
      </div>
      <div id="contact">
        <ContactSection contact={contact} socialLinks={socialLinks} />
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition duration-300 z-50"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default HomePage;
