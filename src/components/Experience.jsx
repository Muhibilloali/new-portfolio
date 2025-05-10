import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import astrum from "../../src/assets/Certificate/astrum.jpg";
import astrumStaff from "../assets/Certificate/astrum_staff.jpg";
import freelanser from "../assets/Certificate/freelanser.jpeg";

function Certificate() {
  const certificates = [
    {
      id: 3,
      src: freelanser,
      sourceCode: "",
      title: "Upwork, Freelancer – 2 yıl",
      description: `Bağımsız bir freelancer olarak, Upwork ve diğer güvenilir freelance platformları aracılığıyla müşterilerimin ihtiyaçlarına özel yaratıcı çözümler ve kaliteli işler sunuyorum.`,
      isHidden: "hidden",
    },
    {
      id: 1,
      src: astrumStaff,
      sourceCode: "",
      title: "Astrum IT Academy’de Frontend Mentor – 2024 (5 ay)",
      description: `Bir mentor olarak, başkalarının kişisel ve profesyonel gelişimlerine rehberlik ettim ve onların potansiyellerini ortaya çıkarmalarına yardımcı oldum. Bu deneyim benim için hem öğretici hem de kişisel gelişimime katkı sağlayıcı oldu.`,
      isHidden: "hidden",
    },
    {
      id: 2,
      src: astrum,
      sourceCode: "",
      title: "Astra Devs’te Frontend Developer – 2024-2025",
      description: `Astra Devs’te Frontend Developer olarak, kullanıcı dostu web arayüzleri geliştirdim, kullanıcı deneyimini iyileştirdim ve mobil uyumlu (responsive) tasarımlar uyguladım.`,
      isHidden: "hidden",
    },
    
  ];

  const [openTab, setOpenTab] = useState(1);
  const [highlights, setHighlights] = useState(true);

  return (
    <div
      name="deneyim"
      className="text-gray-900 dark:text-white bg-[#F3F4F5] dark:bg-slate-900"
    >
      <div name="portfolio" className="md:h-2/3 container mx-auto">
        <div className="p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-extrabold text-slate-900 dark:text-white inline">
              <RoughNotation
                type="underline"
                animationDelay={1000}
                strokeWidth={5}
                show={true}
                color="#c8b6ff"
              >
                Deneyim
              </RoughNotation>
            </p>
          </div>
        </div>

        <div className="relative flex flex-row min-w-0 break-words dark:bg-gray-800/30 w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                {certificates.map(
                  ({
                    id,
                    src,
                    liveLink,
                    sourceCode,
                    title,
                    description,
                    isHidden,
                  }) => (
                    <div key={id} className="py-5">
                      <div className="grid grid-cols-1 overflow-hidden border border-gray-300 dark:border-slate-600 rounded-lg group sm:grid-cols-3">
                        <div className="relative hidden sm:block">
                          <img
                            className="absolute inset-0 object-cover w-full h-full"
                            src={src}
                            alt=""
                          />
                        </div>

                        <div className="p-8 sm:col-span-2">
                          <div className="flex justify-between items-center">
                            <h5 className="font-bold">{title}</h5>
                            <div className="flex justify-between lg:justify-start gap-2">
                              <a
                                href={sourceCode}
                                className={
                                  "rounded-xl p-2 text-gray-900 dark:text-white bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80 " +
                                  isHidden
                                }
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FiGithub size={22} />
                              </a>
                              <a
                                href={liveLink}
                                className="rounded-xl p-2 text-gray-900 dark:text-white bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <HiOutlineExternalLink size={22} />
                              </a>
                            </div>
                          </div>
                          <p className="py-2 text-sm text-gray-600 dark:text-gray-400 w-11/12 sm:w-11/12">
                            {description}
                          </p>
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
  );
}

export default Certificate;
