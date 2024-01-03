import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      
    </div>
  )
}

export default ShopCategory