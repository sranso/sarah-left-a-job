import styles from '../styles/Postscript.module.css';
import RSVP from './RSVP.js';

export default function Postscript() {
  return (
    <div className={styles.container} id='postscript'>
      <div className={styles.title}>In sum...</div>
      <blockquote
        className={styles.quote}
        cite='https://freakonomics.com/podcast/turning-work-into-play/'
      >
        <p>
          LEVITT: Okay What should people do with money?
          <br />
          GILBERT: ... in a word, I’d say social relationships. We are the
          single most social species on this planet. And it is no wonder that
          the source of most of our happiness is our relationships with other
          people. But how many people do you know who when they get a big salary
          boost say, “I’m going to use this to buy myself more time with my
          wife.” “I’m going to use this money to have a weekly party for my
          friends.” No. They use that money to put themselves in a position to
          earn even more of it. They buy material goods. Which tend to stop
          bringing you happiness fairly quickly after you buy them, which is why
          you have to keep upgrading them. If somebody said, “Give me your
          advice,” I’d say, “Look,{' '}
          <strong>
            invest in your social relationships. They’re a better predictor of
            your happiness than your wealth, than your health, than your age,
            than your gender, than almost anything else.”
          </strong>
        </p>
        &mdash;{' '}
        <a href='https://freakonomics.com/podcast/turning-work-into-play/'>
          People I Mostly Admire
        </a>
      </blockquote>
      <RSVP copy='Friends are the best &#129303;' />
    </div>
  );
}
