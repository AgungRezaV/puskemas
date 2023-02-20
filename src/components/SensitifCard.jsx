
const SensitifCard = ({ content, icon }) => (
    <div id="ciri_card" className='
        flex 
        flex-col
        content  
        w-[350px] 
        mt-10 
        transition 
        ease-in-out 
        hover:-translate-y-1 
        hover:scale-110
        hover:duration-500
        hover:bg-blue-200 
        rounded-[10px]'
    >
        <p className='font-poppins text-center font-normal text-[18px] text-black my-5 md:mx-0 mx-5 text-left'>{content}</p>
    </div>
);

export default SensitifCard