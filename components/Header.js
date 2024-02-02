import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <a href='#celebrate'>&#128520;</a>
      </div>
      <div className={styles.links}>
        <a href='#faqs'>FAQs</a>
        <a href='#data'>Data</a>
        <a href='#resources'>Resources</a>
      </div>
    </div>
  );
}
