import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header.js';
import Hero from '../components/Hero.js';
import FAQs from '../components/FAQs.js';
import Data from '../components/Data.js';
import Celebrate from '../components/Celebrate.js';
import Resources from '../components/Resources.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sarah left a job</title>
        <link rel='icon' href='/favicon.png' />
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
          key='fonts-google-apis'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
          key='fonts-google-static'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap'
          rel='stylesheet'
          key='fonts-google-noto-serif'
        ></link>
      </Head>

      <Header />

      <main>
        <Hero />
        <Celebrate />
        <FAQs />
        <Data />
        <Resources />
      </main>

      <footer>
        <a
          href='https://sarahransohoff.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          More from Sarah
        </a>
      </footer>
    </div>
  );
}
