import React, { useEffect } from 'react';
import { features } from '../constants';
import { layout } from '../style';
import { doctor, sampul_web } from '../assets';

import AOS from 'aos';
import 'aos/dist/aos.css';

const PenyebabCard = ({ title, content, content2, content3, content4, i }) => (
    // ${i !== features.length - 1 ? 'mb-6' : 'mb-0'}
    <div data-aos="fade-up" data-aos-delay="400" className={`flex flex-wrap: wrap rounded-[20px] py-8 feature-card transition ease-in-out delay-150 hover:scale-110 hover:bg-blue-500 duration-500`}>
        <div className='flex flex-row'>
            <div className='flex flex-col feedback-card sx:mx-0 mx-6'>
                <h4 className='font-poppins font-semibold md:text-justify text-center text-[18px] md:w-[600px] max-w-[500px] leading-[30px] mb-5'>
                    {title} <br />
                </h4>
                <p className='xs:ml-6 ml-0 font-poppins md:text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px] leading-[24px] mb-2'>
                    {content} <br />
                </p>
                <p className='xs:ml-6 ml-0 font-poppins md:text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px] leading-[24px] mb-2'>
                    {content2} <br />
                </p>
                <p className='xs:ml-6 ml-0 font-poppins md:text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px] leading-[24px] mb-2'>
                    {content3} <br />
                </p>
                <p className='xs:ml-6 ml-0 font-poppins md:text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px] leading-[24px] mb-2'>
                    {content4} <br />
                </p>
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
                <div className='flex flex-col px-8 my-10' data-aos="fade-right">
                        <h2 className="font-poppins font-semibold xs:text-[56px] text-[40px] text-black w-full tracking-widest">
                            Apa itu Stunting ?
                        </h2>
                        <p className="font-poppins font-normal text-black text-[18px] mt-5 text-black w-full text-justify md:px-12 px-0">
                            Atau biasa disebut kerdil atau pendek adalah kondisi gagal tumbuh oada anak berusia di bawah lima tahun (balita) akibat kekurangan gizi kronis
                            dan infeksi berulang terutama pada periode 1.000 Hari Pertama Kehidupan (HPK), yaitu dari janin hingga anak berusia 23 bulan.
                            Anak tergolong stunting apabila panjang atau tinggi badannya berada di bawah minus dua (-2) standar deviasi panjang atau tinggi badan anak seumurnya.
                        </p>
                </div>
                <h1 className="text-center text-[50px] font-bold mt-5" data-aos="fade-up">Penyebab Stunting</h1>
                <div className='md:my-10 my-0'>
                    <div className={`flex-wrap justify-evenly text-justify px-5 py-5`}>
                        {features.map((feature, i) => (
                            <PenyebabCard key={feature.id} {...feature} index={i} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Penjelasan