import "./App.css";

//Componentes
import GraficoDeArea from "./components/GraficoDeArea";
import GraficoDeAreaPolar from "./components/GraficoDeAreaPolar";
import GraficoDeBarra from "./components/GraficoDeBarra";
import GraficoDeBolha from "./components/GraficoDeBolha";
import GraficoDeLinha from "./components/GraficoDeLinha";
import GraficoDePizza from "./components/GraficoDePizza";
import GraficoDeRadar from "./components/GraficoDeRadar";

function App() {
  return (
    <div className="App">
      <h1>GrowUp</h1>

      <GraficoDeArea />
      <GraficoDeBarra />
      <GraficoDeBolha />
      <GraficoDePizza />
      <GraficoDeLinha />
      <GraficoDeAreaPolar />
      <GraficoDeRadar />
    </div>
  );
}

export default App;
