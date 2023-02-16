import styles from './style';
import { Navbar, Hero, Penjelasan, Ciri, Table } from './components';

const App = () => (
  <div className='bg-gray-100 w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className="w-full">
        <Navbar />
      </div>
    </div>

    <div className={`bg-blue-100 ${styles.flexStart}`}>
      <div className="w-full">
        <Hero />
      </div>
    </div>

    <div className={`sm:pl-16 px-16`}>
      <div className="w-full">
        <Penjelasan />
        <Ciri />
        <Table />
      </div>

      {/* <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Nilai_normal />
        </div>
      </div> */}

    </div>
  </div>
);

export default App