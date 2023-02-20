import { useState } from 'react'

import { close, logoWeb, menu } from '../assets';
import { navLinks } from '../constants';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex padding py-6 justify-between items-center'>
            <img src={logoWeb} alt="logo" className='w-[128px] h-[50%]' />

            <ul className='list-non md:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[18px] outline-1 text-center z-[5]
                    ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} mr-15`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='md:hidden flex flex-1 justify-end items-center z-[5] text-white'>
                <img
                    src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} 
                    p-6 bg-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar}`}
                >
                    <ul className='list-non flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] outline-1 
                                ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                            >
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar