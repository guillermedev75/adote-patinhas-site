// type propsData = {
//     spanText: string
//     dataText: string
// }

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"




export const CustomAgeInput = () => {

    const [spanText, setSpanText] = useState('Clique para selecionar a idade')
    const [spanTextColor, setSpanTextColor] = useState("text-gray-500")

    const [showModal, setShowModal] = useState(false)

    const [nearDateCheck, setNearDateCheck] = useState(false)

    const [firstSelect, setFirstSelect] = useState('')
    const [secondSelect, setSecondSelect] = useState('')

    const handleModal = () => {
        showModal === true ? null : setShowModal(true)
        // alert(showModal)
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
                    <div className="absolute bg-white w-full shadow-2xl rounded-md p-5 left-0 top-0 border-1 border-gray-200 cursor-default space-y-2">
                        <h4>Data Aproximada</h4>
                        <div className="flex justify-between space-x-2">
                            <select name="" id="firstSelect"
                                className="w-full border-1 border-gray-200 rounded-md h-9 px-2 flex justify-between items-center cursor-pointer"
                                value={firstSelect}
                                onChange={(e) => setFirstSelect(e.target.value)}
                            >
                                <option value="">Escolha a Idade do animal</option>
                                <option value="a">Anos</option>
                                <option value="m">Meses</option>
                                <option value="s">Semanas</option>
                                <option value="d">Dias</option>
                            </select>
                            {firstSelect != "" && (
                                <input className="border-1 border-gray-200 rounded-md h-9 px-2 w-1/6 text-center" />
                            )}
                        </div>

                        {firstSelect == 'a' && (
                            <div className="flex justify-between space-x-2">
                                <select name="" id="secondSelect"
                                    className="w-full border-1 border-gray-200 rounded-md h-9 px-2 flex justify-between items-center cursor-pointer"
                                    value={secondSelect}
                                    onChange={(e) => setSecondSelect(e.target.value)}
                                >
                                    <option value="">Escolha a Idade do animal</option>
                                    <option value="m">Meses</option>
                                </select>
                                {secondSelect != "" && (
                                    <input className="border-1 border-gray-200 rounded-md h-9 px-2 w-1/6 text-center" />
                                )}
                            </div>
                        )}

                        <FontAwesomeIcon
                            icon={faXmark}
                            className="absolute right-6 top-5 text-gray-500 cursor-pointer"
                            onClick={() => setShowModal(false)}
                        />
                        <button onClick={(e) => {e.preventDefault()}} className="px-5 h-8 rounded-md text-white uppercase hover:cursor-pointer transition duration-500 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:from-pink-400 hover:via-purple-400 hover:to-blue-400">Ok</button>
                    </div>
                )}


            </div>

        </>
    )

}

export default CustomAgeInput