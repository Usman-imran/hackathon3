import React from 'react'
import { HiX } from "react-icons/hi";

const Announce = () => {
    return (
        <main className='w-full h-[38px] bg-black flex justify-center items-center relative text-white'>
            <div className='text-xs sm:text-sm flex justify-center items-center'>
             <h3>Sign up and get 20% off to your first order.</h3>
             <button className='ml-2 text-xs sm:text-sm'>Sign Up Now</button>
            </div>
            <div className='absolute right-[100px] hidden sm:block'>
            <HiX />
            </div>
        </main>
    )
}

export default Announce
