import { ciri_card } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { doctor_exam } from "../assets";

const Ciri = () => (
    <section id="ciri-ciri" className={` ${styles.flexCenter} flex-col relative`}>
        <div className=" w-full flex justify-between items-center md:flex-row flex-col sm:mb-6 mb-6 relative z-[1]">
            <h1 className={styles.heading2}>Ciri-ciri {" "}
                <span className='font-bold bg-blue-100 rounded-[20px] leading-[50px]'>Stunting</span> {" "}
                <br className="sm:block hidden" />pada anak</h1>
            <div className="w-full md:mt-0 mt-6 ml-0">
                <img src={doctor_exam} alt="dctr" />
            </div>
        </div>

        <div className="flex flex-wrap justify-evenly w-full feedback-container relative z-[1]">
            {ciri_card.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
);

export default Ciri