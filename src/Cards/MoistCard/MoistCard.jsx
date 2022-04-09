import "./MoistCard.css"
import "../Card.css"
import { MdOutlineWaterDrop } from "react-icons/md"

const WhichCardToRender = (props) => {
    if (props.moist >= 50) {
        return(
            <div id="green-moist-card" className="card">
                <p className="percentage">{props.moist}%</p>
                <MdOutlineWaterDrop className="icon" size={60}/>
            </div>
        )
    }
    else {
        return(
            <div id="red-moist-card" className="card">
                <p className="percentage">{props.moist}%</p>
                <MdOutlineWaterDrop className="icon" size={60}/>
            </div>
        )
    }
}

export const MoistCard = ()=>{
    const moist = 80

    return(
        <WhichCardToRender moist={moist} />
    )
}