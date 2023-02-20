import React, { useEffect } from 'react';
import { sensitif_card } from "../constants";
import styles from "../style";
import SensitifCard from "./SensitifCard";
import { cegah_stunting, cegah_stunting_2 } from "../assets";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Sensitif = () => {
    useEffect(() => {
        AOS.init({ duration: 3000, easing: "ease-in-out-back", });
    }, []);

    return (
        <section id="sensitif" className={` ${styles.flexCenter} flex-col relative`} data-aos='fade-left'>
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-6 mb-6 relative z-[1]">
                <img src={cegah_stunting_2} alt="cegah_stunting" className="w-full md:mt-0 mt-6 ml-0  xs:min-w-[700px] min-w-[400px]" />

                <div className="flex flex-col mt-10">
                    <h1 className={`${styles.heading2}`}>Pencegahan Sensitif Terhadap Stunting{" "}</h1>
                    <p className="font-poppins xs:text-[26px] text-[16px] text-black">Pelajari Pencegahan Stunting Dibawah</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-evenly feedback-container relative z-[1]" data-aos="fade-right">
                {sensitif_card.map((card) => (
                    <SensitifCard key={card.id} {...card} />
                ))}
            </div>
        </section>
    );
};

export default Sensitif 