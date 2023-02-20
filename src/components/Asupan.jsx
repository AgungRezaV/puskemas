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
            <div className='flex md:flex-row flex-col px-8 py-8' data-aos='fade-right'>
                <div className='md:px-16 px-8 md:py-0 py-8 text-white mt-24'>
                    <h1 className={`font-poppins font-semibold xs:text-[72px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full text-white text-center`}>Asupan nutrisi </h1>
                    <h4 className='mt-5 text-[26px] text-center'>Pangan gizi seimbang berdasarkan Permenkes nomor 41 tahun 2014, antara lain : </h4>
                    <br />
                </div>
                <img src={cegah_stunting} alt="cegah_stunting" data-aos='fade-up' />
            </div>

            <div className='sm:px-32 px-8 md:py-5 text-justify md:px-10 px-5 text-white' data-aos='fade-right'>
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
    );
};

export default Asupan