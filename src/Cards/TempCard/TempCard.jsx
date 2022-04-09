import "./TempCard.css";
import "../Card.css";
import { BsThermometerSun, BsThermometerHalf, BsThermometerSnow }  from "react-icons/bs";

const WhichIconToRender = (props) => {
    if (props.temp >= 72) {
        return (
            <BsThermometerSun className="icon" size={60} />
        )
        }
    else if (props.temp < 72 && props.temp >= 32) {
        return (
           <BsThermometerHalf className="icon" size={60} />
        )
    }
    else {
        return (
            <BsThermometerSnow className="icon" size={60} />
        );
    }
}

const WhichCardToRender = (props) => {
    if (props.temp >= 50) {
        return(
            <div id="green-temp-card" className="card">
                <p className="percentage">{props.temp}°</p>
                <WhichIconToRender temp={props.temp}/>
            </div>
        )
    }
    else {
        return(
            <div id="red-temp-card" className="card">
                <p className="percentage">{props.temp}°</p>
                <WhichIconToRender temp={props.temp}/>
            </div>
        )
    }
}

export const TempCard = () => {
    const temp = 60;

    return(
        <WhichCardToRender temp= {temp}/>
    );
}