import Link from 'next/link'
import Layout from "../components/Layout";
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div
        className="mt-5 mb-5 bg-transparent xs:bg-transparent sm:bg-transparent md:bg-transparent w-[260px] xs:w-[350px] sm:w-[550px] md:w-[740px] lg:w-[1000px] h-[600px] sm:h-[900px] md:h-[650px] flex flex-col md:flex-row">
        <div className='flex flex-col justify-center'>
          <h1 className="pb-5 text-5xl font-bold text-gray-900 dark:text-white sm:text-7xl md:text-left md:text-[65px] lg:text-[80px]">
            <span className="text-3xl sm:text-4xl md:text-5xl">Hi, I&#39;m</span><br/>
            <div className="mt-2">
              <span className="">Natsuki</span><br/>
              <span className="">Yamaguchi</span>
            </div>
          </h1>
          <div className="m-2 text-sm md:text-left md:text-lg">
            <h6>Frontend Develper</h6>
            <h6>Located in Hamburg, Germany</h6>
          </div>
          <Link href='/projects' passHref>
            <button
              className="cursor-pointer dark:bg-indigo-500 dark:hover:bg-indigo-200 dark:hover:text-indigo-900 dark:border-blue-100 text-sm md:text-lg shadow-lg hover:bg-blue-500 hover:text-white transition-colors font-bold bg-white w-[170px] h-[45px] my-5 mx-auto md:mx-0 md:w-[200px] md:h-[50px] md:mt-5 rounded-full"
              >
              See my projects
            </button>
          </Link>
        </div>
        <div className='relative self-center w-full h-auto sm:h-full sm:pt-8 lg:h-auto lg:p-0 md:h-auto'>
          <Image
            className=''
            src='/Avatar.png'
            alt='Natsuki Avatar'
            // layout='fill'
            // objectFit='contain'
            width={916}
            height={714}
          />
        </div>


      </div>
    </Layout>
  )
}
