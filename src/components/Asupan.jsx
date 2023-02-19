import React, { useEffect } from 'react';
import styles from '../style';
import { deskripsi_nutrisi_ibu, deskripsi_nutrisi_bayi } from '../constants';
import {wavesAsupan} from '../assets';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Nutrisi_data = ({ content }) => (
    <p className='font-poppins text-justify font-normal text-[18px] my-2'>{content}</p>
);

const Asupan = () => {
    useEffect(() => {
        AOS.init({ duration: 5000 });
    }, []);

    return (
        <div id='asupan' className={`${styles.paragraph} bg-[#6366f1]`}>
            
            <div className='sm:px-16 px-8 text-white py-5' data-aos='fade-right'>
                <h1 className={`${styles.heading2} text-white`}>Asupan nutrisi </h1>
                <h4 className='text-justify'>Pangan gizi seimbang berdasarkan Permenkes nomor 41 tahun 2014, antara lain ;</h4>
                <br />
            </div>

            <div className='bg-blue-100 sm:px-32 px-8'>
                <div data-aos='fade-right'>
                    <h2 className='xs:text-left text-center font-semibold text-[36px] leading-[48px] pt-5'>Bagi ibu hamil : </h2>
                    <div className='text-justify md:py-5 py-0 md:px-10 px-5'>
                        <ul className='list-decimal'>
                            {deskripsi_nutrisi_ibu.map((card) => (
                                <li key={card.id}>
                                    <Nutrisi_data key={card.id} {...card} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h2 className='xs:text-left text-center font-semibold text-[36px] leading-[48px]'>Bagi bayi: </h2>
                    <div className='text-justify py-5 md:px-10 px-5'>
                        <ul className='list-decimal'>
                            {deskripsi_nutrisi_bayi.map((card) => (
                                <li key={card.id}>
                                    <Nutrisi_data key={card.id} {...card} />
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