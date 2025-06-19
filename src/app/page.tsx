import Carrossel from "@/components/carrossel/carrossel";
import HeaderBar from "@/components/headerBar/headerBar";
import PetCard from "@/components/petCard/petCard";
import ShowPets from "@/components/showPets/showPets";

export default function Home() {
  return (
    <>
      <HeaderBar/>
      <Carrossel/>
      <h1 className="text-center italic underline text-xl mt-5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">Conheça nossa patinhas</h1>
      <ShowPets/>
    </>
  );
}
