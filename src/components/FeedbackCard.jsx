import { quotes } from "../assets";

const feedbackCard = ({ content, icon }) => (
    <div className='flex justify-start content flex-col px-10 rounded-[20px] w-[350px] max-h-[250px] md:mr-10  feedback-card'>
        <img src={icon} alt="quotes" className="w-[42px] h-[27px] object-contain mt-5"/>
        <p className='font-poppins font-normal text-[18px] text-black my-5 text-left'>{content}</p>
    </div>
);

export default feedbackCard