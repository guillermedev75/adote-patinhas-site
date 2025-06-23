import { Rotas } from "@/data/rotas"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const HeaderBar = () => {

   const [menuOpen, setMenuOpen] = useState(false)

   return (
      <>
         <div className="flex items-center justify-between max-h-18 w-full bg-white shadow-xl z-20 fixed pr-5 sm:pr-8">
            <div className="w-32 sm:w-50">

               <Image
                  src="/logo.png"
                  alt="logo"
                  width={500}
                  height={500}
               />
            </div>
            <nav className="hidden lg:flex">
               <ul className="flex space-x-3">
                  {Rotas.map((pagina) => (
                     <li key={pagina.id}>
                        <Link href={pagina.href} className="hover:shadow-2xs">
                           {pagina.label}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>

            <button
               onClick={() => setMenuOpen(!menuOpen)}
               className="lg:hidden text-gray-700 focus:outline-none text-center text-md font-bold w-12 cursor-pointer"
            >
               {menuOpen ? <span>X</span> : <span>Menu</span>}
            </button>

            {menuOpen && (
               <div className="lg:hidden w-full absolute bg-white flex flex-col mt-40 p-5 z-10 items-center text-xl">
                  {Rotas.map((pagina) => (
                     <Link key={pagina.id} href={pagina.href} onClick={() => setMenuOpen(false)}>{pagina.label}</Link>
                  ))}
               </div>
            )}
         </div>
      </>
   )

}

export default HeaderBar