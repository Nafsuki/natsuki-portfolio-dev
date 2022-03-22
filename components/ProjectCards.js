import Image from 'next/image'
import galleryWebsite from '../public/images/projects/modern-art-gallery-website.png'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../styles/animations'

export default function ProjectCards() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="shadow-2xl shadow-indigo-500/50 overflow-y-scroll mt-5 mb-5 w-[260px] xs:w-[350px] sm:w-[630px] md:w-[740px] lg:w-[1000px] h-[600px] md:h-[700px] bg-gray-100 text-white rounded-xl overflow-hidden flex flex-col items-center">
      <div className='w-full bg-pink-400'><h1 className="m-3 text-3xl font-bold">Recent Projects</h1></div>
      <div className='grid grid-cols-12'>

        <motion.div
          variants={staggerItem}
          className="col-span-12 sm:col-span-6 md:col-span-4">
          <div className="m-4 overflow-hidden bg-pink-400 rounded-md shadow-2xl cursor-pointer shadow-indigo-500/50">
            <div className='overflow-hidden'>
              <div className='flex items-center justify-center overflow-hidden transition-transform cursor-pointer hover:scale-125'>
                <Image
                  src={galleryWebsite}
                  alt='Picture of Gallery Website'
                />
              </div>
            </div>
            <h1 className='m-2 text-sm xs:text-base xs:m-3'>Modern Art Gallery Website</h1>
          </div>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="col-span-12 sm:col-span-6 md:col-span-4">
          <div className="m-4 overflow-hidden bg-pink-400 rounded-md cursor-pointer">
            <div className='overflow-hidden'>
              <div className='flex items-center justify-center overflow-hidden transition-transform cursor-pointer hover:scale-125'>
                <Image
                  src={galleryWebsite}
                  alt='Picture of Gallery Website'
                />
              </div>
            </div>
            <h1 className='m-2 text-sm xs:text-base xs:m-3'>Modern Art Gallery Website</h1>
          </div>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="col-span-12 sm:col-span-6 md:col-span-4">
          <div className="m-4 overflow-hidden bg-pink-400 rounded-md cursor-pointer">
            <div className='overflow-hidden'>
              <div className='flex items-center justify-center overflow-hidden transition-transform cursor-pointer hover:scale-125'>
                <Image
                  src={galleryWebsite}
                  alt='Picture of Gallery Website'
                />
              </div>
            </div>
            <h1 className='m-2 text-sm xs:text-base xs:m-3'>Modern Art Gallery Website</h1>
          </div>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="col-span-12 sm:col-span-6 md:col-span-4">
          <div className="m-4 overflow-hidden bg-pink-400 rounded-md cursor-pointer">
            <div className='overflow-hidden'>
              <div className='flex items-center justify-center overflow-hidden transition-transform cursor-pointer hover:scale-125'>
                <Image
                  src={galleryWebsite}
                  alt='Picture of Gallery Website'
                />
              </div>
            </div>
            <h1 className='m-2 text-sm xs:text-base xs:m-3'>Modern Art Gallery Website</h1>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
