import ContImg from '../images/Contact.jpg'
import { useNavigate } from "react-router"
import Draft from '../Component/Draft';

export default function Contact() {
    const navigate = useNavigate();
    const routAbout = () => {
        navigate("/projects")
    }
    return (
           <Draft heading="Contact us" intro="Get connected" 
           imgsrc={ContImg} onClick={routAbout} btnName='My Work' />
        
    )
}