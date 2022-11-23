
import {useNavigate} from "react-router-dom"


const About  = () => {
    const navigate = useNavigate()

    const goTo = () => {
        navigate("/contact")
        
    }
    return (
        <>
 
            <h1>
                About page
            </h1>
            <button onClick={goTo}>go to contact page</button>
        </>
    )
} 
export default About