import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Ciri = () => (
    <section id="ciri" className={` ${styles.flexCenter} flex-col relative`}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-6 mb-6 relative z-[1]">
            <h1 className={styles.heading2}>Ciri-ciri
                <span className='text-gradient'> Stunting</span> {" "}
                <br className="sm:block hidden" />pada anak</h1>
            <div className="w-full md:mt-0 mt-6 ml-0">
                <p className={`${styles.paragraph} text-left text-justify`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet molestias minus beatae culpa sequi saepe corporis possimus nisi, dolores tempora, magni aspernatur quae consequatur sunt, fuga distinctio. Tempora, inventore!</p>
            </div>
        </div>

        <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
);



export default Ciri