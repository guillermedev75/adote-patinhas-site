'use client'
import Carrossel from "@/components/carrossel/carrossel";
import HeaderBar from "@/components/headerBar/headerBar";
import ShowPets from "@/components/showPets/showPets";
import VejaAbaixo from "@/components/vejaAbaixo/vejaAbaixo";
import { useRef } from "react";

export default function Home() {

  const adocaoRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <HeaderBar/>
      <Carrossel scrollRef={adocaoRef}/>
      <h1 ref={adocaoRef} className="text-center italic text-2xl mt-5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">Conheça nossa patinhas</h1>
      <ShowPets/>
    </>
  );
}
