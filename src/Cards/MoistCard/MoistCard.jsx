import "./MoistCard.css"
import "../Card.css"
import { MdOutlineWaterDrop } from "react-icons/md"
export const MoistCard = ()=>{
    return(
        <div id="moist-card" className="card">
            <p className="percentage">72%</p>
            <MdOutlineWaterDrop className="icon" size={60}/>
        </div>
    )
}