import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
<main className='w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1]'>
    {/*Left side*/}
<div className='w-full md:w-[500px] md:mt-14 ml-14'>
    <h1 className='text-3xl  md:text-5xl w-[440px] mt-2 font-extrabold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
    <p className='text-xs mt-3 md:w-[440px] text-[#000000] font-extralight'>Browse through our diverse range of meticulously crafted garments, 
        designed to bring out your individuality and cater to your sense of style.</p>
<button className='bg-black py-2 px-8 text-sm text-white mt-5 rounded-[20px] '>Shop Now</button>
</div>
    {/*Right Side*/}
    <div className='relative'>
       
    <Image src={"/profile2.png"} className='w-[1200px] pr-20' width={1200} height={600} alt="profile"></Image>
    <Image src={"/star.png"} className='w-[40px] absolute top-[170px] left-[450px] ' width={40} height={50} alt="profile"></Image>
    <Image src={"/star.png"} className='w-[60px] absolute top-[40px] left-[760px] ' width={60} height={50} alt="profile"></Image>
    </div>
</main>
  )
}

export default Hero
