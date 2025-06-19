import Carrossel from "@/components/carrossel/carrossel";
import HeaderBar from "@/components/headerBar/headerBar";
import PetCard from "@/components/petCard/petCard";
import ShowPets from "@/components/showPets/showPets";

export default function Home() {
  return (
    <>
      <HeaderBar/>
      <Carrossel/>
      <ShowPets/>
    </>
  );
}
