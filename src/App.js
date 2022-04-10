import { MoistCard } from "./Cards/MoistCard/MoistCard";
import { TempCard } from "./Cards/TempCard/TempCard";
import { HumidCard } from "./Cards/HumidCard/HumidCard";
import { LuminCard } from "./Cards/LuminCard/LuminCard";
import { ButtonClick } from "./Button/buttonClick";
import "./App.css";
import { useEffect, useState } from "react";

const fakeAPIResults=`{
  "humidity_value": 14,
  "temperature_value": 75,
  "moisture_value": 88,
  "luminosity_value": 33
}`
//WHEN API IS BROUGHT IN SWITCH LINE 21 TO RAWRESPONSE.JSON()
function App() {
  const [plantData, setPlantData] = useState(null)
  useEffect(()=> {
    const fetchPlantData = async () =>{
      const rawPlantDataResponse = await fetch('127.0.0.1:5000/sensors');
      const plantDataResponse = await rawPlantDataResponse.json();
      //const plantDataResponse = await JSON.parse(rawPlantDataResponse);
      setPlantData(plantDataResponse);
      console.log(rawPlantDataResponse);
      
    }
    fetchPlantData(); 
  }, [])

    if(!plantData){
      return <div className="App">...Loading...</div>
    }
  return (
    <div className="App">
      <LuminCard luminosity={plantData.luminosity_value}/>
      <MoistCard moisture={plantData.moisture_value}/>
      <TempCard temperature={plantData.temperature}/>
      <HumidCard humidity={plantData.humidity_value}/>
      <ButtonClick />
    </div>
  );
}

export default App;
