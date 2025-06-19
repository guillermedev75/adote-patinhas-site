import Image from "next/image"
import Link from "next/link"

type Props = {
    name: string
}

const PetCard = ({name}: Props) => {

    return (
        <div className="h-70 w-70 relative shadow-xl m-2">
            <Image
                src="/card.png"
                alt="card"
                width={350}
                height={350}
                className='rounded-2xl'
            />
            <button className="text-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:from-yellow-400 hover:via-green-400 hover:to-blue-400 px-6 py-2 rounded-full text-white absolute bottom-5 right-5 transition duration-300 hover:cursor-pointer z-10">
                <Link href={'/'} className="">
                Adote
                </Link>
            </button>
            <div className="text-xl text-center bg-white px-6 py-2 w-45 rounded-full absolute bottom-5 right-20 transition duration-500 hover:cursor-pointer">
                {name}
            </div>
        </div>
    )

}

export default PetCard