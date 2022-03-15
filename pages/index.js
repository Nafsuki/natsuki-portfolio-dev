import Layout from "../components/Layout";
// import Main from "../components/Main";
// import Profile from "../components/Profile";
// import Test from "../components/Test";


export default function Home() {
  return (
    <Layout>
      <div className="border bg-pink-200 sm:bg-blue-300 md:bg-pink-200 w-[260px] xs:w-[350px] sm:w-[630px] md:w-[740px] lg:w-[1000px] h-[600px] md:h-[700px] flex flex-col items-center md:items-start">
        <h1 className="pb-5 text-5xl font-bold sm:text-7xl md:text-left md:text-8xl">
          <span className="text-3xl sm:text-4xl md:text-7xl">Hi, I&#39;m</span><br/>
          <div className="mt-2">
            <span className="">Natsuki</span><br/>
            <span className="">Yamaguchi</span>
          </div>
        </h1>
        <div className="m-2 text-sm md:text-left md:text-lg">
          <h6>Frontend Develper</h6>
          <h6>Located in Hamburg, Germany</h6>
        </div>
        <button
        onClick={() => console.log('clicked')}
        className="text-sm md:text-lg cursor-pointer shadow-lg hover:bg-blue-500 hover:text-white transition font-bold bg-white w-[170px] h-[45px] m-5 md:w-[200px] md:h-[50px] md:mt-5 rounded-full"
        >
          See my projects
        </button>
      </div>
      {/* <Profile /> */}
      {/* <Test /> */}
      {/* <Main /> */}
    </Layout>
  )
}
