import React, { useEffect } from 'react';
import styles from '../style';
import { deskripsi_nutrisi_ibu, deskripsi_nutrisi_bayi } from '../constants';
import { wavesAsupan, cegah_stunting } from '../assets';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Nutrisi_content_func = ({ content }) => (
    <p className='font-poppins text-justify font-normal text-[18px] my-2'>{content}</p>
);

const Asupan = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 200,
        });
    }, []);

    return (
        <div id='asupan' className={`${styles.paragraph} bg-[#6366f1]`}>
            <div className='flex md:flex-row flex-col justify-between px-8 py-8' data-aos='fade-right'>
                <div className='md:px-16 px-8 md:py-0 py-8 text-white grid content-center md:text-center'>
                    <h1 className={`${styles.heading2} text-white`}>Asupan nutrisi </h1>
                    <h4 className='sx:text-justify'>Pangan gizi seimbang berdasarkan Permenkes nomor 41 tahun 2014, antara lain, </h4>
                    <br />
                </div>
                <img src={cegah_stunting} alt="dctr" data-aos='fade-up'/>
            </div>


            <div className='bg-[#6366f1] sm:px-32 px-8'>
                <div data-aos='fade-right'>
                    <h2 className='xs:text-left text-center text-white font-semibold text-[36px] leading-[48px] pt-5'>Bagi ibu hamil : </h2>
                    <div className='text-justify md:py-5 py-0 md:px-10 px-5 text-white'>
                        <ul className='list-decimal'>
                            {deskripsi_nutrisi_ibu.map((card) => (
                                <li key={card.id}>
                                    <Nutrisi_content_func key={card.id} {...card} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h2 className='xs:text-left text-center font-semibold text-[36px] leading-[48px] text-white'>Bagi bayi: </h2>
                    <div className='text-justify py-5 md:px-10 px-5 text-white'>
                        <ul className='list-decimal'>
                            {deskripsi_nutrisi_bayi.map((card) => (
                                <li key={card.id}>
                                    <Nutrisi_content_func key={card.id} {...card} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Asupan