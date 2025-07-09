'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomAgeInput from "../customInputs/customAgeInput"

const schema = z.object({
    nomePet: z.string().min(2, 'Nome muito curto'),
    idadePet: z.number(),
    nomeTutor: z.string().min(2, 'Nome muito curto'),
})

type FieldData = {
    id: number;
    label: string;
    schemaData: keyof FormData;
    inputType: string;
    isPet: boolean;
};

const fields: FieldData[] = [
    {
        id: 0,
        label: 'Nome',
        schemaData: 'nomePet',
        isPet: true,
        inputType: 'text'
    },
    {
        id: 2,
        label: 'Idade',
        schemaData: 'idadePet',
        isPet: true,
        inputType: 'customAge'
    },
    {
        id: 1,
        label: 'Nome do Tutor',
        schemaData: 'nomeTutor',
        isPet: false,
        inputType: 'text'
    },
]

type FormData = z.infer<typeof schema>

export const FormRegisterPet = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: FormData) => {
        console.log('Formulario enviado:', data)
        alert('Enviado com sucesso!')
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full space-y-5">

            <h2 className="text-xl text-center w-full">Informações do Animal</h2>

            {fields.filter((field) => field.isPet).map((field) => {
                if (field.inputType === 'text') {
                    return (
                        <div key={field.id} className="flex flex-col space-y-1">
                            <label>{field.label}</label>
                            <input {...register(field.schemaData)} className="border-1 border-gray-200 rounded-md h-9 px-2 " />
                            {errors.nomePet && <p className="w-full bg-red-400 px-4 h-9 rounded-md text-white text-center flex justify-center items-center font-semibold">{errors.nomePet.message}</p>}
                        </div>
                    )
                }
                if (field.inputType === 'customAge') {
                    return(
                        <CustomAgeInput/>
                    )
                }
            })}

            <h2 className="text-xl text-center w-full">Informações do Tutor</h2>

            {fields.filter((field) => !field.isPet).map((field) => (
                <div key={field.id} className="flex flex-col space-y-1">
                    <label>{field.label}</label>
                    <input {...register(field.schemaData)} className="border-1 border-gray-200 rounded-md h-9 px-2 " />
                    {errors.nomePet && <p className="w-full bg-red-400 px-4 h-9 rounded-md text-white text-center flex justify-center items-center font-semibold">{errors.nomePet.message}</p>}
                </div>
            ))}




            <button
                type="submit"
                className="bg-amber-300 rounded-md h-9 text-white font-semibold uppercase"
            >
                Enviar
            </button>
        </form>

    )

}