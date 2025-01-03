
import React from 'react'
import Image from 'next/image';
// import Header from './components/Header/Header'
// import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Products from './components/Home/Products';
import Leatest from './components/Home/Leatest'
import Offer from './components/Home/Offer'
import Trending1 from './components/Home/Trending1'
import Trending2 from './components/Home/Trending2'
import Discount from './components/Home/Discount'
import Categories from './components/Home/Categories'
import Blog from './components/Home/Blog'


export default function page() {
  return (
    <div>









{/* <Header/>
<Navbar/> */}
<Home/>
<Products/>
<Leatest/>
<Offer/>
<br/>
<Trending1/>
<br/>
<Trending2/>
<br/>
<Discount/>
<br/>
<Categories/>
{/* letaest updte */}
<div className="relative">
  <Image
    src="/26.png"
    alt="update"
    width={1930}
    height={462}
    className="w-full h-auto"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6">

    <h3 className="text-sm sm:text-2xl md:text-4xl text-[#151875] font-extrabold mb-2 sm:mb-4 text-center">
      Get Latest Update By Subscribing to Our Newsletter
    </h3>
    

    <button className="px-2 sm:px-6 py-2 sm:py-3 bg-[#FB2E86] text-white text-xs sm:text-xl rounded-sm sm:rounded-lg hover:bg-[#FB2f98] transition duration-200">
      Shop Now
    </button>
  </div>
</div>

{/* logos image */}
<div className="flex justify-center items-center py-18 sm:py-24">
  <Image
  src="/27.png"
  width={904}
  height={93}
  alt="logoos"
  />
</div>
<br/>
<Blog/>





{/* <Contact/> */}
    </div>
  )
}
