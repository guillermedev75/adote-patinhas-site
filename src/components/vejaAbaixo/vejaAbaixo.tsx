'use client'
import React from "react"

type VejaAbaixoProps = {
  scrollRef: React.RefObject<HTMLDivElement | null>
  title: string

};


const VejaAbaixo = ({ scrollRef, title }: VejaAbaixoProps) => {

    const handleClick = () => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className={'z-30 absolute -bottom-0 w-full flex items-center justify-center'}>
            <button
                onClick={handleClick}
                className="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 w-fit px-5 py-1 rounded-b-md cursor-pointer text-white transition duration-500">
                {title}
            </button>
        </div>
    )

}

export default VejaAbaixo