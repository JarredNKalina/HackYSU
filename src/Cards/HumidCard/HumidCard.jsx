import "./HumidCard.css"
import { AiOutlineCloud } from 'react-icons/ai'
import "../Card.css"
export const HumidCard = ()=>{
    return(
        <div id='humid-card' className="card">

            <p className="percentage">72%</p>
            <AiOutlineCloud className="icon" size={60} />
        </div>
    )
}