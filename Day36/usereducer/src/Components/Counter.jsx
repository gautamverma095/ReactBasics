import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import { decrementAction, incrementAction, incrementByValue, resetAction } from './Action'
import { reducer } from './Reducer'



const Counter = () => {


    const [state, dispatch] = useReducer(reducer, 0)
    const [val, setVal] = useState(0)

    const handleAdd = (e) => {
        setVal(Number(e.target.value))
    }

    return (
        <div>

            <h1>count:{state}</h1>
            <input type="number" placeholder='enter value' onChange={handleAdd} value={val} />
            <button onClick={() => dispatch(incrementAction)}>Add</button>
            <button onClick={() => dispatch(decrementAction)}>Sub</button>
            <button onClick={() => dispatch(resetAction)}>RESET</button>
            <button onClick={() => {


                dispatch(incrementByValue(val))


            }}>Add Value</button>


        </div>
    )
}

export default Counter