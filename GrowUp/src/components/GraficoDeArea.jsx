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
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      //
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
      fill: true,
      label: "Dataset 2",
      //
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const GraficoDeArea = () => {
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

export default GraficoDeArea;
