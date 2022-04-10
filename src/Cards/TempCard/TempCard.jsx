import "./TempCard.css"
import "../Card.css"
import { BsThermometerSun, BsThermometerHalf, BsThermometerSnow }  from "react-icons/bs"

const WhichIconToRender = (props) => {
    if (props.temp >= 75) {
        return (
            <BsThermometerSun className="icon" size={60} />
        )
        }
    else if (props.temp < 75 && props.temp >= 50) {
        return (
           <BsThermometerHalf className="icon" size={60} />
        )
    }
    else {
       <BsThermometerSnow className="icon"  size={60} />
    }
}

export const TempCard = ({temperature}) => {
    return(
        <div id="temp-card" className="card">
            <p className="percentage">{temperature}°</p>
            <WhichIconToRender temp={temperature}/>
        </div>
    )
}

