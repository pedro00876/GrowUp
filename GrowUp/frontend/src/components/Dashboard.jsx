import { useState } from "react";
import GraficoDeRosquinha from "./GraficoDeRosquinha";
import GraficoDeBarra from "./GraficoDeBarra";

export default function Dashboard() {
  const [filter, setFilter] = useState("todos");

  return (
    <div className="grid grid-cols-2 gap-4">
      <GraficoDeRosquinha filter={filter} setFilter={setFilter} />
      <GraficoDeBarra filter={filter} />
    </div>
  );
}
