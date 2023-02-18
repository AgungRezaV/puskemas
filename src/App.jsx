import styles from './style';
import { Navbar, Hero, Penjelasan, Ciri, Table, Dampak, Pencegahan, Sensitif, Asupan, Sanitasi } from './components';
import { sampul_web, wavesCegah, wavesNegatives, wavesOpacity, wavesAsupan, wavesAsupanBottom } from './assets';

const App = () => (
  <div className='bg-gray-100 w-full overflow-hidden navbar '>

    <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
      <Navbar />
    </div>
    <img src={sampul_web} alt="" />

    <div className="w-full sm:pl-16 px-16 my-10">
      <Penjelasan />
      <Ciri />
    </div>

    <div className={`${styles.flexStart}`}>
      <div className="w-full">
        <img src={wavesOpacity} alt="waves" className='rotate-180' />
        <Table />
        <h1 className='bg-red-100 text-gray-500 text-[22px] font-poppins text-center font-bold tracking-widest'>Sumber : Kementrian Kesehatan</h1>
        <img src={wavesOpacity} alt="waves" />
      </div>
      <h1></h1>
    </div>
    
    <div className={`${styles.paddingX} w-full mt-10`}>
      <Dampak />
    </div>

    <div className={``}>
      <img src={wavesCegah} alt="waves" className='rotate-180'/>
      <Pencegahan />
      <img src={wavesCegah} alt="waves" />
    </div>

    <div className="w-full sm:pl-16 px-16">
      <Sensitif />
    </div>

    <div className="w-full">
    <img src={wavesAsupan} alt="waves" className=''/>
      <Asupan />
      <img src={wavesAsupanBottom} alt="waves" className='rotate-180'/>
    </div>

    <div className={`${styles.paddingX} py-10 w-full`}>
      <Sanitasi />
    </div>

    <div className={`${styles.flexStart}`}>
      <div className="w-full">
      <img src={wavesAsupanBottom} alt="waves" className='' />
        <Hero />
        
      </div>
    </div>

  </div>
);

export default App