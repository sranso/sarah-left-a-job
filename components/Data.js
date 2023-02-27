import styles from "../styles/Data.module.css";
import Rejections from "./data/Rejections.js";
import PlacesLived from "./data/PlacesLived.js";

export default function Data() {
  return (
    <div className={styles.container} id="data">
      <h2>Data</h2>

      <div>
        <div className={styles.dataset}>
          <p>
            <strong>Rejections since Jan 2022</strong>
          </p>
          <Rejections />
        </div>

        <div className={styles.dataset}>
          <p>
            <strong>Places lived since Jan 2022</strong>
          </p>
          <PlacesLived />
        </div>
      </div>
    </div>
  );
}
