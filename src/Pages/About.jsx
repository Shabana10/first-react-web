import Draft from "../Component/Draft";
import AboutImg from '../images/About.jpg';
import { useNavigate } from "react-router"

export default function About() {
    const navigate = useNavigate();
    const routAbout = () => {
        navigate("/projects")
    }
    return (
           <Draft heading="About us" intro="Know all about us" 
           imgsrc={AboutImg} onClick={routAbout} btnName='My Work' />
        
    )
}
