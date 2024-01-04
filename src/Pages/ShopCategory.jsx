import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Banner from '../Components/Banner';


const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <Banner banner={props.banner}/>

    </div>
  )
}

export default ShopCategory