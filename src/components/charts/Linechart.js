import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

function LineChart({userData, guestData}) {

  const options = {
    // responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
        y: {
          type: 'linear',
          beginAtZero: true,
        },
      },
  };

  const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

  const data = {
    labels,
    datasets: [
        {
            label: 'User',
            data: userData,
            borderColor: '#E9A0A0',
            tension: 0.4,
        },
        {
            label: 'Guest',
            data: guestData,
            borderColor: '#9BDD7C',
            tension: 0.4,
        },
    ]
  }

  return (
    <div style={{width: "100%"}}>
        <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;
