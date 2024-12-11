import React from "react";
import heroBg from "../assets/bgMain.png";
import "../App.css";
import { Link } from "react-scroll";
import { RoughNotation } from "react-rough-notation";

const Main = ({ sendData }) => {
  return (
    <div className=' className="progress-bar" style={{ scaleX }} text-white container mx-auto bg-[#F3F4F5] dark:bg-slate-900'>
      <section className="flex flex-col-reverse justify-between lg:flex-row lg:justify-between    lg:space-x-12 p-3">
        <div className=" mx-auto w-2/3 lg:w-full sm:py-10">
          <img className="rounded-2xl shadow-xl" src={heroBg} alt="hero" />
        </div>
        <div className="xl:py-10 md:py-6">
          <p className=" lg:text-5xl xl:text-6xl sm:text-4xl text-4xl  font-extrabold tracking-wide  mb-6 leading-10 text-slate-900 dark:text-white">
            Hello! I'm{" "}
            <span class="bg-clip-text text-transparent   bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500">
              Muhibillo Abduqaxxorov
            </span>
            , a Frontend Developer based in{" "}
            <RoughNotation
              type="underline"
              animationDelay={500}
              strokeWidth={5}
              show={sendData}
              color="rgb(29 78 216)"
            >
              Uzbekistan
            </RoughNotation>
          </p>
          <p className="leading-7 mb-6 text-slate-600 dark:text-slate-300 text-xl">
            I'm a passionate React Developer focused on efficiency and constant
            learning. I bring new ideas to life by building user-centric
            interfaces either from the{" "}
            <RoughNotation
              type="underline"
              animationDelay={1000}
              strokeWidth={5}
              show={sendData}
              color="#8ac926"
            >
              frontend
            </RoughNotation>{" "}
            <RoughNotation
              type="underline"
              animationDelay={500}
              strokeWidth={5}
              show={sendData}
              color="#8ac926"
            ></RoughNotation>{" "}
            mostly using technologies like JavaScript, React, Typescript and
            API(or Firebase)...
          </p>
          <div id="gone" class=" text-center">
            <div class="relative inline-flex mt-10 group ">
              <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <Link to="about" smooth duration={500}>
                <a
                  href="www.google.com"
                  title=""
                  class="relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white dark:text-gray-900 transition-all duration-200 bg-gray-900 dark:bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Know More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
