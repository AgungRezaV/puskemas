import styles from './style';
import { Navbar, Hero, Penjelasan, Ciri, Table, Dampak, Pencegahan, Sensitif, Asupan } from './components';

const App = () => (
  <div className='bg-gray-100 w-full overflow-hidden navbar '>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className="w-full">
        <Navbar />
      </div>
    </div>

    <div className={`bg-blue-50 ${styles.flexStart}`}>
      <div className="w-full">
        <Hero />
      </div>
    </div>

    <div>
      <div className="w-full sm:pl-16 px-16 my-10">
        <Penjelasan />
        <Ciri />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className="w-full">
        <Table />
      </div>
    </div>

    <div className={`${styles.paddingX}`}>
      <div className="w-full mt-10">
        <Dampak />
      </div>
    </div>

    <div className={` bg-gradient-to-r from-cyan-500 to-blue-500 ${styles.paddingX}`}>
      <div className="w-full">
        <Pencegahan />
      </div>
    </div>

    <div className=''>
      <div className="w-full sm:pl-16 px-16">
        <Sensitif />
      </div>
    </div>

    <div className=''>
      <div className="w-full">
        <Asupan />
      </div>
    </div>

  </div>
);

export default App