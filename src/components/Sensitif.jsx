import { sensitif_card } from "../constants";
import styles from "../style";
import SensitifCard from "./SensitifCard";
import { cegah_stunting } from "../assets";

const Sensitif = () => (
    <section id="sensitif" className={` ${styles.flexCenter} flex-col relative`}>
        <div className=" w-full flex justify-between items-center md:flex-row flex-col sm:mb-6 mb-6 relative z-[1]">
            <img src={cegah_stunting} alt="dctr" className="w-full md:mt-0 mt-6 ml-0 xs:min-h-[400px] max-h-[500px] xs:min-w-[700px] min-w-[500px]" />

            <div className="flex flex-col ml-10 mt-10">
                <h1 className={`${styles.heading2}`}>Pencegahan Sensitif Terhadap Stunting{" "}
                    {/* <span className='font-bold bg-blue-100 rounded-[20px] leading-[50px]'>Stunting</span> {" "}
                <br className="sm:block hidden" />pada anak*/}
                </h1>
                <p className="font-poppins xs:text-[26px] text-[16px] text-black w-full">Pelajari Pencegahan Stunting Dibawah</p>
            </div>

        </div>

        <div className="flex flex-wrap justify-evenly w-full feedback-container relative z-[1]">
            {sensitif_card.map((card) => (
                <SensitifCard key={card.id} {...card} />
            ))}
        </div>
    </section>
);

export default Sensitif 