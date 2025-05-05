import React from "react";
import { Rnd } from "react-rnd";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "#FF0000",
      backgroundColor: "#FF0000",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "#0000FF",
      backgroundColor: "#0000FF",
    },
  ],
};

const GraficoDeLinha = () => {
  return (
    <div>
      <Rnd
        default={{
          x: 100,
          y: 100,
          width: 500,
          height: 300,
        }}
        bounds="window"
        style={{ border: "1px solid #ccc", background: "#fff", padding: 10 }}
      >
        <Line options={options} data={data} />
      </Rnd>
    </div>
  );
};

export default GraficoDeLinha;
