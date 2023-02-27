import styles from "../styles/celebrate.module.css";

export default function Celebrate() {
  return (
    <div className={styles.container} id="celebrate">
      <div className={styles.CTA}>Come celebrate with her</div>
      <div className={styles.RSVP}>
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
        <p>
          <a href="https://partiful.com/e/nnwczbP8zPAT6BcsL7e6" target="_blank">
            RSVP
          </a>
        </p>
      </div>
    </div>
  );
}
