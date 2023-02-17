import styles from './style';
import { Navbar, Hero, Penjelasan, Ciri, Table } from './components';

const App = () => (
  <div className='bg-gray-100 w-full overflow-hidden navbar '>
    
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
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
      <div className="w-full sm:pl-16 px-16">
        <Penjelasan />
        <Ciri />
      </div>

      <div className={`bg-blue-50 rounded-[10px] my-10 ${styles.paddingX} ${styles.flexStart}`}>
        <div className="w-full my-5">
          <Table />
        </div>
      </div>

    </div>
  </div>
);

export default App