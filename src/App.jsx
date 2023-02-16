import styles from './style';
import { Navbar, Hero, Penjelasan, Ciri, Nilai_normal } from './components';

const App = () => (
  <div className='bg-gray-100 w-full overflow-hidden'>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-blue-100 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`sm:pl-16 px-16`}>
      <div className="w-full">
        <Penjelasan />
        <Ciri />
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Nilai_normal /> */}
        </div>
      </div>

    </div>
  </div>
);

export default App