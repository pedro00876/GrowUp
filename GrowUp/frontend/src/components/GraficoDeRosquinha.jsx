import React from "react";
import { Rnd } from "react-rnd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#FF0000",
        "#0000FF",
        "#FFFF00",
        "#008000",
        "#800080",
        "#FFA500",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const GraficoDeRosquinha = () => {
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
        <Doughnut data={data} />
      </Rnd>
    </div>
  );
};

export default GraficoDeRosquinha;
