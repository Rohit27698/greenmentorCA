
import React from 'react';
import { Chart as ChartJS, LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug',"Sep",'Nov','Dec'];

const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'E/R -2023',
      borderColor: 'yellow',
      borderWidth: 2,
      fill: false,
      data: [200,500,700,230,260,780,880,760,420,200,620,360],
    },
    {
      type: 'line',
      label: 'E/R -2022',
      borderColor: 'red',
      borderWidth: 2,
      fill: false,
      data: [250,590,900,270,290,710,880,630,490,190,600,210],
    },
    {
      type: 'bar',
      label: 'Emissions-2023',
      backgroundColor: 'blue',
      data: [200,500,700,230,260,780,880,760,420,200,620,360],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Emissions-2023',
      backgroundColor: 'green',
      data: [250,590,900,270,290,710,880,630,490,190,600,210],
    },
  ],
};

function ChartComponent() {
  return <Bar data={data} />;
}

export default ChartComponent;
