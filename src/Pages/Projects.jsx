import Draft from "../Component/Draft";
import ProImg from '../images/Pro.jpg';
import { useNavigate } from "react-router";

export default function Services(prps) {
    const navigate = useNavigate();
    const routServe = () => {
        navigate('/services')
    }
    return (
        <div>
            <Draft heading='Projects'
            btnName='My Services' imgsrc={ProImg} 
            onClick={routServe} />
        </div>
    )
}