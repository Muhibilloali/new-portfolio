import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import unsplashProject from "../assets/projects/fullStack/Unsplash.png";
import memoryGame from "../assets/projects/miniProjects/memoryGame.png";
import mealGenerator from "../assets/projects/miniProjects/MealGenerator.png";
import shadowUI from "../assets/projects/frontEnd/ShadowUI.png";
import travelAgency from "../assets/projects/frontEnd/travel-agency.png";
import organo from "../assets/projects/frontEnd/organo.png";
import pos from "../assets/projects/frontEnd/pos.png";
import pokemon from "../assets/projects/fullStack/pokemon.png"
import iconWizardAI from "../assets/projects/fullStack/pokemon.png"
import Switcher from "./Switcher";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

const Projects = () => {
  const fullstack = [
    {
      id: 1,
      src: iconWizardAI,
      liveLink: "https://azmsurov.github.io/UnsplashApi/",
      sourceCode: "https://github.com/AzmSurov/UnsplashApi",
      title: "Unsplash API.",
      description:
        "A simply app to display pictures from Unsplash. This mini project makes use of unsplash API to search for and display images based on the search keyword",
      idx: ["HTML", "CSS", "JS"],
      isHidden: "",
    },
    {
      id: 2,
      src: pokemon,
      liveLink: "https://azmsurov.github.io/UnsplashApi/",
      sourceCode: "https://github.com/AzmSurov/UnsplashApi",
      title: "Unsplash API.",
      description:
        "A simply app to display pictures from Unsplash. This mini project makes use of unsplash API to search for and display images based on the search keyword",
      idx: ["HTML", "CSS", "JS"],
      isHidden: "",
    },
  ];

  const frontEnd = [
    {
      id: 1,
      src: pos,
      liveLink: "https://pos-dashboard.netlify.app",
      sourceCode: "https://github.com/AzmSurov/dashboard",
      title: "POS Dashboard",
      description:
        "Simplify your life with my newly designed POS Web App that includes cutting edge order reports. Comes in dark mode!",
      idx: ["React", "Tailwind"],
      isHidden: "",
    },
    {
      id: 2,
      src: travelAgency,
      liveLink: "https://tailwind-travel-agency.netlify.app/",
      sourceCode: "https://github.com/AzmSurov/travel-agency-tailwind",
      title: "Travel Agency",
      description:
        "A complete travel agency front-end site. Single page site developed using React and Tailwind to showcase beautiful destinations available. It's time to explore the world!",
      idx: ["React", "Tailwind"],
      isHidden: "",
    },
    {
      id: 3,
      src: organo,
      liveLink: "https://organo-ui.netlify.app/",
      sourceCode: "https://github.com/AzmSurov/organo",
      title: "Organo",
      description: "Landing page for your next restaurant!",
      idx: ["React", "Tailwind"],
      isHidden: "",
    },
    {
      id: 4,
      src: shadowUI,
      liveLink: "https://tailwind-gradients.netlify.app/",
      sourceCode: "https://github.com/AzmSurov/shadow",
      title: "Shadow UI",
      description:
        "Introducing Shadow UI, a web-based gradient collection site, with 20+ trendy and beautiful gradients for your apps, blog, UI design or to use as content backgrounds. You can also use the Text Gradients section to generate beautiful Tailwind  text gradients",
      idx: ["React", "TypeScript", "Tailwind"],
      isHidden: "",
    },
  ];
  const miniProjects = [
    {
      id: 1,
      src: memoryGame,
      liveLink: "https://memory-game-react-js.netlify.app/",
      sourceCode: "https://github.com/AzmSurov/magic-memory",
      title: "Memory Game",
      description:
        "A simple Memory Puuzzle game. Flip all of the matching tiles to win the game!",
      idx: ["React"],
      isHidden: "",
    },
    {
      id: 2,
      src: unsplashProject,
      liveLink: "https://azmsurov.github.io/UnsplashApi/",
      sourceCode: "https://github.com/AzmSurov/UnsplashApi",
      title: "Unsplash API",
      description:
        "A simple app to display pictures from Unsplash. This mini project makes use of unsplash API to search for and display images based on the search keyword",
      idx: ["HTML", "CSS", "JS", "API"],
      isHidden: "",
    },
    {
      id: 3,
      src: mealGenerator,
      liveLink: "https://beamish-phoenix-d80e8c.netlify.app/",
      sourceCode: "https://github.com/AzmSurov/random-meal-generator",
      title: "Random Meal Generator",
      description:
        "An app that fetches data from MealDB which displays a random meal on load.",
      idx: ["React", "Tailwind", "API"],
      isHidden: "",
    },
  ];

  const [openTab, setOpenTab] = useState(1);
  const [highlights, setHighlights] = useState(true);
  const [highlightsSecond, setHighlightsSecond] = useState(false);
  const [highlightsThird, setHighlightsThird] = useState(false);
  return (
    <div className=" text-gray-900 dark:text-white  bg-[#F3F4F5] dark:bg-slate-900 min-h-screen">
      <div name="portfolio" className="md:h-2/3 container mx-auto">
        <div className="p-4 mx-auto flex flex-col justify-center w-full ">
          <div className="pb-8 flex justify-between">
            <p className=" text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white inline">
              <RoughNotation
                type="underline"
                animationDelay={1000}
                strokeWidth={5}
                show={true}
                color="#c8b6ff"
              >
                All Projects
              </RoughNotation>
            </p>
            <div className="flex gap-4 items-center">
              <Link to="/">
                <button className="px-4 py-1.5 sm:px-4 bg-[#3B3A51] text-white rounded-lg">
                  Go Back
                </button>
              </Link>
              <Switcher />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap ">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <div
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block cursor-pointer leading-normal border dark:border-slate-600"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                    setHighlights(true);
                    setHighlightsSecond(false);
                    setHighlightsThird(false);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <RoughNotation
                    type="underline"
                    animationDelay={200}
                    strokeWidth={5}
                    show={highlights}
                    color="#8ac926"
                  >
                    Front-End
                  </RoughNotation>
                </div>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <div
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block cursor-pointer leading-normal border dark:border-slate-600"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                    setHighlightsSecond(true);
                    setHighlights(false);
                    setHighlightsThird(false);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <RoughNotation
                    type="underline"
                    animationDelay={200}
                    strokeWidth={5}
                    show={highlightsSecond}
                    color="#ff595e"
                  >
                    FullStack
                  </RoughNotation>
                </div>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <div
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block cursor-pointer leading-normal border dark:border-slate-600"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                    setHighlightsThird(true);
                    setHighlights(false);
                    setHighlightsSecond(false);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  <RoughNotation
                    type="underline"
                    animationDelay={200}
                    strokeWidth={5}
                    show={highlightsThird}
                    color="#6a4c93"
                  >
                    API & Others
                  </RoughNotation>
                </div>
              </li>
            </ul>
            <div className="relative flex flex-row min-w-0 break-words  dark:bg-gray-800/30 w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    {" "}
                    {frontEnd.map(
                      ({
                        id,
                        src,
                        liveLink,
                        sourceCode,
                        title,
                        description,
                        idx,
                      }) => (
                        <div key={id} className="py-5">
                          <div class="grid grid-cols-1 overflow-hidden border border-gray-200 dark:border-slate-600 rounded-lg group sm:grid-cols-3">
                            <div class="relative">
                              <img
                                class="absolute inset-0 object-cover w-full h-full"
                                src={src}
                                alt=""
                              />
                            </div>

                            <div class="p-8 sm:col-span-2">
                              <div className="flex justify-between items-center">
                                <h5 class=" font-bold">{title}</h5>
                                <div className="flex justify-between lg:justify-start gap-2">
                                  <a
                                    href={sourceCode}
                                    className="rounded-xl p-2 text-gray-900 dark:text-white  bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80"
                                  >
                                    <FiGithub size={22} />{" "}
                                  </a>
                                  <a
                                    href={liveLink}
                                    className="rounded-xl p-2 text-gray-900 dark:text-white  bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80"
                                  >
                                    <HiOutlineExternalLink size={22} />{" "}
                                  </a>
                                </div>
                              </div>
                              <p class="py-2 text-sm text-gray-600 dark:text-gray-400 w-11/12 sm:w-11/12">
                                {description}
                              </p>
                              <div className="flex justify-between pt-4">
                                <ul class="flex space-x-1">
                                  {idx.map((element, idx) => (
                                    <RoughNotation
                                      key={idx}
                                      type="box"
                                      animationDelay={500}
                                      strokeWidth={1}
                                      show={highlights}
                                      color="#6a4c93"
                                    >
                                      <li class="inline-block px-3 py-0.5 text-xs font-semibold text-black dark:text-gray-300">
                                        {element}
                                      </li>
                                    </RoughNotation>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    {fullstack.map(
                      ({
                        id,
                        src,
                        liveLink,
                        sourceCode,
                        title,
                        description,
                        idx,
                      }) => (
                        <div key={id} className="py-5">
                          <div class="grid grid-cols-1 overflow-hidden border border-gray-200 dark:border-slate-600 rounded-lg group sm:grid-cols-3">
                            <div class="relative">
                              <img
                                class="absolute inset-0 object-cover w-full h-full"
                                src={src}
                                alt=""
                              />
                            </div>

                            <div class="p-8 sm:col-span-2">
                              <div className="flex justify-between items-center">
                                <h5 class=" font-bold">{title}</h5>
                                <div className="flex justify-between lg:justify-start gap-2">
                                  <a
                                    href={sourceCode}
                                    className="rounded-xl p-2 text-gray-900 dark:text-white  bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80"
                                  >
                                    <FiGithub size={22} />{" "}
                                  </a>
                                  <a
                                    href={liveLink}
                                    className="rounded-xl p-2 text-gray-900 dark:text-white  bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80"
                                  >
                                    <HiOutlineExternalLink size={22} />{" "}
                                  </a>
                                </div>
                              </div>
                              <p class="py-2 text-sm text-gray-600 dark:text-gray-400 w-11/12 sm:w-11/12">
                                {description}
                              </p>
                              <div className="flex justify-between pt-4">
                                <ul class="flex space-x-1">
                                  {idx.map((element, idx) => (
                                    <RoughNotation
                                      key={idx}
                                      type="box"
                                      animationDelay={500}
                                      strokeWidth={1}
                                      show={highlightsSecond}
                                      color="#6a4c93"
                                    >
                                      <li class="inline-block px-3 py-0.5 text-xs font-semibold text-black dark:text-gray-300">
                                        {element}
                                      </li>
                                    </RoughNotation>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    {miniProjects.map(
                      ({
                        id,
                        src,
                        liveLink,
                        sourceCode,
                        title,
                        description,
                        idx,
                      }) => (
                        <div key={id} className="py-5">
                          <div class="grid grid-cols-1 overflow-hidden border border-gray-200 dark:border-slate-600 rounded-lg group sm:grid-cols-3">
                            <div class="relative">
                              <img
                                class="absolute inset-0 object-cover w-full h-full"
                                src={src}
                                alt=""
                              />
                            </div>

                            <div class="p-8 sm:col-span-2">
                              <div className="flex justify-between items-center">
                                <h5 class=" font-bold">{title}</h5>
                                <div className="flex justify-between lg:justify-start gap-2">
                                  <a
                                    href={sourceCode}
                                    className="rounded-xl p-2 text-gray-900 dark:text-white  bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80"
                                  >
                                    <FiGithub size={22} />{" "}
                                  </a>
                                  <a
                                    href={liveLink}
                                    className="rounded-xl p-2 text-gray-900 dark:text-white  bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80"
                                  >
                                    <HiOutlineExternalLink size={22} />{" "}
                                  </a>
                                </div>
                              </div>
                              <p class="py-2 text-sm text-gray-600 dark:text-gray-400 w-11/12 sm:w-11/12">
                                {description}
                              </p>
                              <div className="flex justify-between pt-4">
                                <ul class="flex space-x-1">
                                  {idx.map((element, idx) => (
                                    <RoughNotation
                                      key={idx}
                                      type="box"
                                      animationDelay={500}
                                      strokeWidth={1}
                                      show={highlightsThird}
                                      color="#6a4c93"
                                    >
                                      <li class="inline-block px-3 py-0.5 text-xs font-semibold text-black dark:text-gray-300">
                                        {element}
                                      </li>
                                    </RoughNotation>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
