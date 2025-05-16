import React, { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Title, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(Tooltip, Title, Legend, CategoryScale, LinearScale, BarElement);

function formatValue(formatType, value) {
  if (!formatType) return value;
  switch (formatType) {
    case 'currency': return `R$ ${value.toFixed(2).replace('.', ',')}`;
    case 'percent': return `${(value * 100).toFixed(1)}%`;
    case 'decimal': return value.toFixed(2);
    default: return value;
  }
}

export default function ChartFromAPI() {
  const [chartConfig, setChartConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ajustar o formato esperado (pode vir do backend também)
  const format = 'currency';

  useEffect(() => {
    fetch('http://localhost:3000/render', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'chart',
        chartType: 'bar',
        labels: ['Jan', 'Fev', 'Mar'],
        datasets: [{ label: 'Receita', data: [1200.5, 1450, 1600] }],
        title: 'Faturamento Mensal',
        format: format,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Adiciona formatação das tooltips e ticks no frontend
        data.options.plugins.tooltip = {
          callbacks: {
            label: (context) => {
              const val = context.parsed.y ?? context.parsed;
              return `${context.dataset.label}: ${formatValue(format, val)}`;
            },
          },
        };
        data.options.scales = {
          y: {
            ticks: {
              callback: (val) => formatValue(format, val),
            },
          },
        };
        setChartConfig(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando gráfico...</p>;
  if (!chartConfig) return <p>Erro ao carregar dados.</p>;

  return (
    <div>
      <h2>{chartConfig.options.plugins.title.text}</h2>
      <Chart type={chartConfig.type} data={chartConfig.data} options={chartConfig.options} />
    </div>
  );
}
