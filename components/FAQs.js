import styles from '../styles/FAQs.module.css';

export default function FAQs() {
  return (
    <div className={styles.container} id='faqs'>
      <h3>FAQs</h3>

      <ul className={styles.list}>
        <li>
          <p className={styles.q}>
            <strong>Who is Sarah?</strong>
          </p>
          <p>
            A brilliant, stupid, perfect, irreversibly flawed woman who – by the
            time of this party – will have left{' '}
            <a href='https://sarah-got-a-job.vercel.app/' target='_blank'>
              the job she worked so hard to get.
            </a>
          </p>
        </li>

        <li>
          <p className={styles.q}>
            <strong>What is a job?</strong>
          </p>
          <p>
            Who knows anymore. I think it's a thing we do for predictable
            community and money while we work to find purpose in more meaningful
            ways.
          </p>
        </li>

        <li>
          <p className={styles.q}>
            <strong>So... what is she gonna do?</strong>
          </p>
          <p>
            She is going to work{' '}
            <a target='_blank' href='https://www.clay.com/'>
              somewhere else.
            </a>
          </p>
        </li>

        <li>
          <p className={styles.q}>
            <strong>Is she ok?</strong>
          </p>
          <p>
            Let's leave the hard-pressing questions for the Terri Gross-es of
            the world, hmkay?
          </p>
        </li>

        <li>
          <p className={styles.q}>
            <strong>Alright... sounds fun I guess?</strong>
          </p>
          <p>You bet your fiery ass it is.</p>
        </li>
      </ul>
    </div>
  );
}
