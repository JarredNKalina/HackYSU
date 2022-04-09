import "./HumidCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
export const HumidCard = ()=>{
    return(
        <div className="humid-card">
            
            <p className="percentage">72%</p>
            <FontAwesomeIcon icon={faCloud}/>
            <cloudIcon/>
        </div>
    )
}