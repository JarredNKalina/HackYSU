import "./HumidCard.css"
import { AiOutlineCloud } from 'react-icons/ai'
import "../Card.css"

export const HumidCard = ({humidity})=>{
    return(
        <div id='humid-card' className="card">

            <p className="percentage">{humidity}%</p>
            <AiOutlineCloud className="icon" size={60} />
        </div>
    )
}