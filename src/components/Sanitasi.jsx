import React from 'react'
import styles from '../style';
import { sanitasi } from '../constants';

const Sanitasi_data = ({ content, img }) => (
    <div id="sanitasi"
        className='
        flex 
        flex-col 
        w-[200px] 
        mt-10 
        transition 
        ease-in-out 
        hover:-translate-y-1 
        hover:scale-110
        hover:duration-500
        hover:bg-gray-800
        hover:text-white-500
        rounded-[10px]
        pencegahan-card'
    >
        <img src={img} alt="icon" className='w-[42px] h-[42px] mt-5 center'/>
        <p className='font-poppins text-center font-normal text-[18px] my-2'>{content}</p>
    </div>

);

const Sanitasi = () => {
    return (
        <div className='font-poppins text-black'>
            <h1 className={`${styles.heading2} text-center`}>
                5 Pilar sanitasi total berbasis lingkungan
            </h1>

            <div className='flex flex-wrap justify-evenly w-full feedback-container relative z-[1]'>
                {sanitasi.map((card) => (
                    <Sanitasi_data key={card.id} {...card} />
                ))}
            </div>
        </div>
    )
}

export default Sanitasi