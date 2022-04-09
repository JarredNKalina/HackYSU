import "./MoistCard.css"
import "../Card.css"
import { MdOutlineWaterDrop } from "react-icons/md"

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

export const MoistCard = ()=>{
    return(
        <div id="moist-card" className="card">
            <p className="percentage">72%</p>
            <MdOutlineWaterDrop className="icon" size={60}/>
        </div>
    )
}