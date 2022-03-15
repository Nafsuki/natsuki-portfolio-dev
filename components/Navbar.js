import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="h-[100px] w-screen bg-black text-white">
      <ul>
        <li><Link href='/'><a>Home</a></Link></li>
      </ul>
    </nav>
  )
}
