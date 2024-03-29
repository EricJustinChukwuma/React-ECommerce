import React from 'react';
import data_products from "../../assets/Data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-[10px] h-[90vh]'>
        <h1 className='text-[#171717] text-[50px] font-semibold'>POPULAR IN WOMEN</h1>
        <hr className='w-[200px] h-[1px] rounded-[10px] bg-[#252525]'/>
        <div className='popular-item mt-[50px] flex gap-[30px] px-20'>
            {
                data_products.map((item, i) => (
                    <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        new_price={item.new_price} 
                        old_price={item.old_price}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Popular