import React from "react";
import { RoughNotation } from "react-rough-notation";
import ".././App.css";
const About = ({ sendData }) => {
  return (
    <div
      name="about"
      className="  text-slate-900 dark:text-slate-300  bg-[#F3F4F5] dark:bg-slate-900"
    >
      <div className="p-4 container mx-auto flex flex-col justify-center w-full h-full">
        <p className="text-4xl font-extrabold text-slate-900 dark:text-white">
          <RoughNotation
            type="underline"
            animationDelay={1000}
            strokeWidth={5}
            show={sendData}
            color="#457b9d"
          >
            About
          </RoughNotation>
        </p>

        <p className="text-xl mt-10">
          Hello, my name is
          <span class="bg-clip-text text-transparent mx-0.5  bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500">
            Muhibillo
          </span>
          , and I am 24 years old. I am a third-year student at
          <RoughNotation
            className="dark:text-black mx-2"
            type="highlight"
            animationDelay={1000}
            padding={5}
            show={true}
            color="#8ac926"
          >
            Istanbul University
          </RoughNotation>
          in the Istanbul province of Turkey, studying computer engineering.
          Currently, I am on academic vacation. I am also a graduate of the
          Frontend Developer specialization at
          <RoughNotation
            className="dark:text-black mx-2"
            type="highlight"
            animationDelay={1000}
            padding={5}
            show={true}
            color="#8ac926"
          >
            Astrum IT Academy.
          </RoughNotation>
          I have a Turkish C1 language certificate at the level, and I am proficient in English (B1),  Russian (A2) and Japanese (N4). I currently live in Tashkent.{" "}
        </p>

        <p className="text-xl mt-10">
          My passion for web development started back in 2022 when I decided to
          try editing a Shopify theme — turns out hacking together a simple add
          to cart button taught me a lot about HTML & CSS! I’ve always been
          curious about technology and how things work. Figuring things out is
          what inspired me to learn how to code.
          I like bringing new ideas to life so I code the front-end. In
          particular, I enjoy the sense of pride and accomplishment when
          combining everything into a complete project.
        </p>

        <br />

        <p className="text-xl">
          
        </p>

        <br />
        <p className="text-xl ">
          Here is my{" "}
          <a
            className="dark:text-black mx-2"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <RoughNotation
              type="highlight"
              animationDelay={1000}
              padding={5}
              show={true}
              color="#8ac926"
            >
              resume
            </RoughNotation>
          </a>{" "}
          in case you want to have a look.
        </p>
      </div>
    </div>
  );
};

export default About;
