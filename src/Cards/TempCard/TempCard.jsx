import "./TempCard.css"
import { thermometerIcon } from "../../icons/Thermometer"
export const TempCard = ()=>{
    return(
        <div className="temp-card">
            <p className="percentage">75°</p>
            <thermometerIcon/>
        </div>
    )
}