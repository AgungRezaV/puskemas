import { features } from '../constants';
import styles, { layout } from '../style';
import { doctor, sampul_web } from '../assets';

const PenyebabCard = ({ title, content, content2, content3, content4, i }) => (
    // ${i !== features.length - 1 ? 'mb-6' : 'mb-0'}
    <div className={`flex flex-wrap: wrap rounded-[5px] sm:p-10 p-2 feature-card transition ease-in-out delay-150 hover:scale-110 hover:bg-blue-500 duration-500`}> 
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
            </div>
        </div>
    </div>
)

const Penjelasan = () => {
    return (
        <section id='penjelasan' className="sm:py-16 py-6">
            <div className='flex flex-col'>
                <div className='flex md:flex-row flex-col'>
                    <div className="flex flex-col">
                        <h2 className="font-poppins font-semibold xs:text-[56px] text-[40px] text-black w-full tracking-widest">
                            Stunting
                            {/* <br className='sm:block hidden ' />
                                Stunting disebabkan oleh faktor yang multidimensi, diantaranya: */}
                        </h2>

                        <p className="font-poppins font-normal text-black text-[18px] mt-5 text-black w-full text-justify md:px-12 px-0">
                            Atau biasa disebut kerdil atau pendek adalah kondisi gagal tumbuh oada anak berusia di bawah lima tahun (balita) akibat kekurangan gizi kronis
                            dan infeksi berulang terutama pada periode 1.000 Hari Pertama Kehidupan (HPK), yaitu dari janin hingga anak berusia 23 bulan.
                            Anak tergolong stunting apabila panjang atau tinggi badannya berada di bawah minus dua (-2) standar deviasi panjang atau tinggi badan anak seumurnya.
                        </p>
                    </div>
                    {/* <img src={sampul_web} alt="sampul web" className='w-full md:mt-0 mt-6' /> */}
                </div>

                <div className='mt-10 content-align'>
                    <div className={`${layout.sectionImg} flex-wrap justify-evenly`}>
                        {features.map((feature, i) => (
                            <PenyebabCard key={feature.id} {...feature} index={i} />
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Penjelasan