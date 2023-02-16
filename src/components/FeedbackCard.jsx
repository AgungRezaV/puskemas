

const feedbackCard = ({ content, icon }) => (
    <div id="ciri_card" className='flex content flex-col w-[350px] mt-10 ml-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-500 ...'>
        <img src={icon} alt="quotes" className="w-[42px] h-[42px] mt-5 center"/>
        <p className='font-poppins text-center font-normal text-[18px] text-black my-5 text-left'>{content}</p>
    </div>
);

export default feedbackCard