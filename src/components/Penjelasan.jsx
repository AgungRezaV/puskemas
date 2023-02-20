import React, { useEffect } from 'react';
import { penyebab_card_content } from '../constants';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Cards = ({ title, content, content2, content3, content4, i }) => (
    <div data-aos="fade-right" data-aos-delay='400' className={`flex flex-wrap ${i !== penyebab_card_content.length - 1 ? 'mb-6' : 'mb-0'}`}>
        <div className='pencegahan-card transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:duration-500'>
            <div className='sm:w-[600px] max-w-[500px] mx-6 my-6'>
                <h4 className='content-card-title'>
                    {title} <br />
                </h4>
                <div className='content-card-css'>
                    <ul className='list-decimal'>
                        {content &&<li>{content}</li>}
                        {content2 &&<li>{content2}</li>}
                        {content3 &&<li>{content3}</li>}
                        {content4 &&<li>{content4}</li>}
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

const Penjelasan = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 200,
        });
    }, []);

    return (
        <section id='penjelasan'>
            <div className='flex flex-col'>
                <div className='px-8 my-10' data-aos="fade-right">
                    <h2 className="font-poppins font-bold xs:text-[56px] text-[40px] text-black w-full tracking-widest">
                        Apa itu Stunting ?
                    </h2>
                    <p className="font-poppins font-normal text-black text-[18px] mt-5 text-black w-full text-justify md:px-12 px-0">
                        Atau biasa disebut kerdil atau pendek adalah kondisi gagal tumbuh oada anak berusia di bawah lima tahun (balita) akibat kekurangan gizi kronis
                        dan infeksi berulang terutama pada periode 1.000 Hari Pertama Kehidupan (HPK), yaitu dari janin hingga anak berusia 23 bulan.
                        Anak tergolong stunting apabila panjang atau tinggi badannya berada di bawah minus dua (-2) standar deviasi panjang atau tinggi badan anak seumurnya.
                    </p>
                </div>
                
                <h1 className="text-center text-[50px] font-semibold mt-5" data-aos="fade-up">Penyebab Stunting</h1>

                <div className={`flex flex-wrap my-10 md:mx-10 relative justify-evenly md:text-justify text-left`}>
                    {penyebab_card_content.map((feature, i) => (
                        <Cards key={feature.id} {...feature} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Penjelasan