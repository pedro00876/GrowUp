import "./App.css";

//Componentes
import GraficoDeArea from "./components/GraficoDeArea";
import GraficoDeBarra from "./components/GraficoDeBarra";
import GraficoDeBolha from "./components/GraficoDeBolha";

function App() {
  return (
    <div className="App">
      <h1>GrowUp</h1>

      <GraficoDeArea />
      <GraficoDeBarra />
      <GraficoDeBolha />
    </div>
  );
}

export default App;
