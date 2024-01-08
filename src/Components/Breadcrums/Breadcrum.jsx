import React from 'react';
import { BiRightArrow } from "react-icons/bi"

const Breadcrum = ({product}) => {
  // const product = props;

  return (
    <div className='breadcrum flex items-center gap-[8px] text-[16px] font-semibold my-[60px] mx-[110px] capitalize'>
      HOME <BiRightArrow /> SHOP <BiRightArrow /> {product.category} <BiRightArrow /> {product.name}
    </div>
  )
}

export default Breadcrum