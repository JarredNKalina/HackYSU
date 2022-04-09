import { MoistCard } from "./Cards/MoistCard/MoistCard";
import { TempCard } from "./Cards/TempCard/TempCard";
import { HumidCard } from "./Cards/HumidCard/HumidCard";
import { LuminCard } from "./Cards/LuminCard/LuminCard";
import "./App.css";
function App() {
  return (
    <div className="App">
      <LuminCard />
      <MoistCard />
      <TempCard />
      <HumidCard />
      <button className="pump"></button>
    </div>
  );
}

export default App;
