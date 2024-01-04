import React from 'react'

const LoginSignUp = () => {
  return (
    <div className='loginsignup  bg-[#fce3fe] py-[80px] mb-10'>
      <div className="loginsignup-container w-[580px] h-[650px] bg-white m-auto py-[40px] px-[60px]">
        <h1 className='my-2.5 mx-0 text-[36px]'>Sign Up</h1>
        <form>
          <div className="loginsignup-fields flex flex-col gap-[29px] mt-[20px]">
            <input type="text" placeholder='Your Name' className='h-[62px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]'/>
            <input type="email" placeholder='Email Address' className='h-[62px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]'/>
            <input type="password" placeholder='Password' className='h-[62px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]'/>
          </div>
          <button className='w-full h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-medium cursor-pointer'>Continue</button>
        </form>
        <p className="loginsignup-login mt-[20px] flex text-[#5c5c5c] text-[18px] font-medium">
          Already have an account? <span className='text-[#ff4141] font-semibold'>Login here</span>
        </p>
        <div className="loginsignup-agree flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp