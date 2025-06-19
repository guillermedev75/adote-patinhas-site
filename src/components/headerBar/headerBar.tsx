import Image from "next/image"
import Link from "next/link"

const HeaderBar = () => {

   return (
      <>
         <div className="flex items-center justify-between max-h-18 w-full bg-white shadow-2xl z-20 fixed pr-5 sm:pr-8">
            <div className="w-32 sm:w-50">

               <Image
                  src="/logo.png"
                  alt="logo"
                  width={500}
                  height={500}
               />
            </div>
            <nav>
               <ul className="flex space-x-3">
                  <li>
                     <Link href={"/"} className="hover:shadow-2xs">
                        Inicio
                     </Link>
                  </li>
                  <li>
                     <Link href={"/sobre"} className="hover:shadow-2xs">
                        Sobre Nós
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </>
   )

}

export default HeaderBar