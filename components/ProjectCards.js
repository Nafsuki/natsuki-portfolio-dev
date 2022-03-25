import Image from 'next/image'
import galleryWebsite from '../public/images/projects/mapbox-art-gallery-website.png'
import meetLandingPage from '../public/images/projects/meet-landing-page.png'
import doraemonMemoryGame from '../public/images/projects/doraemon-memory-game.png'
import loopLandingPage from '../public/images/projects/loopstudios-landing-page.png'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../styles/animations'

export default function ProjectCards() {
  return (
    <div className='relative'>
      {/* <div className='cursor-pointer shadow-2xl shadow-indigo-500/50 absolute top-[100px] -left-[90px] bg-blue-400 hover:bg-blue-500 transition-colors w-[90px] h-[50px] rounded-l-xl flex justify-center items-center'>
        <span className='text-lg font-bold text-white'>ALL</span>
      </div> */}
      <div className='cursor-pointer shadow-2xl text-indigo-900 hover:text-white shadow-indigo-500/50 absolute top-[100px] -left-[90px] border border-r-0 hover:bg-blue-500  transition-colors w-[90px] h-[50px] rounded-l-xl flex justify-center items-center'>
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
      </div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="shadow-2xl shadow-indigo-500/50 overflow-y-scroll mt-5 mb-5 w-[260px] xs:w-[350px] sm:w-[630px] md:w-[740px] lg:w-[1000px] h-[600px] md:h-[700px] bg-gray-100 text-white rounded-xl overflow-hidden flex flex-col items-center">
        <div className='w-full bg-pink-400'>
          <h1 className="m-3 text-xl font-bold md:text-3xl">Recent Projects</h1></div>
        <div className='grid grid-cols-12 mt-5 mb-5'>
          <motion.div
            variants={staggerItem}
            className="col-span-12 sm:col-span-6 md:col-span-4">
            <div className="m-4 overflow-hidden bg-pink-400 rounded-md shadow-2xl cursor-pointer shadow-indigo-500/50">
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
                <h1 className='w-full pt-2 pb-2 text-sm xs:text-base'>Mapbox Art Gallery Website</h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="col-span-12 sm:col-span-6 md:col-span-4">
            <div className="m-4 overflow-hidden bg-pink-400 rounded-md shadow-2xl cursor-pointer shadow-indigo-500/50">
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
            className="col-span-12 sm:col-span-6 md:col-span-4">
            <div className="m-4 overflow-hidden bg-pink-400 rounded-md shadow-2xl cursor-pointer shadow-indigo-500/50">
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
            className="col-span-12 sm:col-span-6 md:col-span-4">
            <div className="m-4 overflow-hidden bg-pink-400 rounded-md shadow-2xl cursor-pointer shadow-indigo-500/50">
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
