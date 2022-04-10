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

const WhichCardToRender = (props) => {
    if (props.lum >= 50) {
        return(
            <div id="green-lumin-card" className="card">
                <p className="percentage">{props.lum}%</p>
                <WhichIconToRender lum = {props.lum} />
            </div>
        )
    }
    else {
        return(
            <div id="red-lumin-card" className="card">
                <p className="percentage">{props.lum}%</p>
                <WhichIconToRender lum = {props.lum} />
            </div>
        )
    }
}


export const LuminCard = ({luminosity})=>{


    return(
        <WhichCardToRender lum={luminosity}/>
    )
}