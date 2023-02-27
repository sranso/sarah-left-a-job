import styles from "../styles/Data.module.css";
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

const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Places lived in last year",
    },
  },
};

const labels = ["January", "February", "March"];

const data = {
  labels,
  datasets: [
    {
      label: "Places lived",
      data: labels.map(() => Math.floor(5 * Math.random())),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function Data() {
  return (
    <div className={styles.container} id="data">
      <h2>Data</h2>
      <Bar options={options} data={data} />
    </div>
  );
}
