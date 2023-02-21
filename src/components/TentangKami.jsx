import React, { useEffect } from 'react';
import styles from '../style';
import { fotoTeamTransparent } from '../assets';
import ButtonWhatsApp from './ButtonWhatsApp';
import ButtonGform from './ButtonGform';

import AOS from 'aos';
import 'aos/dist/aos.css';

const TentangKami = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 200,
        });
    }, []);

    return (
        <section id='tentang-kami' className={`flex md:flex-row flex-col relative bg-blue-50`}>
            <div className={`flex-1 md:flex-row max-w-[900px] xl:px-16 px-12 font-poppins`} data-aos='fade-right'>
                <div className='flex font-normal text-[72px] text-[42px]'>
                    <h1>Web<span className='text-blue-900 font-bold'>{' '}Pusting</span></h1>
                </div>

                <p className={`${styles.paragraph} max-w-[900px] mt-5 text-gray-900 text-justify`} data-aos='fade-right'>
                    Web Pusting adalah sebuah situs yang diluncurkan oleh mahasiswa kesehatan masyarakat UIN Syarif Hidayatullah
                    Jakarta untuk menyebarkan informasi tentang stunting serta langkah pencegahannya kepada ibu hamil dan ibu yang
                    memiliki balita di Kelurahan Bakti Jaya khususnya dan secara umum untuk masyarakat yang mengunjungi situs ini.
                    <br /> <br />
                    Situs ini juga dilengkapi dengan fitur konsultasi kepada petugas gizi di Puskesmas Bakti Jaya untuk memudahkan
                    akses informasi yang dibutuhkan segera. Tersedianya situs ini diharapkan dapat meningkatkan pengetahuan dan
                    kewaspadaan dalam mencegah stunting pada balita.
                </p>

                <p className='mt-10'>Klik tombol dibawah untuk Chat atau Konsultasi</p>
                <div className='flex md:flex-row flex-col md:my-5 my-5 drop-shadow-xl'>
                    <a href='https://wa.me/+6285935002057'>
                        <ButtonWhatsApp styles='' />
                    </a>

                    <a href='https://forms.gle/742BcVM3F8DJra18A'>
                        <ButtonGform styles='md:ml-5 ml-0 md:mt-0 mt-5' />
                    </a>
                </div>

                <div data-aos='fade-left'>

                </div>
            </div>
            <img src={fotoTeamTransparent} alt='fotoTeam' className='m-auto z-[5]' data-aos='fade-left' />
        </section>
    );
};

export default TentangKami;
