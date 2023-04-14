import React from 'react';
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from '../../styles/Data.module.css';

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

const data = {
  labels: [
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
  ],
  datasets: [
    {
      fill: true,
      label: 'Job interviews',
      data: [0, 3, 5, 20, 20, 8],
      borderColor: 'rgba(53, 162, 235, 0.6)',
      backgroundColor: 'rgba(53, 162, 235, 0.25)',
    },
    {
      fill: true,
      label: 'Job rejections',
      data: [0, 6, 4, 3, 2, 1],
      borderColor: 'rgba(80, 81, 242, 0.6)',
      backgroundColor: 'rgba(80, 81, 242, 0.25)',
    },
    {
      fill: true,
      label: 'Art rejections',
      data: [2, 2, 3, 1, 1, 1],
      borderColor: 'rgba(4, 199, 145, 0.6)',
      backgroundColor: 'rgba(4, 199, 145, 0.25)',
    },
    {
      fill: true,
      label: 'Romantic rejections',
      data: [1, 0, 0, 0, 1, 0, 0],
      borderColor: 'rgba(255, 99, 132, 0.6)',
      backgroundColor: 'rgba(255, 99, 132, 0.25)',
    },
  ],
};

export default function PaceOfInterviews() {
  return (
    <div className={styles.dataset}>
      <p>
        <strong>Interviews and rejections</strong>
      </p>
      <Line
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
        data={data}
      />
    </div>
  );
}
