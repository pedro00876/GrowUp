import React from "react";
import { Rnd } from "react-rnd";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "#FF0000",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "#0000FF",
    },
  ],
};

const GraficoDeBarra = () => {
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
        <Bar options={options} data={data} />
      </Rnd>
    </div>
  );
};

export default GraficoDeBarra;
