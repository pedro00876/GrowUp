import "./App.css";

//Componentes
import GraficoDeArea from "./components/GraficoDeArea";
import GraficoDeBarra from "./components/GraficoDeBarra";
import GraficoDeBolha from "./components/GraficoDeBolha";
import GraficoDeLinha from "./components/GraficoDeLinha";
import GraficoDePizza from "./components/GraficoDePizza";

function App() {
  return (
    <div className="App">
      <h1>GrowUp</h1>

      <GraficoDeArea />
      <GraficoDeBarra />
      <GraficoDeBolha />
      <GraficoDePizza />
      <GraficoDeLinha />
    </div>
  );
}

export default App;
