import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"


const Timer = () => {

    const [time,setTime] = useState(0)
    console.log(time);


useEffect(() => {
   return () => {
       onStop()
   }
},[])

    const ref = useRef(null)

    const onStart = () => {
        if(ref.current !== null) return
       
      ref.current =   setInterval(() => {
            console.log("aa");

         setTime((preVal) => {
             return preVal + 1
         })
            
        }, 1000);
    }


    const onStop = () => {
        clearInterval(ref.current)
        ref.current = null
    }

    const onReset = () => {
        setTime(0)
        clearInterval(ref.current)
    }
    return (
        <>
     <h1>Timer</h1>
        <h1>{time}</h1>
        <button onClick={onStart}>Start</button>
        <button onClick={onStop}>Stop</button>
        <button onClick={onReset}>Reset</button>

        </>
    )
}

export default Timer