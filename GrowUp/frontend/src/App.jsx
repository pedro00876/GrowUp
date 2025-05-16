import "./App.css";
import ChartFromAPI from "./components/ChartFromAPI";
import DynamicTable from "./components/DynamicTable";

//Componentes
import GraficoDeArea from "./components/GraficoDeArea";
import GraficoDeAreaPolar from "./components/GraficoDeAreaPolar";
import GraficoDeBarra from "./components/GraficoDeBarra";
import GraficoDeLinha from "./components/GraficoDeLinha";
import GraficoDeRosquinha from "./components/GraficoDeRosquinha";

function App() {
  return (
    <div className="App">
      <h1>GrowUp</h1>
      <ChartFromAPI />
      <DynamicTable />

      {/* <GraficoDeArea />
      <GraficoDeBarra />
      <GraficoDeLinha />
      <GraficoDeAreaPolar />
      <GraficoDeRosquinha /> */}
    </div>
  );
}

export default App;
