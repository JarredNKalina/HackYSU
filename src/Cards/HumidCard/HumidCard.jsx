import "./HumidCard.css"
import { AiOutlineCloud } from 'react-icons/ai'
import "../Card.css"

const WhichCardToRender = (props) => {
    if (props.humid >= 50) {
        return(
            <div id='green-humid-card' className="card">
                <p className="percentage">{props.humid}%</p>
                <AiOutlineCloud className="icon" size={60} />
            </div>
        )
    }
    else {
        return(
            <div id='red-humid-card' className="card">
                <p className="percentage">{props.humid}%</p>
                <AiOutlineCloud className="icon" size={60} />
            </div>
        )
    }
}


export const HumidCard = ()=>{

    const humid = 45

    return(
        <WhichCardToRender humid={humid} />
    );
}