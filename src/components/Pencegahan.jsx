import React, { useEffect } from 'react';
import { pencegahan_content_data } from '../constants';
import styles from '../style';
import { pencegahanBg } from '../assets';

import AOS from 'aos';
import 'aos/dist/aos.css';

const PenyebabCard = ({ title, content, content2, content3, content4, content5, content6, content7, content8, content9, i }) => (
    <div data-aos="fade-right" data-aos-delay='400' className={`flex flex-wrap ${i !== pencegahan_content_data.length - 1 ? 'mb-6' : 'mb-0'}`}>
        <div className='pencegahan-card transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:duration-500'>
            <div className='sm:w-[600px] max-w-[500px] mx-6 my-6'>
                <h4 className='content-card-title'>
                    {title} <br />
                </h4>
                <ul className='list-decimal'>
                    <div className='content-card-css'>
                        {content && <li>{content}</li>}
                        {content2 && <li>{content2}</li>}
                        {content3 && <li>{content3}</li>}
                        {content4 && <li>{content4}</li>}
                        {content5 && <li>{content5}</li>}
                        {content6 && <li>{content6}</li>}
                        {content7 && <li>{content7}</li>}
                        {content8 && <li>{content8}</li>}
                        {content9 && <li>{content9}</li>}
                    </div>
                </ul>
            </div>
        </div>
    </div>
)


const Pencegahan = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 200,
        });
    }, []);

    return (
        <div style={{
            backgroundImage: `url(${pencegahanBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} className={`${styles.paddingX} flex flex-col text-black`}>

            <div data-aos='fade-up' className=''>
                <h1 className='text-center text-[48px] tracking-wide font-bold my-5'>Pencegahan {" "}
                    <span className='font-bold text-blue-900 leading-[50px] tracking-widest'>Stunting</span>
                </h1>
                <p className={`${styles.paragraph} text-justify`}>Pencegahan stunting dilakukan secara spesifik dan sensitif. Pencegahan spesifik ditujukan kepada ibu hamil
                    dan anak dalam 1.000 hari pertama kehidupan oleh sektor kesehatan dalam jangka waktu relatif pendek. Sementara pencegahan
                    sensitif ditujukan kepada masyarakat umum dan tidak khusus untuk sasaran 1.000 Hari Pertama Kehidupan melalui berbagai kegiatan
                    pembangunan di luar sektor kesehatan.
                </p>

                <div className={`${styles.paragraph} mt-5`}>
                    <h4>Pencegahan Spesifik Terhadap Stunting :</h4>
                </div>

                <div className="flex flex-wrap my-10 md:mx-10 relative justify-evenly md:text-justify">
                    {pencegahan_content_data.map((feature, i) => (
                        <PenyebabCard key={feature.id} {...feature} index={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pencegahan