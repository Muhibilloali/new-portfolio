import React, { useState } from 'react';
import { RoughNotation } from "react-rough-notation";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import astrumcer from "../../src/assets/Certificate/astrumcer.jpg";
import frontend from "../../src/assets/Certificate/frontend.png";
import fullstack from "../assets/Certificate/fullstact.png"
import software from "../../src/assets/Certificate/software.png";
import tomer from "../../src/assets/Certificate/tomer.jpg";

function Certificate() {
    const certificates = [
        {
            id: 1,
            src: astrumcer,
            liveLink: "https://certificate.astrum.uz/?seria=FD&sertificate_id=0000191",
            sourceCode: "",
            title: "Astrum IT Academy in FRONTEND DEVELOPMENT",
            description: `I have successfully completed the Frontend Developer program at Astrum IT Academy.`,
            isHidden: "hidden",
        },
        {
            id: 1,
            src: frontend,
            liveLink: "https://upskill.us.qwasar.io/certificates/MTI1Mi1hYmR1cWF4eF9tLW1heS0yMDIxLTIwLTQyZjM=",
            sourceCode: "",
            title: "I am a graduate of the Frontend Developer program organized by Qwasar Silicon Valley.",
            description: `ADVANCED FRONTEND DEVELOPMENT
                          is awarded to
                          Muxibillo Abduqaxxorov
                          for the completion of 4 projects in addition to coding exercises at Silicon Valley standards covering fundamental concepts of frontend app building with ReactJS.`,
            isHidden: "hidden",
        },
        {
            id: 2,
            src: fullstack,
            liveLink: "https://upskill.us.qwasar.io/certificates/MTM0Ni1hYmR1cWF4eF9tLWp1bC0yMDIxLTMwLTBhNmQ=",
            sourceCode: "",
            title: "INTRODUCTION TO FULLSTACK DEVELOPMENT",
            description: `INTRODUCTION TO FULLSTACK DEVELOPMENT
                          is awarded to
                          Muxibillo Abduqaxxorov
                          for the completion of 15 projects in addition to coding exercises at Silicon Valley standards covering fundamental concepts of fullstack engineering in Javascript programming.`,
            isHidden: "hidden",
        },
        {
            id: 3,
            src: software,
            liveLink: "https://upskill.us.qwasar.io/certificates/MTIwMy1hYmR1cWF4eF9tLW1hci0yMDIxLTExLTM4NjU=",
            sourceCode: "",
            title: "INTRODUCTION TO SOFTWARE ENGINEERING",
            description: `INTRODUCTION TO SOFTWARE ENGINEERING
                          is awarded to
                          Muxibillo Abduqaxxorov
                          for the completion of 16 projects in addition to coding exercises at Silicon Valley standards covering fundamental concepts of software engineering in C programming level I.`,
            isHidden: "hidden",
        },
        {
            id: 4,
            src: tomer,
            liveLink:"" ,
            sourceCode: "https://github.com/Muhibilloali",
            title: "Turkish Language B2 Certificate",
            description: `By participating in the Türkiye Turkish Proficiency Test held at our student center, the student whose identity is written above
                          It was successful and was entitled to receive this B2 certificate.
                          The transcript of the mentioned student according to his/her skill areas is stated above.`,
            isHidden: "hidden",
        },
    ];

    const [openTab, setOpenTab] = useState(1);
    const [highlights, setHighlights] = useState(true);

    return (
        <div
        name="certificates"
        className="text-gray-900 dark:text-white bg-[#F3F4F5] dark:bg-slate-900">
            <div name="portfolio" className="md:h-2/3 container mx-auto">
                <div className="p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-extrabold text-slate-900 dark:text-white inline">
                            
                            Certificates
                        </p>
                        <p className="pt-6 text-xl">See my famous certificate!</p>
                    </div>
                </div>

                <div className="relative flex flex-row min-w-0 break-words dark:bg-gray-800/30 w-full mb-6 shadow-lg rounded">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                {certificates.map(({ id, src, liveLink, sourceCode, title, description, isHidden }) => (
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
                                                            className={"rounded-xl p-2 text-gray-900 dark:text-white bg-[#ECEFF2] dark:bg-[#3B3A51] hover:opacity-80 " + (isHidden)}
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
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificate;
