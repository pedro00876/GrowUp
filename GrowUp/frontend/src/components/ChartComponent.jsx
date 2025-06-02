import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/render")
      .then((response) => {
        const dados = response.data;

        setData({
          labels: dados.map((item) => item.nome),
          datasets: [
            {
              label: "Valores",
              data: dados.map((item) => item.valor),
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
              ],
            },
          ],
        });
      })
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  if (!data) return <p>Carregando...</p>;

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <Doughnut data={data} />
    </div>
  );
};

export default ChartComponent;
