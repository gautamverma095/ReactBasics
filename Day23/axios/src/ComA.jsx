import React, { useEffect, useState } from "react";
import axios from "axios"


const ComA = () => {

    const [setNum,setSelNum] = useState(1)
    const [name,setName] = useState()
    const [move,setMove] = useState()


    useEffect(() => {
        pokData()
    })

    const pokData = async () => {

        const res = await axios.get( `https://pokeapi.co/api/v2/pokemon/${setNum}`)
        setName(res.data.name)
        setMove(res.data.moves.length)

    }
    return (
        <>
        <h1>You choose {setNum} value </h1>
        <h1>Name is {name} </h1>
        <h1>Move  is {move} </h1>
        <select value={setNum} onChange = {(event) => {
            const val = event.target.value
            setSelNum(val)

        }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 </option>
        </select>

        </>
    )
}

export default ComA