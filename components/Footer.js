export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className="bg-[#F6AFBE] dark:bg-black text-indigo-900 dark:text-white w-screen h-[80px] p-3 flex flex-col items-center justify-center">
      <h6 className="text-xs xs:text-sm">Coded by Natsuki.Y using Next.js &#38; Tailwind.css</h6>
      <span className="mt-2 xs:text-[12px] text-white dark:text-gray-400 text-[10px]">&copy; {getCurrentYear()} Nafsuki</span>
    </div>
  )
}
