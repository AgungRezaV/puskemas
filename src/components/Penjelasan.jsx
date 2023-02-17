import { features } from '../constants';
import styles, { layout } from '../style';
import { doctor } from '../assets';

const PenyebabCard = ({ icon, title, content, content2, content3, content4, i }) => (
    <div className={`flex flex-wrap: wrap rounded-[5px] sm:p-10 p-2 ${i !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card transition ease-in-out delay-150 hover:scale-110 hover:bg-blue-500 duration-500 ... `}>
        <div className='flex flex-row mt-[10px] h-[100%]'>
            <div className='flex flex-col feedback-card sm:w-[500px] max-w-[500px]'>
                <h4 className='font-poppins font-semibold text-[18px] text-justify leading-[30px] mb-5'>
                    {title} <br />
                </h4>
                <p className='font-poppins text-justify font-normal text-[14px] sm:max-w-[420px] leading-[24px] mb-2'>
                    {content} <br />
                </p>
                <p className='font-poppins text-justify font-normal text-[14px] sm:w-[420px] leading-[24px] mb-2'>
                    {content2} <br />
                </p>
                <p className='font-poppins text-justify font-normal text-[14px] sm:w-[420px] leading-[24px] mb-2'>
                    {content3} <br />
                </p>
                <p className='font-poppins text-justify font-normal text-[14px] sm:w-[420px] leading-[24px] mb-2'>
                    {content4} <br />
                </p>
            </div>
        </div>
    </div>
)

const Penjelasan = () => {
    return (
        <section id='penjelasan' className="sm:py-16 py-6">
            <div>
                <h2 className="text-center font-poppins font-semibold xs:text-[56px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
                    Stunting
                    {/* <br className='sm:block hidden ' />
                    Stunting disebabkan oleh faktor yang multidimensi, diantaranya: */}
                </h2>

                <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] w-full mt-5 text-black text-center">
                    Atau biasa disebut kerdil atau pendek adalah kondisi gagal tumbuh oada anak berusia di bawah lima tahun (balita) akibat kekurangan gizi kronis
                    dan infeksi berulang terutama pada periode 1.000 Hari Pertama Kehidupan (HPK), yaitu dari janin hingga anak berusia 23 bulan.
                    Anak tergolong stunting apabila panjang atau tinggi badannya berada di bawah minus dua (-2) standar deviasi panjang atau tinggi badan anak seumurnya.
                </p>

                <div className='mt-10'>
                    <div className={`${layout.sectionImg} flex-wrap justify-center`}>
                        {features.map((feature, i) => (
                            <PenyebabCard key={feature.id} {...feature} index={i} />
                        ))}
                    </div>

                </div>
            </div>

            <div>

            </div>
        </section>
    )
}

export default Penjelasan