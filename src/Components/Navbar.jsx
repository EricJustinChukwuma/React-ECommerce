import React, { useState } from 'react';
import { AiOutlineShoppingCart, AiTwotoneShop } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    const handleMenuChange = (currentMenu) => {
        setMenu(currentMenu)
    }

    return (
        <div className='navbar flex justify-around items-center py-4 px-4 md:px-24 shadow-md'>
            <div className='nav-logo mr-auto flex items-center gap-[5px] md:gap-[10px]'>
                <AiTwotoneShop size={60}/>
                <p className='text-[#171717] text-[20px] md:text-[38px] font-semibold'>SHOPPER</p>
            </div>
            <ul className='nav-menu mr-auto flex items-center gap-[20px] md:gap-[50px] list-none text-[#626262] text-sm md:text-[20px] font-[500]'>
                <Link to={"/"}>
                    <li onClick={()=>  handleMenuChange("shop")} className='flex flex-col items-center cursor-pointer gap-[3px]'>
                        Shop {menu === "shop" ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#ff4141]'/> : <></>}
                    </li>
                </Link>
                <Link to={"/mens"}>
                    <li onClick={()=> handleMenuChange("mens")} className='flex flex-col items-center cursor-pointer gap-[3px]'>
                        Men {menu === "mens" ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#ff4141]'/> : <></>}
                    </li>
                </Link>
                <Link to={"/womens"}>
                    <li onClick={()=> handleMenuChange("womens")} className='flex flex-col items-center cursor-pointer gap-[3px]'>
                        Women {menu === "womens" ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#ff4141]'/> : <></>}
                    </li>
                </Link>
                <Link to={"/kids"}>
                    <li onClick={()=> handleMenuChange("kids")} className='flex flex-col items-center cursor-pointer gap-[3px]'>
                        Kids {menu === "kids" ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#ff4141]'/> : <></>}
                    </li>
                </Link>
            </ul>
            <div className='nav-login-cart flex items-center gap-[45px]'>
                <Link to="/login">
                    <button className='w-[157px] h-[58px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-[500] bg-white cursor-pointer active:bg-[#f0f0f0]'>
                        Login
                    </button>
                </Link>
                <Link to="/cart">
                    <AiOutlineShoppingCart size={50} className='cursor-pointer'/>
                </Link>
                <div className='nav-cart-count w-[22px] h-[22px] bg-red flex justify-center items-center rounded-full -mt-[35px] -ml-[55px] text-[14px] text-white'>0</div>
            </div>
        </div>
    )
}

export default Navbar