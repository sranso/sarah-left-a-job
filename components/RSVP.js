import styles from "../styles/RSVP.module.css";

export default function RSVP({ copy }) {
  return (
    <p>
      <a
        className={styles.rsvp}
        href="https://partiful.com/e/nnwczbP8zPAT6BcsL7e6"
        target="_blank"
      >
        {copy}
      </a>
    </p>
  );
}
