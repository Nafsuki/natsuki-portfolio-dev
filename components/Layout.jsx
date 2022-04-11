import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { motion } from 'framer-motion'
import { fadeIn } from "../styles/animations"

export default function Layout({title = 'Natsuki Yamaguchi | Frontend Developer', children}) {
  return (
    <div className="min-h-screen text-center bg-gradient-to-r from-[#ffffff] dark:from-indigo-900 dark:to-blue-900 to-[#f5ecf8] w-screen h-screen flex flex-col overflow-x-hidden justify-between items-center">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        >{children}</motion.main>
      <Footer />
    </div>
  )
}
