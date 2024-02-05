import styles from '../styles/Resources.module.css';

export default function Resources() {
  return (
    <div className={styles.container} id='resources'>
      <div className={styles.title}>Resources</div>
      <p>
        If you're looking for a job,{' '}
        <a href='https://sarah-got-a-job.vercel.app/#resources' target='_blank'>
          here are some resources she once found helpful.
        </a>{' '}
        Otherwise, she is enjoying the following things.
      </p>
      <ul className={styles.ul}>
        <li>Run club! Strava is her entire personality these days</li>
        <li>
          She has not done this nearly enough but... drawing with friends! Let's
          doodle
        </li>
        <li>In that vein, planning craft and art-making hangs</li>
        <li>Day drinking (let's start earlier!)</li>
        <li>Sleepovers</li>
        <li>$plurging on an art studio</li>
        <li>
          Spas (she likes{' '}
          <a href='https://maps.app.goo.gl/9XA9A8gFBRzxdsdz6' target='_blank'>
            Bathhouse
          </a>
          )
        </li>
        <li>
          Massages (she likes{' '}
          <a href='https://maps.app.goo.gl/kdC75qj5gaiTGCPD8 target="_blank"'>
            Green Point Spa
          </a>
          )
        </li>
        <li>
          Spending in general – on art, friends, and things that make life feel
          easy. Because as we learned from the last party,{' '}
          <a
            href='https://sarah-got-a-job.vercel.app/#postscript'
            target='_blank'
          >
            money is best spent on our social relationships
          </a>{' '}
          &#10084;&#65039;&#8205;&#128293; &#10084;&#65039;&#8205;&#128293;
          &#10084;&#65039;&#8205;&#128293; and we can't spend it when we're dead
          &#128139; &#128139; &#128139;
        </li>
      </ul>
    </div>
  );
}
