import React from 'react';
// import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className='description-box my-[120px] mx-[110px]'>
        <div className="descriptionbox-navigator flex">
            <div className="descriptionbox-nav-box flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border border-[#d0d0d0]">Description</div>
            <div className="descriptionbox-nav-box flex items-center justify-center border border-[#d0d0d0] bg-[#fbfbfb] text-[#555] w-[171px] h-[70px]">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description flex flex-col gap-[25px] border border-[#d0d0d0] p-[48px] pb-[70px]">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet and serves as a virtual marketplace where businesses and individual can showcase their products, ineract with customers, and conduct legal transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenient mode of accessibility, and global reach they offer</p>
            <p>
                E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox