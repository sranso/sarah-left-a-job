import styles from '../styles/Resources.module.css';

export default function Resources() {
  return (
    <div className={styles.container} id='resources'>
      <div className={styles.title}>Resources</div>
      <p>
        If you're looking for a job, here are some resources I found helpful
        along the way.
      </p>
      <ul className={styles.ul}>
        <li>
          <a href='https://climatebase.org/'>Climate base</a>
        </li>
        <li>
          <a href='https://4dayweek.io/'>4 day week</a>
        </li>
        <li>
          <a href='https://www.wordsofmouth.org/subscribe'>Words of mouth</a>
        </li>
        <li>
          <a href='https://www.listingsproject.com/'>Listings project</a>
        </li>
        <li>
          <a href='https://lowercarboncapital.com/get-off-the-couch/'>
            Lower carbon capital
          </a>
        </li>
        <li>
          <a href='https://jobs.climatedraft.org/jobs'>Climate draft</a>
        </li>
        <li>
          <a href='https://www.workatastartup.com/'>Work at a startup</a>
        </li>
        <li>
          <a href='https://jobs.firstround.com/jobs'>First round</a>
        </li>
        <li>
          <a href='https://technyc.getro.com/companies'>Tech NYC</a>
        </li>
      </ul>
    </div>
  );
}
