import React from 'react'

const Button = ({ styles }) => {
    return (
        <button type="button" className={`py-4 px-6 bg-green-600 rounded-[5px] font-poppins font-medium text-[18px] text-primary outline-none ${styles} transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300`}>
            Chat WhatsApp
        </button>
    )
}

export default Button