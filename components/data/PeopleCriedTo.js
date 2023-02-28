import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "../../styles/Data.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const data = {
  labels: ["Kiron", "Kate", "Nan", "Strangers"],
  datasets: [
    {
      label: "# of cries",
      data: [6, 5, 3, 2],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function PeopleCriedTo() {
  return (
    <div className={styles.dataset}>
      <p>
        <strong>People I've cried to the most</strong>
      </p>
      <Bar
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
        data={data}
      />
      <p className={styles.description}>
        <i>Thank you, Kiron!</i>
      </p>
    </div>
  );
}
