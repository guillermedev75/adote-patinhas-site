'use client'
import HeaderBar from "@/components/headerBar/headerBar";

export default function Home() {

  return (
    <>
      <HeaderBar/>
      <h1 className="pt-30 text-center text-2xl">
        Cadastre um Pet para adoção
      </h1>

      <section className="bg-white shadow-xl xl:max-w-[1224px]  lg:max-w-[928px] md:max-w-[632px] sm:max-w-[632px] max-w-[400px] h-full flex flex-wrap p-7 mx-auto z-30 rounded-md">
        <h2 className="text-md text-center w-full">Informações Basicas</h2>

      </section>
    </>
  );
}
