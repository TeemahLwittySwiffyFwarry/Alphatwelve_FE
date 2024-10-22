import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Carousel from './Carousel';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Chart.js settings
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Event Registrations',
      data: [700, 950, 780, 400, 1000, 550, 825, 380, 815, 625, 895, 600],
      backgroundColor: '#8576FF',
      borderColor: '#8576FF',
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false, // Disable default aspect ratio
  aspectRatio: 1.5, // Adjust aspect ratio to match Figma proportions
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Event Registration per Month',
    },
  },
};

const EventChart = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-6 ms-3">Event Registration per Month</h2>
      <div className="flex flex-col md:flex-row justify-between w-full border border-gray-200">
        <div className="flex-1 p-4" style={{ maxWidth: '600px', minHeight: '400px' }}>
          <div className="h-full">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
        <div className="flex-1 p-4">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default EventChart;
