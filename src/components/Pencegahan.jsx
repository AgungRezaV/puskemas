import React from 'react'
import { features_two } from '../constants';
import { layout } from '../style';

const PenyebabCard = ({ title, content, content2, content3, content4, content5, content6, content7, content8, content9, i }) => (
    <div className={`flex flex-wrap: wrap rounded-[5px] sm:p-10 p-2 ${i !== features_two.length - 1 ? 'mb-6' : 'mb-0'} feature-card transition ease-in-out delay-150 hover:scale-110 hover:bg-blue-500 duration-500 ... `}>
        <div className='flex flex-row mt-[10px] h-[100%]'>
            <div className='flex flex-col feedback-card sm:w-[600px] max-w-[500px] sx:mx-0 mx-6'>
                <h4 className='font-poppins font-semibold text-[18px] text-justify leading-[30px] mb-5'>
                    {title} <br />
                </h4>
                <p className='xs:ml-6 ml-0 font-poppins text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px]  leading-[24px] mb-2'>
                    {content} <br />
                </p>
                <p className='xs:ml-6 ml-0 font-poppins text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px]  leading-[24px] mb-2'>
                    {content2} <br />
                </p>
                <p className='xs:ml-6 ml-0 font-poppins text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px]  leading-[24px] mb-2'>
                    {content3} <br />
                </p>
                <p className='xs:ml-6 ml-0 font-poppins text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px]  leading-[24px] mb-2'>
                    {content4} <br />
                </p>
                <p className='xs:ml-6 ml-0 font-poppins text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px]  leading-[24px] mb-2'>
                    {content5} <br />
                </p>
                <p className='xs:ml-6 ml-0 font-poppins text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px]  leading-[24px] mb-2'>
                    {content6} <br />
                </p>
                <p className='xs:ml-6 ml-0 font-poppins text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px]  leading-[24px] mb-2'>
                    {content7} <br />
                </p>
                <p className='xs:ml-6 ml-0 font-poppins text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px]  leading-[24px] mb-2'>
                    {content8} <br />
                </p>
                <p className='xs:ml-6 ml-0 font-poppins text-justify font-normal text-[14px] sx:max-w-[200px] max-w-[450px]  leading-[24px] mb-2'>
                    {content9} <br />
                </p>
            </div>
        </div>
    </div>
)

const Pencegahan = () => {
    return (
        <div className='flex flex-col text-white'>
            <h1 className='text-center text-[48px] tracking-wide font-bold my-10'>Pencegahan stunting</h1>
            <p className=''>Pencegahan stunting dilakukan secara spesifik dan sensitif. Pencegahan spesifik ditujukan kepada ibu hamil
                dan anak dalam 1.000 hari pertama kehidupan oleh sektor kesehatan dalam jangka waktu relatif pendek. Sementara pencegahan
                sensitif ditujukan kepada masyarakat umum dan tidak khusus untuk sasaran 1.000 Hari Pertama Kehidupan melalui berbagai kegiatan
                pembangunan di luar sektor kesehatan.
            </p>

            <div className='flex flex-col'>
                <h4>Pencegahan Spesifik Terhadap Stunting :</h4>
            </div>

            <div className='mt-10 mb-10 content-align'>
                <div className={`${layout.sectionImg} flex-wrap justify-evenly`}>
                    {features_two.map((feature, i) => (
                        <PenyebabCard key={feature.id} {...feature} index={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pencegahan