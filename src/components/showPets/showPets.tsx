import PetCard from "../petCard/petCard"

const pets = ['Túlio', 'Luna', 'Thor', 'Bidu', 'Mel'];

const ShowPets = () => {
    return(
        <div id="showPets" className="xl:max-w-[1224px]  lg:max-w-[928px] md:max-w-[632px] sm:max-w-[632px] max-w-[336px] h-full flex flex-wrap p-5 mx-auto">
            {pets.map((nome,index) =>(
                <PetCard key={index} name={nome}/>
            ))}
        </div>
    )
}

export default ShowPets