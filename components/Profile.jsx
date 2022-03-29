import Image from "next/image"
import { FaReact } from 'react-icons/fa'
import {SiJavascript, SiTypescript} from 'react-icons/si'
import { motion } from 'framer-motion'
import { fadeInUp } from "../styles/animations"


export default function Profile() {
  return (
    <div
      className="text-gray-900 dark:text-white overflow-y-scroll overflow-x-hidden shadow-indigo-500/50 shadow-2xl mt-5 mb-5 w-[260px] xs:w-[350px] sm:w-[630px] md:w-[740px] lg:w-[1000px] h-[600px] md:h-[700px] border-2 border-dashed rounded-lg">
      <div className="flex flex-col items-center justify-around border-b-2 xs:flex-row xs:h-[100px]">
        <h1
          className="m-3 text-[35px] sm:text-[40px] leading-9 sm:leading-[40px] font-bold">
            Natsuki Yamaguchi
        </h1>
        <div className="ring-gray-200 ring-4 w-[120px] xs:w-auto xs:h-auto sm:w-[80px] sm:h-[80px] h-[120px] flex items-center justify-center m-3 overflow-hidden rounded-full">
          <Image
            src='/images/profile.jpg'
            alt='avatar'
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="flex flex-col lg:w-[500px] my-5 mx-2 sm:m-5 lg:m-5 lg:mr-0">
          <div className="border rounded-md md:mb-1 lg:mb-0">
            <h2
              className="w-full text-lg font-bold shadow-sm shadow-indigo-500/50 sm:text-xl">
                Job Experience
            </h2>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="pt-5 pb-3 pl-8 pr-5 mt-3 border rounded-lg shadow-2xl sm:mt-4 md:mt-5 lg:mt-3 lg:h-full shadow-indigo-500/50"
          >
            <ol className="relative border-l border-gray-200 dark:border-gray-700">

              {/* Freelance Frontend Develper */}
              <li className="mb-5 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-4 sm:ring-8 ring-white dark:ring-indigo-500 dark:bg-blue-900">
                  <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </span>
                <h3
                  className="mb-2 ml-2 text-base font-bold text-gray-900 md:mb-1 md:font-semibold sm:text-lg dark:text-white">
                    Frontend Developer (3yrs +)
                </h3>
                <time
                  className="block mb-2 text-xs font-normal leading-none text-gray-400 sm:text-sm dark:text-gray-500">
                    2019 - present
                </time>
                <p
                  className="mb-4 text-sm font-normal text-gray-500 sm:text-base dark:text-gray-300">
                      Freelance Frontend Developwer
                      <br />
                      React.js, Next.js
                </p>
              </li>

              {/* Professional Singer */}
              <li className="mb-5 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-4 sm:ring-8 ring-white dark:ring-indigo-500 dark:bg-blue-900">
                  <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </span>
                <h3
                  className="mb-2 ml-2 text-base font-bold text-gray-900 md:mb-1 md:font-semibold sm:text-lg dark:text-white">
                    Professional Singer
                </h3>
                <time
                  className="block mb-2 text-xs font-normal leading-none text-gray-400 sm:text-sm dark:text-gray-500">
                    2015 - 2019
                </time>
              </li>

              {/* Micosoft */}
              <li className="mb-8 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-4 sm:ring-8 ring-white dark:ring-indigo-500 dark:bg-blue-900">
                  <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </span>
                <h3
                  className="mb-2 ml-2 text-base font-bold text-gray-900 md:mb-1 md:font-semibold sm:text-lg dark:text-white">
                    Microsoft Japan
                </h3>
                <time
                  className="block mb-2 text-xs font-normal leading-none text-gray-400 sm:text-sm dark:text-gray-500">
                    2014 - 2015
                </time>
                <p
                  className="mb-4 text-sm font-normal text-gray-500 sm:text-base dark:text-gray-300">
                    Test suitability and stability of Microsoft services before release
                </p>
              </li>

              {/* Mathworks */}
              <li className="mb-5 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-4 sm:ring-8 ring-white dark:ring-indigo-500 dark:bg-blue-900">
                  <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </span>
                <h3
                  className="mb-2 ml-2 text-base font-bold text-gray-900 md:mb-1 md:font-semibold sm:text-lg dark:text-white">
                    Mathworks Japan
                </h3>
                <time
                  className="block mb-2 text-xs font-normal leading-none text-gray-400 sm:text-sm dark:text-gray-500">
                    2013 - 2014
                </time>
                <p
                  className="mb-4 text-sm font-normal text-gray-500 sm:text-base dark:text-gray-300">
                    MATLAB install support for international software users in English &#38; Japanese.
                </p>
              </li>
            </ol>
          </motion.div>
        </div>


        <div className="">
          {/* Skills */}
          <div className="lg:w-[500px] sm:m-5 mb-5 ml-2 mr-2 lg:m-5">
            <h2 className="text-lg font-bold border rounded-md shadow-sm shadow-indigo-500/50 sm:text-xl">
              Skills
            </h2>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="pt-3 pb-3 mt-3 space-y-3 border rounded-lg shadow-2xl md:mt-5 shadow-indigo-500/50 lg:mt-3">
              <div>
                <h3 className="text-base font-bold sm:text-lg">Coding Languages</h3>
                <p
                  className="m-1 text-sm text-gray-500 sm:text-base dark:text-gray-300">
                    JavaScript/TypeScript, HTML/CSS
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold sm:text-lg">Frameworks/Systems</h3>
                <p
                  className="m-1 ml-2 mr-2 text-sm text-gray-500 sm:mr-16 sm:ml-16 lg:mr-5 lg:ml-5 sm:text-base dark:text-gray-300">
                    ReactJS, NextJS, React Native, TailwindCSS, Styled Components, Git, GitHub, Node, GraphQL, Sass
                </p>
              </div>

              <div>
                <h3
                  className="text-base font-bold sm:text-lg">
                    Tools/Softwares
                </h3>
                <p
                  className="m-1 text-sm text-gray-500 sm:text-base dark:text-gray-300">
                    Figma, Adobe XD, Photoshop,
                    <br className="md:hidden"/>
                    Illustrator, Premier Pro
                </p>
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <div className="mt-2 mb-5 ml-2 mr-2 flex flex-col lg:w-[500px] sm:m-5 sm:mt-8 lg:m-5">
            <h3
              className="text-lg font-bold border rounded-md shadow-sm shadow-indigo-500/50 sm:text-xl">
                Education
            </h3>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="pt-3 pb-3 mt-3 space-y-3 border rounded-lg shadow-2xl lg:mt-3 md:mt-5 shadow-indigo-500/50">
              <div>
                <p
                  className="text-base font-bold sm:text-lg">
                    Shirayuri University in Tokyo
                </p>
                <span
                  className="text-xs text-gray-400 sm:text-sm">
                    2006-2011
                </span>
                <p
                  className="m-1 text-sm text-gray-500 sm:text-base dark:text-gray-300">
                    Bachelor of Arts
                    <br className="sm:hidden" />
                    - English Literature
                </p>
              </div>
              <div>
                <p
                  className="text-base font-bold sm:text-lg">
                    Internatinal Language
                    <br className="sm:hidden" />
                    Academy of Canada
                </p>
                <span
                  className="text-xs text-gray-400 sm:text-sm">
                    2007-2008
                </span>
                <p
                  className="m-1 text-sm text-gray-500 sm:text-base dark:text-gray-300">
                    Foreign Education
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
