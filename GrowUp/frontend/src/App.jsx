import "./App.css";

//Componentes
import ChartFromAPI from "./components/ChartFromAPI";
import ChartTest from "./components/ChartTest";
import DynamicTable from "./components/DynamicTable";
import ChartApresentacao from "./components/ChartApresentacao";

function App() {
  return (
    <div className="App">
      <h1>GrowUp</h1>
      <ChartTest />
      <ChartFromAPI />
      <DynamicTable />
      <ChartApresentacao />
    </div>
  );
}

export default App;
