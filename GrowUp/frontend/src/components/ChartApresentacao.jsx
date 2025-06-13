import { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// registra os elementos que cada tipo de gráfico usa
ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

const ChartRenderer = ({ chartConfig }) => {
  const ChartComponentMap = {
    bar: Bar,
    line: Line,
    pie: Pie,
    doughnut: Doughnut,
  };

  const ChartComponent = ChartComponentMap[chartConfig.type] || Bar;

  return (
    <ChartComponent data={chartConfig.data} options={chartConfig.options} />
  );
};

const ChartFromBackend = () => {
  const [chartConfig, setChartConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchChartConfig() {
      try {
        const response = await fetch("http://localhost:4000/render", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "chart",
            chartType: "bar", // pode mudar dinamicamente aqui, ou enviar vazio
            title: "Tempo de resolução dos atendimentos",
            dataset: "tempo_resolucao_hrs_por_prioridade",
          }),
        });

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const data = await response.json();
        setChartConfig(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchChartConfig();
  }, []);

  if (loading) return <p>Carregando gráfico...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!chartConfig) return null;

  return <ChartRenderer key={chartConfig.type} chartConfig={chartConfig} />;
};

export default ChartFromBackend;
