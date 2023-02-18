import React from 'react'
import { dampak_stunting } from '../assets'
import styles from '../style';

const Dampak = () => {
    return (
        <div className='flex flex-col font-poppins'>
            <h1 className='text-center xs:text-[72px] text-[56px] xs:tracking-widest tracking-wide font-semibold'>Dampak stunting</h1>
            <div className='flex md:flex-row flex-col mt-5'>
                <div>
                    <img src={dampak_stunting} alt="dampak_stunting" className={`md:w-[650px] w-[350px] md:h-[95%] h-[50%] center relative z-[5]`} />
                </div>
                <div className='flex flex-col gap-4 items-center w-full md:ml-10 ml-0 md:my-0 my-5'>
                    <h4 className='text-center text-[24px]'>Dampak buruk yang dapat ditimbulkan oleh stunting :<br /></h4>
                    <p className={`${styles.paragraph} text-justify`}>Dampak jangka pendek adalah terganggunya perkembangan otak, kecerdasan, gangguan pertumbuhan fisik, dan gangguan metabolisme dalam tubuh.</p>
                    <p className={`${styles.paragraph} text-justify`}>Dampak jangka panjang yang dapat ditimbulkan adalah menurunnya kemampuan kognitif dan prestasi belajar, menurunnya kekebalan tubuh sehingga
                        mudah sakit, dan resiko tinggi untuk munculnya penyakit diabetes, kegemukan, penyakit jantung dan pembuluh darah, kanker, stroke, dan disabilitas
                        pada usia tua Stunting dan kekurang gizi lainnya yang terjadi di 1.000 HPK berisiko mengalami hambatan pertumbuhan fisik dan semakin rentan
                        terhadap penyakit.
                        Semua dampak yang diakibatkan stunting dan masalah gizi lainnya pada akhirnya akan menurunkan kualitas sumber daya manusia Indonesia, produktivitas,
                        dan daya saingnya.
                    </p>
                    <h4 className='text-center text-[24px]'>Urgensi pencegahan stunting</h4>
                    <p className={`${styles.paragraph} text-justify md:mb-5 mb-0`}>Indonesia masih menghadapi permasalahan gizi yang berdampak serius terhadap Kualitas Sumber Daya Manusia (SDM). Salah satu masalah gizi yang menjadi perhatian utama saat ini adalah masih tingginya anak balita pendek (Stunting)
                        Hasil Riset Kesehatan Dasar (RISKESDAS) 2018 menunjukkan prevalensi stunting di Indonesia sebesar 30,8%.
                        Di Kawasan Asia Tenggara, prevalensi stunting di Indonesia menempati urutan kedua terbanyak setelah Kamboja.</p>
                </div>
            </div>
        </div>
    )
}

export default Dampak