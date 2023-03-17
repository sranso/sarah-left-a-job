import styles from "../styles/Celebrate.module.css";
import RSVP from "./RSVP.js";

export default function Celebrate() {
  return (
    <div className={styles.container} id="celebrate">
      <div className={styles.CTA}>Come celebrate with her</div>
      <div className={styles.detail}>
        <p>
          <strong>Details</strong>
          <br />
          What: A party to celebrate Sarah's new job.
          <br />
          When: 5:30PM April 29, 2023
          <br />
          Where: 210 Eckford St, 3L Brooklyn NY (my new apartment!!).
          <br />
        </p>
        <RSVP copy="RSVP" />
      </div>
    </div>
  );
}
