import React from 'react';
import { FaInstagram, FaPinterest, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { AiTwotoneShop, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center gap-[50px]'>
      <div className='footer-logo flex items-center gap-[20px]'>
        <AiTwotoneShop size={75}/>
        <p className='text-[#383838] text-[46px] font-bold'>SHOPPER</p>
      </div>
      <ul className="footer-links flex list-none gap-[50px] text-[#252525] text-[20px]">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icon flex gap-[20px]">
        <div className="footer-icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <FaInstagram size={45} />
        </div>
        <div className="footer-icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <FaPinterest size={45} />
        </div>
        <div className="footer-icons-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <FaWhatsapp size={45} />
        </div>
      </div>
      <div className="footer-copyright flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]">
        <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]'/>
        <p> &copy; CopyRight @ 2023 - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer