import React, { useEffect } from 'react';
import { ciri_card } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { doctor_exam } from "../assets";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Ciri = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 200,
        });
    }, []);
    
    return (
        <section id="ciri-ciri" className={`${styles.flexCenter} flex-col relative mx-6`}>
            <div className=" w-full flex justify-between items-center md:flex-row flex-col mb-6 relative z-[1]" data-aos="fade-left">
                <h1 className={styles.heading2}>Ciri-ciri {" "}
                    <span className='font-bold bg-blue-100 rounded-[20px] leading-[50px]'>Stunting</span> {" "}
                    <br className="sm:block hidden" />pada anak</h1>
                <div className="w-full md:mt-0 mt-6">
                    <img src={doctor_exam} alt="doctor" className='rounded-[20px]'/>
                </div>
            </div>

            <div className="flex flex-wrap justify-evenly w-full feedback-container relative z-[1]" data-aos="fade-right">
                {ciri_card.map((card) => (
                    <FeedbackCard key={card.id} {...card} />
                ))}
            </div>
        </section>
    );
};

export default Ciri