import React from "react";
import { RoughNotation } from "react-rough-notation";
import git from "../assets/icons/git.png";
import github1 from "../assets/icons/github1.png";
import javascript from "../assets/icons/js.png";
import reactImage from "../assets/icons/react.png";
import css3 from "../assets/icons/css3.png";
import tailwind from "../assets/icons/tailwind.png";
import bootstrap2 from "../assets/icons/bootstrap2.png";
import firebase from "../assets/icons/firebase.png";
import vite from "../assets/icons/vite.png";
import html5 from "../assets/icons/html5.png";
import chatgpt2 from "../assets/icons/chatgpt2.png";
import materialUi from "../assets/icons/materialUi.png";
import figma2 from "../assets/icons/figma2.png";
import typescript from "../assets/icons/typescript.png";
import photoshop from "../assets/icons/photoshop.png";
import illustrator from "../assets/icons/illustrator.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: javascript,
    },
    {
      id: 14,
      src: typescript,
    },
    {
      id: 2,
      src: reactImage,
    },
    
    {
      id: 3,
      src: html5,
    },
    {
      id: 4,
      src: css3,
    },
    {
      id: 10,
      src: bootstrap2,
    },
    {
      id: 11,
      src: tailwind,
    },
    {
      id: 12,
      src: materialUi,
    },
    {
      id: 5,
      src: git,
    },
    {
      id: 6,
      src: github1,
    },
    {
      id: 8,
      src: firebase,
    },
    {
      id: 9,
      src: vite,
    },
    
    {
      id: 13,
      src: figma2,
    },
    {
      id: 7,
      src: chatgpt2,
    },
    {
      id: 7,
      src: photoshop,
    },
    {
      id: 15,
      src: illustrator,
    },
    
  ];

  return (
    <div
      name="skills"
      className="pb-12 text-gray-900 dark:text-white bg-[#F3F4F5] dark:bg-slate-900"
    >
      <div className="p-4 text-black dark:text-white container mx-auto">
        <div>
          <p className="text-4xl font-extrabold text-slate-900 dark:text-white inline">
            <RoughNotation
              type="underline"
              animationDelay={1000}
              strokeWidth={7}
              show={true}
              color="#457b9d"
            >
              Skills
            </RoughNotation>
          </p>
          <p className="py-6 text-xl">
            These are the technologies I've worked with and learning something
            new every other day!
          </p>
        </div>
      </div>

      <section className="">
        <div className="center"></div>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-y-10 gap-x-6">
            {skills.map((skill, index) => {
              return (
                <div className="flex items-center justify-center" key={index}>
                  <img
                    className="h-10 md:h-16 lg:h-20"
                    src={skill.src}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
