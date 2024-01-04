import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Banner from '../Components/Banner';
import Item from '../Components/Item/Item';
// Icon
import { FaCaretDown } from "react-icons/fa"


const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <Banner banner={props.banner}/>
      <div className="shopcategory-indexsort flex my-0 mx-[108px] justify-between items-center">
        <p>
          <span className='font-semibold'>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort flex justify-center items-center py-2.5 px-5 rounded-[40px] border border-[#888]">
          Sort By <FaCaretDown size={32} />
        </div>
      </div>
      <div className="shopcategory-products my-5 mx-[90px] grid grid-cols-4 gap-y-[80px] gap-x-10">
        {
          all_products.map((item, i) => {
            if(props.category === item.category) {
              return <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}
              />
            } else {
              return null;
            }
          })
        }
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory