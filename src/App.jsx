import styles from './style';
import { Navbar, Hero, Penjelasan, Ciri, Table, Dampak, Pencegahan } from './components';

const App = () => (
  <div className='bg-gray-100 w-full overflow-hidden navbar '>
  
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

    <div>
      <div className="w-full sm:pl-16 px-16 my-10">
        <Penjelasan />
        <Ciri />
      </div>

      <div className={`bg-blue-50 ${styles.paddingX} ${styles.flexStart}`}>
        <div className="w-full">
          <Table />
        </div>
      </div>

      <div className={`bg-red-100 ${styles.paddingX}`}>
        <div className="w-full mt-10">
          <Dampak />
        </div>
      </div>

      <div className={`bg-green-200 ${styles.paddingX}`}>
        <div className="w-full">
          <Pencegahan />
        </div>
      </div>
      
    </div>
  </div>
);

export default App