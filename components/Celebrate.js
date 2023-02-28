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
          When: TBD, but sometime soon.
          <br />
          Where: Kate and Kiron's house (have to ask them first).
          <br />
        </p>
        <RSVP copy="RSVP" />
      </div>
    </div>
  );
}
