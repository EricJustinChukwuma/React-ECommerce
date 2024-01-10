import React, { useContext } from 'react';
import { FaTimesCircle } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
    const { getTotalCartAmount, all_products, cartItems, removeFromCart} = useContext(ShopContext);

    return (
      <div className='cartitems my-[100px] mx-[110px]'>
        <div className="cartitems-format-main grid items-center gap-[75px] py-[20px] px-0 text-[#454545] text-[18px] font-semibold">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className='h-[3px] bg-[#e2e2e2] border-0'/>
        {
            all_products.map((e, i) => {
              if(cartItems[e.id] > 0) {
                return  <div key={i}>
                          <div className="cartitems-format cartitems-format-main  grid items-center gap-[75px] py-[20px] px-0 text-[#454545] text-[17px] font-medium">
                            <img src={e.image} alt="" className='carticon-product-icon h-[100px] w-[100px]'/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity w-[64px] h-[50px] border-2 border-[#ebebeb] bg-white rounded-[3px]'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <FaTimesCircle onClick={()=> removeFromCart(e.id)} className='text-[20px] my-0 mx-[40px] text-red cursor-pointer'/>
                          </div>
                          <hr />
                        </div>
              }
              return null;
            })
          }
          <div className="cartitems-down flex my-[100px] mx-0 ">
            <div className="cartitems-total flex-1 flex flex-col mr-[200px] gap-[40px]">
              <h1>Cart Totals</h1>
              <div>
                <div className='cartitems-total-item flex justify-between py-[15px] px-0'>
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item flex justify-between py-[15px] px-0">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item flex justify-between py-[15px] px-0">
                  <h3 className='font-bold'>Total</h3>
                  <h3 className='font-bold'>${getTotalCartAmount()}</h3>
                </div>
              </div>
              <button className='w-[262px] h-[58px] outline-none border-none bg-[#ff4141] text-[#fff] text-[16px] font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
            </div>

            <div className="cartitems-promocode flex-1 text-[16px] font-medium">
              <p className='text-[#555]'>If you have a promo code, Enter it here!</p>
              <div className='cartitems-promobox flex w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea]'>
                <input type="text" placeholder='promo code' className='border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]'/>
                <button className='w-[170px] h-[58px] text-[16px] bg-black text-white cursor-pointer'>Submit</button>
              </div>
            </div>
          </div>
      </div>
    )
}

export default CartItems