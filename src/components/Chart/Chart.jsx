import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Диаграмма успеваемости",
      },
    },
  };

  const labels = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль"];

  const data = {
    labels,
    datasets: [
      {
        label: "Пройдено заданий",
        data: [10, 9, 12, 11, 30, 25, 32],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Пройдено успешно",
        data: [2, 3, 5, 6, 23, 25, 32],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default Chart;
