import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import Layout from '../components/Layout';

export default function Home() {
	return (
		<Layout>
			<div className='my-10 bg-transparent w-[260px] xs:w-[350px] sm:w-[550px] md:w-[740px] lg:w-[1000px] h-auto sm:h-[900px] md:h-[650px] flex flex-col md:flex-row'>
				<div className='flex flex-col justify-center'>
					<h1 className='pb-5 text-5xl font-bold text-gray-900 dark:text-white sm:text-7xl md:text-left md:text-[65px] lg:text-[80px]'>
						<span className='text-3xl sm:text-4xl md:text-5xl'>
							Hi, I&#39;m
						</span>
						<br />
						<div className='mt-2'>
							<span className=''>Natsuki</span>
							<br />
							<span className=''>Yamaguchi</span>
						</div>
					</h1>
					<div className='m-2 text-sm md:text-left md:text-lg'>
						<h6>Frontend Developer</h6>
						<h6>Located in Hamburg, Germany</h6>
						{/* SNS Icons */}
						<div className='flex justify-center mt-4 space-x-3 md:justify-start'>
							<Link href='https://www.linkedin.com/in/nafsuki/' passHref>
								<FaLinkedin className='text-4xl text-[#1666C2] dark:text-white cursor-pointer hover:opacity-70 transition-opacity' />
							</Link>
							<Link href='https://github.com/Nafsuki' passHref>
								<FaGithub className='text-4xl transition-opacity cursor-pointer hover:opacity-70' />
							</Link>
						</div>
					</div>
					<Link href='/projects' passHref>
						<button className='dark:bg-indigo-500 dark:hover:bg-indigo-200 dark:hover:text-indigo-900 dark:border-blue-100 text-sm md:text-lg shadow-lg hover:bg-pink-700 hover:text-white transition-colors font-bold bg-pink-50 border-pink-700 border w-[170px] h-[45px] my-5 mx-auto md:mx-0 md:w-[200px] md:h-[50px] md:mt-5 rounded-full'>
							See my projects
						</button>
					</Link>
				</div>
				<div className='relative self-center w-full h-auto mt-5 sm:mt-0 sm:h-full sm:pt-8 lg:h-auto lg:p-0 md:h-auto lg:ml-4'>
					<Image
						src='/Portfolio-with-circles.png'
						alt='Natsuki Avatar'
						// layout='fill'
						// objectFit='contain'
						width={820}
						height={720}
						priority='true'
					/>
				</div>
			</div>
		</Layout>
	);
}
