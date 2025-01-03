import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
<header className="text-center justify-center flex bg-[#F6F5FF] mb-12 h-32 sm:h-[286px] flex-col ">
            <h1 className="text-4xl font-bold text-[#151875] ml-2 ">My Account</h1>
            <p className="text-[#8A8FB9]">
              Home &gt; Pages &gt; <span className="text-blue-600">Contact Us</span>
            </p>
          </header>





    <div className="flex items-center justify-center h-screen flex-col">
        
      <div className="bg-white shadow-xl w-[400px] sm:w-[544px] h-[450px] sm:h-[474px] flex flex-col border p-7 mt-10 mb-10">
        {/* Login Heading */}
        <h1 className="text-3xl font-black text-center pb-2">Login</h1>
        <p className="text-[#9096B2] text-[17px] text-center mb-10">Please login using account detail bellow.</p>
     
      <div className="space-y-5 flex flex-col"> 
    <input 
    type="text"
    placeholder="Email Address"
    className="text-[#9096B2] text-base border rounded-sm outline-none h-[52px] p-2 "
    >
    </input>

    <input 
    type="password"
    placeholder="Password"
    className="text-[#9096B2] text-base border rounded-sm outline-none h-[52px] p-2 "
    
    >
    </input>
    {/* forgot password */}
    <a href="#" className="text-[17px] text-[#9096B2] hover:underline  ">Forgot your password?</a>
    
    </div>
    <br/>
    <button className="bg-[#FB2E86] hover:bg-[#FB2E90] text-white font-bold h-[47px]">
        Sign Up
    </button>

    <p className="text-[#9096B2] text-[17px] text-center mt-6">Don’t have an Account? <a href="#" className=" hover:underline ">Create account</a></p>

      </div>

<div className="">
<Image
src="/27.png"
width={904}
height={93}
alt="images"

/>
</div>


    </div>
    </div>
  );
}
