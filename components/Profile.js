import Image from "next/image"
import { FaReact } from 'react-icons/fa'
import {SiJavascript, SiTypescript} from 'react-icons/si'
import { motion } from 'framer-motion'
import { fadeInUp } from "../styles/animations"


export default function Profile() {
  return (
    <div
    className="overflow-y-scroll shadow-indigo-500/50 shadow-2xl mt-5 mb-5 w-[260px] xs:w-[350px] sm:w-[630px] md:w-[740px] lg:w-[1000px] h-[600px] md:h-[700px] border-2 border-dashed rounded-lg">
      <div className="flex flex-col items-center justify-around border-b-2 xs:flex-row xs:h-[100px]">
        <h1 className="m-3 text-[35px] md:text-[40px] leading-9 md:leading-[40px] font-bold">Natsuki Yamaguchi</h1>
        <div className="w-[120px] md:w-[80px] h-[120px] md:h-[80px] flex items-center justify-center m-3 overflow-hidden rounded-full">
          <Image src='/images/profile.jpg' alt='avatar' width={100} height={100} />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-[500px] m-5 pl-3">
          <div
          className="mb-1 border rounded-md">
            <h2 className="w-full text-xl font-bold">Job Experience</h2>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="pt-5 pb-3 pl-8 pr-5 mt-5 rounded-lg shadow-2xl shadow-indigo-500/50">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">

              {/* Freelance Frontend Develper */}
              <li className="mb-5 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </span>
              <h3 className="mb-1 ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                Frontend Developer (3yrs +)
              {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span> */}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019 - present</time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Freelance Frontend Developwer <br /> React.js, Next.js</p>
              {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg> Download ZIP</a> */}
              </li>

              {/* Professional Singer */}
              <li className="mb-5 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Professional Singer</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2015 - 2019</time>
              {/* <p className="text-base font-normal text-gray-500 dark:text-gray-400">Performed in various theatres <br/> in Japan &#38; Europe.</p> */}
              </li>

              {/* Micosoft */}
              <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Microsoft Japan</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2014 - 2015</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Test suitability and stability of Microsoft services before release</p>
              </li>

              {/* Mathworks */}
              <li className="mb-5 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Mathworks Japan</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2013 - 2014</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">MATLAB install support for international software users in English &#38; Japanese. </p>
              </li>
            </ol>
          </motion.div>

        </div>

        <div>
          <div className="w-[500px] pl-3 m-5">
            <h2 className="text-xl font-bold border rounded-md">Skills</h2>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="pt-3 pb-3 mt-5 space-y-3 rounded-lg shadow-2xl shadow-indigo-500/50">
              <div>
                <h3 className="font-bold">Coding Languages</h3>
                {/* <div className="w-[100px] flex items-center justify-center p-2 border rounded">
                  <div className="mr-1"><SiJavascript /></div>
                  <span>JavaScript</span>
                </div> */}
                <p className="text-gray-500">JavaScript/TypeScript, HTML/CSS</p>
              </div>
              <div>
                <h3 className="font-bold">Frameworks/Systems</h3>
                <p className="text-gray-500">ReactJS, NextJS, React Native, TailwindCSS, <br/> Styled Components, Git, GitHub, Node, GraphQL, Sass</p>
              </div>

              <div>
                <h3 className="font-bold">Tools/Softwares</h3>
                <p className="text-gray-500">Figma, Adobe XD, Photoshop, Illustrator, Premier Pro</p>
              </div>
            </motion.div>
          </div>
          <div className="mt-8 flex flex-col w-[500px] pl-3 m-5">
            <h3 className="text-xl font-bold border rounded-md">Education</h3>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="pt-3 pb-3 mt-5 space-y-3 rounded-lg shadow-2xl shadow-indigo-500/50">
              <div>
                <p className="font-bold">Shirayuri University in Tokyo</p> <span className="text-sm text-gray-400">2006-2011</span>
                <p className="text-gray-500">Bachelor of Arts - English Literature</p>
              </div>
              <div>
                <p className="font-bold">Internatinal Language Academy of Canada</p> <span className="text-sm text-gray-400">2007-2008</span>
                <p className="text-gray-500">Foereign Education</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg> */}

    </div>
  )
}
