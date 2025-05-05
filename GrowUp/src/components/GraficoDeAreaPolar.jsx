import React from "react";
import { Rnd } from "react-rnd";
import { PolarArea } from "react-chartjs-2";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    +{
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const GraficoDeAreaPolar = () => {
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
        <PolarArea data={data} />
      </Rnd>

  
    </div>
  );
};

export default GraficoDeAreaPolar;
