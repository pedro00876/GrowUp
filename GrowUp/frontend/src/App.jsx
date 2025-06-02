import "./App.css";

//Componentes
import ChartFromAPI from "./components/ChartFromAPI";
import DynamicTable from "./components/DynamicTable";
// import ChartComponent from "./components/ChartComponent";

function App() {
  return (
    <div className="App">
      <h1>GrowUp</h1>
      {/* <ChartComponent /> */}
      <ChartFromAPI />
      <DynamicTable />
    </div>
  );
}

export default App;
