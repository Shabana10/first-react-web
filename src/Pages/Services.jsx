import Draft from "../Component/Draft";
import ServeImg from '../images/Services.jpg'
import { useNavigate } from "react-router";

export default function Services(prps) {
    const navigate = useNavigate();
    const routPro = () => {
        navigate('/projects')
    }
    return (
        <div>
            <Draft heading='Services'
            btnName='My Work' imgsrc={ServeImg} 
            onClick={routPro} />
        </div>
    )
}
