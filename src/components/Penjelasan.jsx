import { features } from '../constants';
import styles, { layout } from '../style';
import { doctor } from '../assets';

const PenyebabCard = ({ icon, title, content, content2, content3, content4, i }) => (
    <div className={`flex flex-wrap: wrap rounded-[5px] ${i !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
        <div className='flex flex-row mt-[10px] h-[100%] w-full'>
            <div className='flex flex-col px-10 max-w-[500px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
                <h4 className='font-poppins font-semibold text-[18px] text-justify ss:w-[500px] max-w-[450px] leading-[30px] mb-5'>
                    {title} <br />
                </h4>
                <p className='font-poppins text-justify font-normal text-[14px] ss:w-[400px] w-[250px] leading-[24px] mb-2'>
                    {content} <br />
                </p>
                <p className='font-poppins text-justify font-normal text-[14px] ss:w-[400px] w-[250px] leading-[24px] mb-2'>
                    {content2} <br />
                </p>
                <p className='font-poppins text-justify font-normal text-[14px] ss:w-[400px] w-[250px] leading-[24px] mb-2'>
                    {content3} <br />
                </p>
                <p className='font-poppins text-justify font-normal text-[14px] ss:w-[400px] w-[250px] leading-[24px] mb-2'>
                    {content4} <br />
                </p>
            </div>
        </div>
    </div>
)

const Penjelasan = () => {
    return (
        <section id='features' className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={`text-black text-center ${styles.heading2}`}>
                    Stunting
                    {/* <br className='sm:block hidden ' />
                    Stunting disebabkan oleh faktor yang multidimensi, diantaranya: */}
                </h2>

                <p className={`${styles.paragraph} w-full mt-5 text-black text-center `}>
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