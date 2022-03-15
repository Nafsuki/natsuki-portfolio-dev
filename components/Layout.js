import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Test from "./Test"

export default function Layout({title = 'Natsuki Yamaguchi | Frontend Developer', children}) {
  return (
    <div className="text-center bg-gradient-to-r from-[#BFD3F8] to-[#E5D8E9] w-screen h-screen flex flex-col overflow-x-hidden justify-between items-center">
      <Head>
        <title>{title}</title>
      </Head>

      {/* <Navbar /> */}
      <Test />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
