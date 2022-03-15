export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className="bg-black text-white w-screen h-[70px] p-3 flex flex-col items-center justify-center">
      <h6 className="text-sm">Coded by Natsuki.Y using Next.js &#38; Tailwind.css</h6>
      <span className="mt-2 text-gray-400 text-[10px]">&copy; {getCurrentYear()} Nafsuki</span>
    </div>
  )
}
