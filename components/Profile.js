import Image from "next/image"

export default function Profile() {
  return (
    <div className="flex flex-col items-center border-2 w-[1200px] h-[700px] border-dashed rounded-lg">
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex justify-center items-center">
        <Image src='/images/profile.jpg' alt='avatar' width={100} height={100} />
      </div>
      <h1>Natsuki Yamaguchi</h1>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>

    </div>
  )
}
