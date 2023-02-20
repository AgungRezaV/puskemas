import styles from './style';
import { Navbar, Penjelasan, Ciri, Table, Dampak, Pencegahan, Sensitif, Asupan, Sanitasi, TentangKami } from './components';
import { sampul_web, wavesCegah, wavesNegatives, wavesOpacity, wavesAsupan, wavesAsupanBottom, tentangWavesHaikeiTop, tentangWavesHaikei } from './assets';

const App = () => (
  <div className='bg-gray-100 w-full overflow-hidden navbar'>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <Navbar />
    </div>
    <img src={sampul_web} alt="sampul_web" />

    <Penjelasan />
    <Ciri />

    <div className={`${styles.flexStart}`}>
      <div className="w-full">
        <img src={wavesOpacity} alt="waves" className='rotate-180 w-full' />
        <Table />
        <h1 className='bg-red-100 text-gray-500 md:text-[22px] font-poppins text-center font-bold tracking-widest'>Sumber : Kementrian Kesehatan</h1>
        <img src={wavesOpacity} alt="waves" className='w-full' />
      </div>
    </div>

    <div className={`${styles.paddingX} w-full mt-10`}>
      <Dampak />
    </div>

    <img src={wavesCegah} alt="waves" className='rotate-180 w-full' />
    <Pencegahan />

    <div className="px-16">
      <Sensitif />
    </div>

    <div className="w-full">
      <img src={wavesAsupan} alt="waves" className='w-full' />
      <Asupan />
      <img src={tentangWavesHaikei} alt="waves" className='w-full relative' />
    </div>

    <div className={`${styles.paddingX}`}>
      <Sanitasi />
    </div>

    <div className={`${styles.flexStart}`}>
      <div className="w-full">
        <img src={tentangWavesHaikeiTop} alt="waves" className='w-full' />
        <TentangKami />
      </div>
    </div>

  </div>
);

export default App