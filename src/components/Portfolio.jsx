import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import aslilogo from "../assets/projects/fullStack/aslilogo.png";
import booklogo from "../assets/projects/fullStack/booklogo.png";
import todolist from "../assets/projects/miniProjects/todolist.png";
import travelAgency from "../assets/projects/frontEnd/travel-agency.png";
import calculator from "../assets/projects/frontEnd/calculator.png";
import pokemon from "../assets/projects/fullStack/pokemon.png";
import pizza from "../assets/projects/frontEnd/pizza.png";
import instagram from "../assets/projects/fullStack/instagram.png";
import dropbox from "../assets/projects/fullStack/dropbox.png";
import yelp from "../assets/projects/fullStack/yelp.png";
import pomodoro from "../assets/projects/fullStack/pomodoro.png";
import gulshan from "../assets/projects/frontEnd/gulshan.png";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

const Portfolio = () => {
  //FullStack Projects
  const fullstack = [
    {
      id: 4,
      src: booklogo,
      liveLink: "https:book.uz",
      sourceCode: "https://github.com/Muhibilloali",
      title: "Online Kitap Mağazası Book.uz",
      description:
        "Bu proje, kullanıcıların diledikleri kitapları çevrim içi olarak inceleyip satın alabilecekleri modern bir web uygulamasıdır. Kullanıcı dostu arayüz, ödeme sistemi entegrasyonu ve mobil uyumlu tasarımıyla kolay ve keyifli bir alışveriş deneyimi sunar.",
      idx: [
        "Frontend -> NextJs , Tailwind Plus",
        "Backend API -> Python, Django",
      ],
      isHidden: "hidden",
    },
    {
      id: 4,
      src: aslilogo,
      liveLink: "https://asliborekmenu.vercel.app/",
      sourceCode: "https://github.com/Muhibilloali",
      title: "Aslı Börek – QR Kodlu Online Menü",
      description:
        "İstanbul’da yer alan Aslı Börek kafesi için geliştirilen bu proje sayesinde müşteriler QR kodu okutarak menüye kolayca erişebilir, ürünleri inceleyebilir ve mobil cihazları üzerinden sipariş verebilirler. Menü tasarımı tamamen mobil ve tablet uyumlu olarak hazırlanmıştır.",
      idx: [
        "Frontend -> ReactJsx , Tailwind Plus, Vitejs",
        "Backend API -> Python, Django",
      ],
      isHidden: "hidden",
    },

    {
      id: 1,
      src: gulshan,
      liveLink: "https://gulshanchool.vercel.app/",
      sourceCode: "",
      title: "Gulshan School",
      description: `Gulshan School projesinde, okul bilgilerine kolay erişimi sağlamak ve öğretmenler, öğrenciler ile veliler arasındaki iletişimi güçlendirmek amacıyla modern ve kullanıcı dostu bir web sitesi geliştirdim. Proje; mobil uyumlu tasarımı, etkileşimli bileşenleri ve güçlü işlevselliğiyle tüm cihazlarda kesintisiz bir kullanıcı deneyimi sunuyor.

`,
      idx: [
        "Frontend -> ReactJsx , Tailwind, Vitejs",
        "Backend API -> Python, Django",
      ],
      isHidden: "hidden",
    },
    {
      id: 1,
      src: instagram,
      liveLink: "https://my-instagram-clone-chi.vercel.app/login",
      sourceCode: "",
      title: "Instagram Clone",
      description: `Bu proje bir Instagram klonudur. Giriş yaptıktan sonra fotoğraf ve videolar yükleyebilirsiniz. Arkadaşlarınız bu gönderilerinizi görebilir, yorum yapabilir ve sizinle sohbet edebilir.`,
      idx: [
        "Frontend -> ReactJsx , Tailwind, Vitejs",
        "Backend API -> Firebase",
      ],
      isHidden: "hidden",
    },
    {
      id: 2,
      src: dropbox,
      liveLink: "https://my-dropbox.netlify.app/",
      sourceCode: "",
      title: "My Dropbox",
      description:
        "Bu projenin adı My_Dropbox. Bu platformda eski dosya ve resimlerinizi saklayabilirsiniz. Kayıt olmanız gerekmektedir.",
      idx: [
        "Frontend -> ReactJsx , Tailwind, Vitejs",
        "Backend API -> Firebase",
      ],
      isHidden: "hidden",
    },
    {
      id: 3,
      src: pokemon,
      liveLink: "https://pokemon-muhibillo.netlify.app/",
      sourceCode: "https://github.com/Muhibilloali",
      title: "My Pokemon",
      description:
        "Bu, sevdiğiniz Pokemon’ların resimlerini görebileceğiniz ve onların özelliklerini inceleyebileceğiniz bir Pokemon projesidir.",
      idx: ["ReactJsx", "Tailwind", "Firebase", "ViteJs"],
      isHidden: "hidden",
    },
  ];

  const frontEnd = [
    {
      id: 1,
      src: pizza,
      liveLink: "",
      sourceCode: "https://github.com/Muhibilloali",
      title: "Fast_Food Menu",
      description:
        "To view this website, which is being developed for a fast-food restaurant and allows you to order online without having to go to the restaurant, you need to visit my GitHub profile.",
      idx: ["Html5", "Css3", "Javascript"],
      isHidden: "",
    },
    {
      id: 2,
      src: travelAgency,
      liveLink: "https://tailwind-travel-agency.netlify.app/",
      sourceCode: "https://github.com/Muhibilloali",
      title: "Travel Agency",
      description:
        "To view this website, which has been developed for planning your trips from anywhere and allows you to organize your travels without having to visit travel agencies, you need to visit my GitHub profile.",
      idx: ["React", "Tailwind", "ViteJs"],
      isHidden: "",
    },
    {
      id: 3,
      src: calculator,
      liveLink: "https://my-calculator-muhibillo.netlify.app/",
      sourceCode: "https://github.com/Muhibilloali",
      title: "My_Calculator",
      description:
        "You can perform all mathematical operations (+, -, *, /, %) and other tasks on this website. Visit my GitHub profile to see this site.",
      idx: ["React", "Tailwind"],
      isHidden: "",
    },
  ];
  const miniProjects = [
    {
      id: 1,
      src: todolist,
      liveLink: "https://bootcamp-todolistapp.vercel.app/",
      sourceCode: "https://github.com/Muhibilloali",
      title: "To Do List",
      description:
        "The name of this project is 'To Do list' where you can enter your daily weekly and yearly plans!",
      idx: ["ReactJs", "API", "Tailwind", "ViteJs", "Material ui"],
      isHidden: "",
    },
    {
      id: 2,
      src: instagram,
      liveLink: "https://my-instagram-clone-chi.vercel.app/login",
      sourceCode: "https://github.com/Muhibilloali",
      title: "Instagram_Clone",
      description: `This is an Instagram_Clone project, where you can upload photos and videos after authorization, your friends can see them and comment on your posts, and you can chat with them!`,
      idx: ["ReactJsx", "Tailwind", "Firebse", "ViteJs"],
      isHidden: "hidden",
    },
    {
      id: 3,
      src: pomodoro,
      liveLink: "https://pomodoro-clone-eta.vercel.app/",
      sourceCode: "https://github.com/Muhibilloali",
      title: "Pomodoro Timer",
      description:
        "Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.",
      idx: ["ReactJsx", "Tailwind", "API", "ViteJs"],
      isHidden: "hidden",
    },
  ];

  const [openTab, setOpenTab] = useState(1);
  const [highlights, setHighlights] = useState(true);
  const [highlightsSecond, setHighlightsSecond] = useState(false);
  const [highlightsThird, setHighlightsThird] = useState(false);

  return (
    <div
      name="portfolio"
      className=" text-gray-900 dark:text-white  bg-[#F3F4F5] dark:bg-slate-900"
    >
      <div name="portfolio" className="md:h-2/3 container mx-auto">
        <div className="p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-extrabold text-slate-900 dark:text-white inline">
              Portfolio
            </p>
            <p className="pt-6 text-xl">İşte öne çıkan bazı çalışmalarım!</p>
          </div>
        </div>

        <div className="flex flex-wrap ">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row "
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <div
                  className={
                    "text-xs font-bold hover:bg-gray-200/50 dark:hover:bg-gray-600/30 uppercase px-5 py-3 shadow-lg rounded block cursor-pointer leading-normal border dark:border-slate-600"
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
                    Fullstack
                  </RoughNotation>
                </div>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <div
                  className={
                    "text-xs font-bold hover:bg-gray-200/50 dark:hover:bg-gray-600/30 uppercase px-5 py-3 shadow-lg rounded block cursor-pointer leading-normal border dark:border-slate-600"
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
                    Frontend
                  </RoughNotation>
                </div>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <div
                  className={
                    "text-xs font-bold hover:bg-gray-200/50 dark:hover:bg-gray-600/30 uppercase px-5 py-3 shadow-lg rounded block cursor-pointer leading-normal border dark:border-slate-600"
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
                    className={openTab === 1 ? "block " : "hidden"}
                    id="link1"
                  >
                    {" "}
                    {fullstack.map(
                      ({
                        id,
                        src,
                        liveLink,
                        sourceCode,
                        title,
                        description,
                        isHidden,
                        idx,
                      }) => (
                        <div key={id} className="py-5">
                          <div class="grid grid-cols-1 overflow-hidden border border-gray-300 dark:border-slate-600 rounded-lg group sm:grid-cols-3">
                            <div class="relative">
                              <img
                                class="absolute inset-0 object-auto w-full h-full"
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
                                    className={
                                      "rounded-xl p-2 text-gray-900 dark:text-white  bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80 " +
                                      isHidden
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <FiGithub size={22} />{" "}
                                  </a>
                                  <a
                                    href={liveLink}
                                    className="rounded-xl p-2 text-gray-900 dark:text-white  bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80"
                                    target="_blank"
                                    rel="noreferrer"
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
                    {frontEnd.map(
                      ({
                        id,
                        src,
                        liveLink,
                        sourceCode,
                        title,
                        description,
                        isHidden,
                        idx,
                      }) => (
                        <div key={id} className="py-5">
                          <div class="grid grid-cols-1 overflow-hidden border border-gray-300 dark:border-slate-600 rounded-lg group sm:grid-cols-3">
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
                                    className={
                                      "rounded-xl p-2 text-gray-900 dark:text-white  bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80 " +
                                      isHidden
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <FiGithub size={22} />{" "}
                                  </a>
                                  <a
                                    href={liveLink}
                                    className="rounded-xl p-2 text-gray-900 dark:text-white  bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80"
                                    target="_blank"
                                    rel="noreferrer"
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
                          <div class="grid grid-cols-1 overflow-hidden border border-gray-300 dark:border-slate-600 rounded-lg group sm:grid-cols-3">
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
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <FiGithub size={22} />{" "}
                                  </a>
                                  <a
                                    href={liveLink}
                                    className="rounded-xl p-2 text-gray-900 dark:text-white  bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80"
                                    target="_blank"
                                    rel="noreferrer"
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

export default Portfolio;
