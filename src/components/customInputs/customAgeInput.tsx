// type propsData = {
//     spanText: string
//     dataText: string
// }
'use client'

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { setRequestMeta } from "next/dist/server/request-meta"
import { parse } from "path"




export const CustomAgeInput = () => {

    const [spanText, setSpanText] = useState('Clique para selecionar a idade')
    const [spanTextColor, setSpanTextColor] = useState("text-gray-500")

    const [showModal, setShowModal] = useState(false)

    const [nearDateCheck, setNearDateCheck] = useState(false)

    const [firstSelect, setFirstSelect] = useState('')
    const [secondSelect, setSecondSelect] = useState('')

    const [firstInput, setFirstInput] = useState('')
    const [secondInput, setSecondInput] = useState('')

    const [validDate, setValidDate] = useState(false)
    const [calculatedDate, setCalculatedDate] = useState('')

    useEffect(() => {
        validateInputs()
    }, [firstSelect, firstInput, secondSelect, secondInput])

    const handleModal = () => {
        showModal === true ? null : setShowModal(true)
    }

    const validateInputs = () => {
        let isValid = false

        if(firstSelect === '') setFirstInput('')
        if(secondSelect === '') setSecondInput('')

        if (firstSelect === 'a' && firstInput != '' && secondInput != '' && parseInt(firstInput) > 0 && parseInt(secondInput) > 0){
            isValid = true
        }
        else if(firstSelect != 'a' && firstInput != '' && parseInt(firstInput) > 0){
            isValid = true
        }
        setValidDate(isValid)
    }

    const calculateDate = () => {
        
        let dateExpression = ''
        let firstText = ''
        let secondText = ''

        dateExpression += firstInput

        if (firstSelect === 'a') {
            firstText = parseInt(firstInput) > 1 ? 'Anos' : 'Ano'
            dateExpression += ` ${firstText}`
        }
        
        if (firstSelect === 'm') {
            firstText = parseInt(firstInput) > 1 ? 'Meses' : 'Mes'
            dateExpression += ` ${firstText}`
        }

        if (firstSelect === 's') {
            firstText = parseInt(firstInput) > 1 ? 'Semanas' : 'Semana'
            dateExpression += ` ${firstText}`
        }

        if (firstSelect === 'd') {
            firstText = parseInt(firstInput) > 1 ? 'Dias' : 'Dia'
            dateExpression += ` ${firstText}`
        }


        if (secondInput != '' && firstSelect === 'a') {

            dateExpression += ` e ${secondInput}`
            secondText = parseInt(secondInput) > 1 ? 'Meses' : 'Mes'
            dateExpression += ` ${secondText}`
        }

        setCalculatedDate(dateExpression)
        setSpanText(dateExpression)
        setSpanTextColor('text-black')

    }

    return (
        <>

            <div
                className="border-1 border-gray-200 rounded-md h-10 px-2 flex justify-between items-center cursor-pointer relative"
                onClick={handleModal}
            >
                <span className={spanTextColor}>{spanText}</span>
                <FontAwesomeIcon icon={faClock} className={spanTextColor} />
                {showModal && (
                    <div className="absolute bg-white w-full shadow-2xl rounded-md p-5 left-0 top-0 border-1 border-gray-200 cursor-default space-y-2 z-10">
                        <h4>Data Aproximada</h4>
                        <div className="flex justify-between space-x-2">
                            <select name="" id="firstSelect"
                                className="w-full border-1 border-gray-200 rounded-md h-9 px-2 flex justify-between items-center cursor-pointer"
                                value={firstSelect}
                                onChange={(e) => {
                                    setFirstSelect(e.target.value)
                                }}
                            >
                                <option value="">Escolha a Idade do animal</option>
                                <option value="a">Anos</option>
                                <option value="m">Meses</option>
                                <option value="s">Semanas</option>
                                <option value="d">Dias</option>
                            </select>
                            {firstSelect != "" && (
                                <input
                                    className="border-1 border-gray-200 rounded-md h-9 px-2 w-1/6 text-center"
                                    value={firstInput}
                                    onChange={(e) => {
                                        let value = e.target.value.replace(/\D/g, '')

                                        if (parseInt(value) > 11 && firstSelect === 'm'){
                                            value = '11'
                                        }
                                        if (parseInt(value) > 30 && firstSelect === 'd'){
                                            value = '30'
                                        }
                                        if (parseInt(value) > 3 && firstSelect === 's'){
                                            value = '3'
                                        }
                                        if (parseInt(value) > 20 && firstSelect === 'a'){
                                            value = '20'
                                        }

                                        setFirstInput(value)
                                        validateInputs()
                                    }}
                                />
                            )}
                        </div>

                        {firstSelect == 'a' && (
                            <div className="flex justify-between space-x-2">
                                <select name="" id="secondSelect"
                                    className="w-full border-1 border-gray-200 rounded-md h-9 px-2 flex justify-between items-center cursor-pointer"
                                    value={secondSelect}
                                    onChange={(e) => {
                                        setSecondSelect(e.target.value)
                                    }}
                                >
                                    <option value="">Escolha a Idade do animal</option>
                                    <option value="m">Meses</option>
                                </select>
                                {secondSelect != "" && (
                                    <input
                                        className="border-1 border-gray-200 rounded-md h-9 px-2 w-1/6 text-center"
                                        value={secondInput}
                                        onChange={(e) => {
                                            let value = e.target.value.replace(/\D/g, '')

                                            if (parseInt(value) > 11){
                                                value = '11'
                                            }

                                            setSecondInput(value)
                                            validateInputs()
                                        }}
                                    />
                                )}
                            </div>
                        )}

                        <FontAwesomeIcon
                            icon={faXmark}
                            className="absolute right-6 top-5 text-gray-500 cursor-pointer"
                            onClick={() => setShowModal(false)}
                        />

                        {

                        }

                        <button
                            disabled={!validDate}
                            onClick={(e) => {
                                e.preventDefault()
                                calculateDate()
                                setShowModal(false)
                            }}
                            className="px-5 h-8 rounded-md text-white font-semibold uppercase transition duration-500 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 hover:cursor-pointer disabled:from-gray-400 disabled:via-gray-400 disabled:to-gray-400 disabled:text-gray-100 disabled:cursor-not-allowed disabled:hover:from-gray-400 disabled:hover:via-gray-400 disabled:hover:to-gray-400"
                        >
                            Ok
                        </button>



                    </div>
                )}


            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-lg z-0" />
            )}

        </>
    )

}

export default CustomAgeInput