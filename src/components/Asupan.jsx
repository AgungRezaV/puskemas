import React from 'react'
import styles from '../style';
import { deskripsi_nutrisi_ibu, deskripsi_nutrisi_bayi } from '../constants';

const Nutrisi_data = ({ content }) => (
    <p className='font-poppins text-justify font-normal text-[18px] my-2'>{content}</p>
);

const Asupan = () => {
    return (
        <div className={`${styles.paragraph} bg-gradient-to-r from-sky-500 to-indigo-500`}>
            
            <div className='sm:px-16 px-8 text-white mt-10 py-5'>
                <h1 className={`${styles.heading2} text-white`}>Asupan nutrisi </h1>
                <h4 className='text-justify'>Pangan gizi seimbang berdasarkan Permenkes nomor 41 tahun 2014, antara lain ;</h4>
                <br />
            </div>

            <div className='bg-blue-100 sm:px-32 px-8'>
                
                <h2 className='xs:text-left text-center font-semibold text-[36px] leading-[48px] pt-5'>Bagi ibu hamil : </h2>
                <div className='text-justify md:px-0 px-0 md:py-5 py-0 md:px-10 px-0'>
                    <ul className='list-decimal'>
                        {deskripsi_nutrisi_ibu.map((card) => (
                            <li key={card.id}>
                                <Nutrisi_data key={card.id} {...card} />
                            </li>
                        ))}
                    </ul>
                </div>

                <h2 className='xs:text-left text-center font-semibold text-[36px] leading-[48px]'>Bagi bayi: </h2>
                <div className='text-justify md:px-0 px-0 md:py-5 py-0 md:px-10 px-0'>
                    <ul className='list-decimal'>
                        {deskripsi_nutrisi_bayi.map((card) => (
                            <li key={card.id}>
                                <Nutrisi_data key={card.id} {...card} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div >
    )
}

export default Asupan