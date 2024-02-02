import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from '../../styles/Data.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
ChartJS.defaults.color = '#000';

const data = {
  labels: ['Herself', 'Therapist', 'Mom', 'Xena', 'Miso', 'Nan'],
  datasets: [
    {
      label: '# of cries',
      data: [27, 15, 16, 4, 4, 3],
      backgroundColor: 'rgba(255, 234, 0, 0.6)',
    },
  ],
};

export default function PeopleCriedTo() {
  return (
    <div className={styles.dataset}>
      <p>
        <strong>People she cried to the most since starting her job</strong>
      </p>
      <Bar
        options={{
          maintainAspectRatio: false,
          responsive: true,
          color: '#000',
        }}
        data={data}
        label
      />
      <p className={styles.description}>
        <i>Thank you, me!</i>
      </p>
    </div>
  );
}
