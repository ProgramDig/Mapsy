import React from "react";
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
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";


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
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Активність",
    },
  },
};

const labels = ["Грудень", "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень"];

export const data = {
  labels,
  datasets: [
    {
      label: "Вдень",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Вночі",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function MyLineChart() {
  return <Line options={options} data={data} />;
}
