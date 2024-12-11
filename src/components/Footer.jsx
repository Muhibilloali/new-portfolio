import React from 'react'
import {FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTelegramFill } from "react-icons/ri";
import {FiMail} from 'react-icons/fi';
import { IoLogoInstagram } from "react-icons/io5";

//import {ImYoutube} from 'react-icons/im';

const Footer = () => {
  return (
    <div className='text-gray-900 dark:text-white  bg-[#F3F4F5] dark:bg-slate-900'>
        <footer class="text-center">
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto space-y-6">
      <div class="flex justify-center space-x-6">
        <a
          class="text-sky-600 hover:text-opacity-75 text-3xl"
          href="https://www.linkedin.com/in/muxibillo-abduqaxxorov-82b94a281/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaLinkedinIn />
        </a>
        <a
          class="text-sky-600 hover:text-opacity-75 text-3xl"
          href="https://t.me/Muhibillo_1115"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <RiTelegramFill />
        </a>
        <a
          class="text-blue-400	 hover:text-opacity-75 text-3xl"
          href="https://www.instagram.com/muhibillo_ali/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
         <IoLogoInstagram />
        </a>
        <a
          class="text-gray-900 dark:text-white hover:text-opacity-75 text-3xl"
          href="https://github.com/Muhibilloali"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
         <FaGithub />
        </a>
        <a
          class="text-blue-400	 hover:text-opacity-75 text-3xl"
          // href="mailto:muhibilloabduqahhorov50@gmail.com"
          href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
         <FiMail />
        </a>
        

      </div>


<p class="text-lg font-medium"> Made with  by <span className='  bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 text-lg'>Muhibillo Abduqaxxorov</span> &copy; {new Date().getFullYear()}</p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer