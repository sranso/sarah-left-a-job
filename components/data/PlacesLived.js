import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import styles from "../../styles/Data.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Paros, Greece",
    "Oaxaca, MX",
    "Brooklyn, NC",
    "Desbarats, Canada",
    "Chapel Hill, NC",
    "Misc",
  ],
  datasets: [
    {
      label: "# months",
      data: [3, 2, 6, 1, 1, 0.5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
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

export default function PlacesLived() {
  return (
    <div className={styles.dataset}>
      <p>
        <strong>Places lived since Jan 2022</strong>
      </p>
      <Pie
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
        data={data}
      />
    </div>
  );
}
