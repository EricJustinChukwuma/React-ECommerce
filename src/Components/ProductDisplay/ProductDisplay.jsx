import React from 'react'
// import "./ProductDisplay.css";
import { FaStar } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const ProductDisplay = ({product}) => {
  return (
    <div className=''>
        <div className='productdisplay-left'>
            <div className="productdisplay-img-list flex">
                <img src={product.image} alt="" className='w-[350px] h-[500px]' />
                <img src={product.image} alt="" className='w-[350px] h-[500px]' />
                <img src={product.image} alt="" className='w-[350px] h-[500px]' />
                <img src={product.image} alt="" className='w-[350px] h-[500px]' />
            </div>
            <div className="productdisplay-image">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className="productdisplay-right-start flex">
                <AiFillStar size={30} className='text-[gold]'/>
                <AiFillStar size={30} className='text-[gold]'/>
                <AiFillStar size={30} className='text-[gold]'/>
                <AiFillStar size={30} className='text-[gold]'/>
                <AiOutlineStar size={30} className='text-[gold]'/>
            </div>
            <p>(122)</p>
            <div className="productdisplay-right-prices">
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-price-new'>${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight, usually knitted, pullover shirt, close-fitting and witha round neckline and short sleeves, worn as an undershirt or outershirt
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXl</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className='productdisplay-right-catergory'>
                <span>Category :</span>Women , T-SHirt, Crop-Top
            </p>
            <p className='productdisplay-right-catergory'>
                <span>Tags :</span>Modern , Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay