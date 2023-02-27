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

const data = {
  labels: ["Art residencies", "Jobs", "Romantic advances"],
  datasets: [
    {
      label: "#",
      data: [28, 13, 1],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function Rejections() {
  return <Bar data={data} />;
}
