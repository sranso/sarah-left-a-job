import styles from '../styles/Celebrate.module.css';
import RSVP from './RSVP.js';

export default function Celebrate() {
  return (
    <div className={styles.container} id='celebrate'>
      <div className={styles.CTA}>Come swim in the lake of fire</div>
      <div className={styles.detail}>
        <p>
          <strong>Details</strong>
          <br />
          What: A debaucherous reflection on giving up what we work so hard to
          get
          <br />
          When: Feb 24??, 2024
          <br />
          Where: 210 Eckford St, 3r Brooklyn NY
          <br />
        </p>
        <RSVP copy='RSVP' />
      </div>
    </div>
  );
}
