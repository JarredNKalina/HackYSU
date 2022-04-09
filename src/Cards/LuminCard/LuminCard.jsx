import "./LuminCard.css"
import "../Card.css"
import { BsSun, BsCloudSun } from "react-icons/bs"

const WhichIconToRender = (props) => {
    if (props.lum >= 50) {
        return (
            <BsSun className="icon" size={60} />
        );
        }
    else {
        return(
            <BsCloudSun className="icon"  size={60} />
        );
    }
}

export const LuminCard = ()=>{

    const lum = 45;

    return(
        <div id = "lumin-card" className="card">
            <p className="percentage">{lum}%</p>
            <WhichIconToRender lum={lum} />
        </div>
    )
}