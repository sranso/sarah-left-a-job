import styles from '../styles/Data.module.css';
import PlacesLived from './data/PlacesLived.js';
import PaceOfInterviews from './data/PaceOfInterviews.js';
import PeopleCriedTo from './data/PeopleCriedTo.js';

export default function Data() {
  return (
    <div className={styles.container} id='data'>
      <h2>Data</h2>
      <div>
        {/* <PaceOfInterviews /> */}
        {/* <PlacesLived /> */}
        <PeopleCriedTo />
      </div>
    </div>
  );
}
