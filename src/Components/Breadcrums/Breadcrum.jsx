import React from 'react';
import { BiRightArrow } from "react-icons/bi"

const Breadcrum = ({product}) => {
  // const product = props;

  return (
    <div className='breadcrum'>
      HOME <BiRightArrow /> SHOP <BiRightArrow /> {product.category} <BiRightArrow /> {product.name}
    </div>
  )
}

export default Breadcrum