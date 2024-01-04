import React from 'react';


const Banner = ({banner}) => {
  return (
    <>
        <div className='flex bg-gradient-to-r from-orange-100 to-yellow-500/0 px-24 h-[55vh] my-[30px] mx-auto w-[84%]'>
            <div className='mr-auto'>
                <h1 className='text-orange-500 text-[90px]'>FLAT 50% OFF</h1>
                <p className='text-[45px] mb-8'><span className='text-orange-500'>12</span> Hours <span className='text-orange-500'>20</span> Mins</p>
                <button className='bg-orange-500 px-12 py-4 text-[23px] text-white rounded-full cursor-pointer'>Explore now</button>
            </div>
            <div>
                <img src={banner} alt="" className='w-auto h-[55vh]'/>
            </div>
        </div>
    </>
  )
}

export default Banner