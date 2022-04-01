import { projectsData } from '../data'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../styles/animations'
import { FaLink, FaGithub } from 'react-icons/fa'

export default function ProjectCards() {
  return (
    <div>
      {/* <div className='cursor-pointer shadow-2xl shadow-indigo-500/50 absolute top-[100px] -left-[90px] bg-blue-400 hover:bg-blue-500 transition-colors w-[90px] h-[50px] rounded-l-xl flex justify-center items-center'>
        <span className='text-lg font-bold text-white'>ALL</span>
      </div> */}
      {/* <div className='cursor-pointer shadow-2xl text-indigo-900 hover:text-white shadow-indigo-500/50 absolute top-[100px] -left-[90px] border border-r-0 hover:bg-blue-500  transition-colors w-[90px] h-[50px] rounded-l-xl flex justify-center items-center'>
        <span className='text-lg font-bold '>ALL</span>
      </div>
      <div className='cursor-pointer shadow-2xl shadow-indigo-500/50 absolute top-[160px] -left-[90px] border border-r-0 hover:bg-orange-400 transition-colors w-[90px] h-[50px] rounded-l-xl flex justify-center items-center'>
        <span className='text-lg font-bold text-white'>NextJS</span>
      </div>
      <div className='cursor-pointer shadow-2xl shadow-indigo-500/50 absolute top-[220px] -left-[90px] border border-r-0 hover:bg-orange-400 transition-colors w-[90px] h-[50px] rounded-l-xl flex justify-center items-center'>
        <span className='text-lg font-bold text-white'>ReactJS</span>
      </div>
      <div className='cursor-pointer shadow-2xl shadow-indigo-500/50 absolute top-[280px] -left-[90px] border border-r-0 hover:bg-orange-400 transition-colors w-[90px] h-[50px] rounded-l-xl flex justify-center items-center'>
        <span className='text-lg font-bold text-white'>JS</span>
      </div> */}



      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="relative shadow-2xl shadow-indigo-500/50 border-[#F6AFBE] dark:border-white border-2 border-dashed overflow-y-scroll mt-5 mb-5 w-[260px] xs:w-[350px] sm:w-[630px] md:w-[740px] lg:w-[1000px] h-[600px] md:h-[700px] rounded-xl overflow-hidden flex flex-col items-center">
        <div className='w-full bg-transparent border-b-2 border-dashed dark:bg-black border-[#F6AFBE] dark:border-white'>
          <h1 className="m-3 text-xl font-bold text-gray-800 dark:text-white md:text-3xl">Recent Projects</h1>
        </div>




        {/* <div className='grid grid-cols-12 my-8'>
        {showDetails && (
          <div className='absolute z-10 self-center w-full bg-white cursor-default'>
            <h1>{projectsData[0].name}</h1>
            <button
            className='transition-colors bg-pink-300 rounded cursor-pointer hover:text-blue-500'
            onClick={() => setShowDetails(false)}
          >
            <MdClose size={22} />
          </button>
          </div>
        )} */}
          <div className='grid grid-cols-12 my-8'>
          {projectsData.map((data, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="col-span-12 m-4 overflow-hidden bg-transparent rounded-md shadow-2xl dark:bg-black shadow-indigo-500/50 sm:col-span-6 lg:col-span-4"
            >
              <div className='overflow-hidden'>
              {/* hover:scale-125 */}
                <div className='flex items-center justify-center overflow-hidden transition-transform'>
                  <Image
                    src={data.image_path}
                    alt={data.name}
                    width={1440}
                    height={970}
                  />
                </div>
              </div>
              <div className='flex flex-col items-center justify-center py-2 space-y-1 md:flex-row'>
                <div className='flex items-center justify-center'>
                  <a
                    className='text-indigo-900 transition-colors cursor-pointer dark:text-white dark:hover:text-pink-700 hover:text-indigo-400'
                    href={data.github_url}
                    rel='noreferrer'
                    target='_blank'>
                    <FaGithub size={20}/>
                  </a>
                  {data.deployed_url &&
                  <a
                    className='ml-2 text-indigo-900 transition-colors cursor-pointer dark:text-white dark:hover:text-pink-700 hover:text-indigo-400'
                    href={data.deployed_url}
                    rel='noreferrer'
                    target='_blank'>
                    <FaLink size={20}/>
                  </a>}

                </div>
                <h3 className='my-2 text-sm text-indigo-900 xs:text-base xs:m-3 md:font-semibold dark:text-white dark:hover:text-pink-700'>{data.name}</h3>
              </div>
            </motion.div>
          ))}



          {/* <motion.div
            variants={staggerItem}
            classNameName="col-span-12 sm:col-span-6 lg:col-span-4"
            onClick={() => setShowDetails(true)}
          >
            <div className="m-4 overflow-hidden rounded-md shadow-2xl cursor-pointer shadow-indigo-500/50">
              <div className='overflow-hidden'>
                <div className='flex items-center justify-center overflow-hidden transition-transform cursor-pointer hover:scale-125'>
                  <Image
                    src={galleryWebsite}
                    alt='Image of Gallery Website'
                    width={1440}
                    height={970}
                  />
                </div>
              </div>
              <div>
                <h1 className='m-2 text-sm xs:text-base xs:m-3'>Mapbox Art Gallery Website</h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="m-4 overflow-hidden rounded-md shadow-2xl cursor-pointer shadow-indigo-500/50">
              <div className='overflow-hidden'>
                <div className='flex items-center justify-center overflow-hidden transition-transform cursor-pointer hover:scale-125'>
                  <Image
                    src={meetLandingPage}
                    alt='Image of Meet Landing Page'
                    width={1440}
                    height={970}
                  />
                </div>
              </div>
              <h1 className='m-2 text-sm xs:text-base xs:m-3'>Meet Landing Page</h1>
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="m-4 overflow-hidden rounded-md shadow-2xl cursor-pointer shadow-indigo-500/50">
              <div className='overflow-hidden'>
                <div className='flex items-center justify-center overflow-hidden transition-transform cursor-pointer hover:scale-125'>
                  <Image
                    src={doraemonMemoryGame}
                    alt='Image of JS Doraemon Memory Game'
                    width={1440}
                    height={970}
                  />
                </div>
              </div>
              <h1 className='m-2 text-sm xs:text-base xs:m-3'>JS Doraemon Memory Game</h1>
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="m-4 overflow-hidden rounded-md shadow-2xl cursor-pointer shadow-indigo-500/50">
              <div className='overflow-hidden'>
                <div className='flex items-center justify-center overflow-hidden transition-transform cursor-pointer hover:scale-125'>
                  <Image
                    src={loopLandingPage }
                    alt='Image of React Loop Landing Page'
                    width={1440}
                    height={970}
                  />
                </div>
              </div>
              <h1 className='m-2 text-sm xs:text-base xs:m-3'>React Loop Landing Page</h1>
            </div>
          </motion.div> */}
        </div>
      </motion.div>
    </div>
  )
}
