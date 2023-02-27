import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./header.js";
import RSVP from "./RSVP.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sarah got a job</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          key="fonts-google-apis"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
          key="fonts-google-static"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap"
          rel="stylesheet"
          key="fonts-google-noto-serif"
        ></link>
      </Head>

      <Header />

      <main>
        <div className={styles.hero}>
          <h1 className={styles.title}>Sarah got a job!</h1>
        </div>
        <div className={styles.celebrate}>
          <div>Come celebrate with her</div>
          <RSVP />
        </div>
      </main>

      <footer>
        <a
          href="https://sarahransohoff.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          More from her
        </a>
      </footer>
    </div>
  );
}
