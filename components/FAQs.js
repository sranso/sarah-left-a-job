import styles from "../styles/FAQs.module.css";

export default function FAQs() {
  return (
    <div className={styles.container} id="faqs">
      <h2>FAQs</h2>

      <ul className={styles.list}>
        <li>
          <p className={styles.q}>
            <strong>Who is Sarah?</strong>
          </p>
          <p>
            If you're reading this, most likely she is your friend, previous (or
            future!) co-worker, family member, or lover (past/present/future).
            If not, wow tell me how you got here!
          </p>
        </li>

        <li>
          <p className={styles.q}>
            <strong>What is a job?</strong>
          </p>
          <p>
            Such a good question. A job is a thing we are required to do for
            money. Some things that do not include jobs are making art full-time
            (as far as I have been able to discern), being gorgeous (unless you
            are a model), or very funny (unless you are a comedian). For the
            rest of us, we must have <i>marketable skills</i> for which someone
            pays us.
          </p>
        </li>

        <li>
          <p className={styles.q}>
            <strong>What is her new job?</strong>
          </p>
          <p>
            Lol ok technically she doesn't know yet but she will have one soon.
          </p>
        </li>

        <li>
          <p className={styles.q}>
            <strong>
              How many rejections did she get before she got an offer?
            </strong>
          </p>
          <p>
            See some stats in <a href="#data">the data section.</a>
          </p>
        </li>

        <li>
          <p className={styles.q}>
            <strong>How did she keep going, despite it all?</strong>
          </p>
          <p>
            Perseverance, a seven-day silent meditation retreat, free rent with
            Kate and Kiron,{" "}
            <a href="https://www.instagram.com/scone_heads/" target="_blank">
              eating scones with friends,
            </a>{" "}
            and knowing that she would eventually get to celebrate with people
            like you.
          </p>
        </li>
      </ul>
    </div>
  );
}
