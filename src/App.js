import { MoistCard } from "./Cards/MoistCard/MoistCard";
import { TempCard } from "./Cards/TempCard/TempCard";
import { HumidCard } from "./Cards/HumidCard/HumidCard";
import { LuminCard } from "./Cards/LuminCard/LuminCard";
import { ButtonClick } from "./Button/buttonClick";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LuminCard />
      <MoistCard />
      <TempCard />
      <HumidCard />
      <ButtonClick />
    </div>
  );
}

export default App;
