import React, { useContext } from 'react'
// import "./ProductDisplay.css";
import { FaStar } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = ({product}) => {
    const { addToCart } = useContext(ShopContext);

  return (
    <div className='productdisplay flex my-0 mx-[110px]'>
        <div className='productdisplay-left flex gap-[17px]'>
            <div className="productdisplay-img-list flex flex-col gap-[16px]">
                <img src={product.image} alt="" className='w-[250px] h-[163px]' />
                <img src={product.image} alt="" className='w-[250px] h-[163px]' />
                <img src={product.image} alt="" className='w-[250px] h-[163px]' />
                <img src={product.image} alt="" className='w-[250px] h-[163px]' />
            </div>
            <div className="productdisplay-image">
                <img className='productdisplay-main-img w-[600px] h-[760px]' src={product.image} alt="" />
            </div>
        </div>
        <div className='productdisplay-right my-0 mx-[70px] flex flex-col '>
            <h1 className='text-[##d3d3d] text-[40px] font-bold'>{product.name}</h1>
            <div className="productdisplay-right-stars flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px]">
                <AiFillStar size={25} className='text-[gold]'/>
                <AiFillStar size={25} className='text-[gold]'/>
                <AiFillStar size={25} className='text-[gold]'/>
                <AiFillStar size={25} className='text-[gold]'/>
                <AiOutlineStar size={25} className='text-[gold]'/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices flex my-[30px] mx-0 gap-[30px] text-[24px] font-bold">
                <div className='productdisplay-right-price-old text-[#818181]'>${product.old_price}</div>
                <div className='productdisplay-right-price-new text-[#ff4141]'>${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight, usually knitted, pullover shirt, close-fitting and witha round neckline and short sleeves, worn as an undershirt or outershirt
            </div>
            <div className="productdisplay-right-size">
                <h1 className='mt-[30px] text-[#656565] text-[20px] font-semibold'>Select Size</h1>
                <div className="productdisplay-right-sizes flex my-[30px] mx-0 gap-[20px]">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXl</div>
                </div>
            </div>
            <button onClick={()=> addToCart(product.id)} className='py-[20px] px-[40px] w-[200px] text-[16px] font-semibold text-white bg-[#ff4141] mb-[40px] border-none outline-none cursor-pointer'>
                ADD TO CART
            </button>
            <p className='productdisplay-right-catergory mt-[10px]'>
                <span className='font-semibold'>Category :</span> Women , T-SHirt, Crop-Top
            </p>
            <p className='productdisplay-right-catergory mt-[10px]'>
                <span className='font-semibold'>Tags :</span> Modern , Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay