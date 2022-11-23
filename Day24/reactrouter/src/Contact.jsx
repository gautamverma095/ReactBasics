
import {useNavigate} from "react-router-dom"

const Contact  = () => {
    const navigate = useNavigate()

    const goTo = () => {
        navigate("/about")
        
    }
    return (
        <>
  
            <h1>
                Contact page
            </h1>
            <button onClick={goTo}>go to about page</button>
        </>
    )
} 
export default Contact