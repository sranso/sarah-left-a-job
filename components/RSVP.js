import styles from "../styles/RSVP.module.css";

export default function RSVP({ copy }) {
  return (
    <p>
      <a
        className={styles.rsvp}
        href="https://partiful.com/e/2pvFHGUaX7DMhC0o2S7t"
        target="_blank"
      >
        {copy}
      </a>
    </p>
  );
}
