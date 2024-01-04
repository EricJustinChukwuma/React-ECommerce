import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import hero_image from "../assets/Nonny_Bro.png";
import { BiSolidHand} from "react-icons/bi";


const Hero = () => {
  return (
    <div className='hero h-[100vh] bg-gradient-to-t from-[#fde1ff] to-[#e1ffea22]/60 flex'>
        <div className='hero-left flex-1 flex flex-col justify-center gap-[20px] pl-[180px] leading-[1.1]'>
            <h2 className='text-[#090909] text-[26px] font-semibold'>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon flex items-center gap-[20px]'>
                    <p className='text-[#171717] text-[100px] font-bold'>new</p>
                    <BiSolidHand size={105} className='-rotate-45'/>
                </div>
                <p className='text-[#171717] text-[100px] font-bold'>collections</p>
                <p className='text-[#171717] text-[100px] font-bold'>for everyone</p>
            </div>
            <div className='hero-latest-btn flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-full mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium cursor-pointer active:bg-gray-300'>
                <div>Latest Collection</div>
                <AiOutlineArrowRight />
            </div>
        </div>

        <div className='hero-right flex-1 flex items-center justify-center'>
            <img src={hero_image} alt="" height="350" width="350"/>
        </div>
    </div>
  )
}

export default Hero