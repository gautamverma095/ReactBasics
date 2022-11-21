import { useState } from "react"

const Myaccordion = (props) => {

    const [show,setShow] = useState(false)
    return (
        <>
           <div className="main-heading">
           <p onClick={()=> {
            setShow(!show)
           }} >{show ? "-" : "+"}    </p>
           <h3>{props.question}</h3>

           </div>
           {
               show ?  <p className="answers">{props.ans}</p> :<p></p>
           }
          
        </>
    )

}

export default Myaccordion