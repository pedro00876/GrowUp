import React from "react";
import { Bubble } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: "Red dataset",
      data: Array.from({ length: 50 }, () => ({
        x: faker.number.int({ min: -100, max: 100 }),
        y: faker.number.int({ min: -100, max: 100 }),
        r: faker.number.int({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Blue dataset",
      data: Array.from({ length: 50 }, () => ({
        x: faker.number.int({ min: -100, max: 100 }),
        y: faker.number.int({ min: -100, max: 100 }),
        r: faker.number.int({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const GraficoDeBolha = () => {
  return (
    <div>
      <Bubble options={options} data={data} />
    </div>
  );
};

export default GraficoDeBolha;
