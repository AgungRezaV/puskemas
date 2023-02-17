import styles from '../style';
import { doctor, robot } from '../assets';

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 px-12`}>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-poppins font-normal ss:text-[72px] text-[42px] ss:mt-0 mt-6'>
                    Web
                    <span className='text-blue-900 font-bold'> Stunting</span> {" "}
                </h1>
            </div>

            <p className={`${styles.paragraph} text-justify max-w-[900px] mt-5 text-gray-900`}>
                Web stunting adalah sebuah situs yang diluncurkan oleh mahasiswa kesehatan masyarakat UIN Syarif
                Hidayatullah Jakarta untuk menyebarkan informasi tentang stunting serta langkah pencegahannya kepada
                ibu hamil dan ibu yang memiliki balita di Kelurahan Bakti Jaya khususnya dan secara umum untuk masyarakat
                yang mengunjungi situs ini.
                <br /> <br />
                Situs ini juga dilengkapi dengan fitur konsultasi kepada petugas gizi di Puskesmas Bakti Jaya untuk memudahkan
                akses informasi yang dibutuhkan segera. Tersedianya situs ini diharapkan dapat meningkatkan pengetahuan dan
                kewaspadaan dalam mencegah stunting pada balita.
            </p>
        </div>

        <div>
            <img src={doctor} alt="robot" className='xl:w-[100%] w-[100%] h-[100%] relative z-[5]' />
        </div>
    </section>
);

export default Hero