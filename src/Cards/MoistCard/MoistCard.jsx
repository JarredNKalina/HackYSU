import "./MoistCard.css"
import {waterIcon} from "../../icons/Water"
export const MoistCard = ()=>{
    return(
        <div className="moist-card">
            <p className="percentage">72%</p>
            <waterIcon/>
        </div>
    )
}