import Image from 'next/image';
import { Heart, ShoppingCart } from 'lucide-react';
import { FaSearchPlus } from 'react-icons/fa';
import { client } from '@/sanity/lib/client';


export default function ProductGrid() {
  return (


    <div className="">
{/* top section */}
<header className="mb-8 flex flex-col sm:flex-row sm:justify-center items-center text-center gap-4 sm:gap-9 py-10 ">
  <h1 className="text-xl sm:text-lg text-[#151875] font-medium flex flex-col">
    Ecommerce Accessories & Fashion Item
    <span className="text-[#8A8FB9] text-sm  text-left">About 9,620 results (0.62 seconds)</span>
  </h1>

  
  <div className="flex flex-wrap gap-4 sm:gap-8 mt-4 sm:mt-0 justify-center mb-5">
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Per Page:</span>
      <input
        type="number"
        className="w-16 px-2 py-1 border  "
        defaultValue={12}
      />
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Sort By:</span>
      <select className="px-2 py-1 border  ">
        <option>Best Match</option>
        <option>Price</option>
        <option>Latest</option>
      </select>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">View:</span>
      <input
        type="number"
        className="w-16 px-2 py-1 border  "
        defaultValue={12}
      />
    </div>
  </div>
</header>


{/* Product */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10 my-20">


      {/* Product 1 */}
      <div className="relative group   overflow-hidden bg-white ">
        <div className="bg-[#F6F7FB] p-4 flex justify-center items-center">
          <Image
            src="/g.png"
            alt="Product 1"
            width={201}
            height={201}
            className="w-52 h-52 object-cover"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 hover:scale-125  hover:bg-red-500  rounded-full hover:text-white  duration-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-teal-300  rounded-full hover:text-white duration-100">
              <FaSearchPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-emerald-300  rounded-full hover:text-white duration-100">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-24">
          <h3 className="text-lg font-bold text-[#151875] mb-1 truncate text-center">
          Vel elit euismod
          </h3>
          <div className="flex space-x-1 justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></span>
              
              </div>
          <div className="flex items-center gap-2 text-sm text-center justify-center">
            <span className="text-[#151875] text-sm">$26.00</span>
            <span className="text-[#FB2E86] line-through text-sm">$42.00</span>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="relative group   overflow-hidden bg-white ">
        <div className="bg-[#F6F7FB] p-4 flex justify-center items-center">
          <Image
            src="/h.png"
            alt="Product 1"
            width={201}
            height={201}
            className="w-52 h-52 object-cover"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 hover:scale-125  hover:bg-red-500  rounded-full hover:text-white  duration-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-teal-300  rounded-full hover:text-white duration-100">
              <FaSearchPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-emerald-300  rounded-full hover:text-white duration-100">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-24">
          <h3 className="text-lg sm:text-[16.7px]  font-bold text-[#151875] mb-1  text-center">
          Ultricies condimentum imperdiet  
                  </h3>
          <div className="flex space-x-1 justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></span>
              
              </div>
          <div className="flex items-center gap-2 text-sm text-center justify-center">
            <span className="text-[#151875] text-sm">$26.00 </span>
            <span className="text-[#FB2E86] line-through text-sm">$42.00</span>
          </div>
        </div>
      </div>


{/* 3 */}
<div className="relative group   overflow-hidden bg-white ">
        <div className="bg-[#F6F7FB] p-4 flex justify-center items-center">
          <Image
            src="/i.png"
            alt="Product 1"
            width={201}
            height={201}
            className="w-52 h-52 object-cover"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 hover:scale-125  hover:bg-red-500  rounded-full hover:text-white  duration-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-teal-300  rounded-full hover:text-white duration-100">
              <FaSearchPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-emerald-300  rounded-full hover:text-white duration-100">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-24">
          <h3 className="text-lg font-bold text-[#151875] mb-1 truncate text-center">
          Vitae suspendisse sed
                    </h3>
          <div className="flex space-x-1 justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></span>
              
              </div>
          <div className="flex items-center gap-2 text-sm text-center justify-center">
            <span className="text-[#151875] text-sm">$26.00 </span>
            <span className="text-[#FB2E86] line-through text-sm">$42.00</span>
          </div>
        </div>
      </div>


{/* 4 */}
<div className="relative group   overflow-hidden bg-white ">
        <div className="bg-[#F6F7FB] p-4 flex justify-center items-center">
          <Image
            src="/j.png"
            alt="Product 1"
            width={201}
            height={201}
            className="w-52 h-52 object-cover"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 hover:scale-125  hover:bg-red-500  rounded-full hover:text-white  duration-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-teal-300  rounded-full hover:text-white duration-100">
              <FaSearchPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-emerald-300  rounded-full hover:text-white duration-100">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-24">
          <h3 className="text-lg font-bold text-[#151875] mb-1 truncate text-center">
          Sed at fermentum  
          </h3>
          <div className="flex space-x-1 justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></span>
              
              </div>
          <div className="flex items-center gap-2 text-sm text-center justify-center">
            <span className="text-[#151875] text-sm">$26.00 </span>
            <span className="text-[#FB2E86] line-through text-sm">$42.00</span>
          </div>
        </div>
      </div>


{/* 5 */}
<div className="relative group   overflow-hidden bg-white ">
        <div className="bg-[#F6F7FB] p-4 flex justify-center items-center">
          <Image
            src="/k.png"
            alt="Product 1"
            width={100}
            height={100}
            className="w-52 h-52 "
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 hover:scale-125  hover:bg-red-500  rounded-full hover:text-white  duration-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-teal-300  rounded-full hover:text-white duration-100">
              <FaSearchPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-emerald-300  rounded-full hover:text-white duration-100">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-24">
          <h3 className="text-lg font-bold text-[#151875] mb-1 truncate text-center">
          Fusce pellentesque at
          </h3>
          <div className="flex space-x-1 justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></span>
              
              </div>
          <div className="flex items-center gap-2 text-sm text-center justify-center">
            <span className="text-[#151875] text-sm">$26.00 </span>
            <span className="text-[#FB2E86] line-through text-sm">$42.00</span>
          </div>
        </div>
      </div>

      {/* 6 */}

      <div className="relative group   overflow-hidden bg-white ">
        <div className="bg-[#F6F7FB] p-4 flex justify-center items-center">
          <Image
            src="/l.png"
            alt="Product 1"
            width={201}
            height={201}
            className="w-52 h-52 object-cover"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 hover:scale-125  hover:bg-red-500  rounded-full hover:text-white  duration-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-teal-300  rounded-full hover:text-white duration-100">
              <FaSearchPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-emerald-300  rounded-full hover:text-white duration-100">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-24">
          <h3 className="text-lg font-bold text-[#151875] mb-1 truncate text-center">
          Vestibulum magna laoreet
          </h3>
          <div className="flex space-x-1 justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></span>
              
              </div>
          <div className="flex items-center gap-2 text-sm text-center justify-center">
            <span className="text-[#151875] text-sm">$26.00 </span>
            <span className="text-[#FB2E86] line-through text-sm">$42.00</span>
          </div>
        </div>
      </div>


{/* 7 */}
<div className="relative group   overflow-hidden bg-white ">
        <div className="bg-[#F6F7FB] p-4 flex justify-center items-center">
          <Image
            src="/m.png"
            alt="Product 1"
            width={70}
            height={74}
            className="w-52 h-52 "
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 hover:scale-125  hover:bg-red-500  rounded-full hover:text-white  duration-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-teal-300  rounded-full hover:text-white duration-100">
              <FaSearchPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-emerald-300  rounded-full hover:text-white duration-100">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-24">
          <h3 className="text-lg font-bold text-[#151875] mb-1 truncate text-center">
          Sollicitudin amet orci
          </h3>
          <div className="flex space-x-1 justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></span>
              
              </div>
          <div className="flex items-center gap-2 text-sm text-center justify-center">
            <span className="text-[#151875] text-sm">$26.00 </span>
            <span className="text-[#FB2E86] line-through text-sm">$42.00</span>
          </div>
        </div>
      </div>


{/* 8 */}
<div className="relative group   overflow-hidden bg-white ">
        <div className="bg-[#F6F7FB] p-4 flex justify-center items-center">
          <Image
            src="/n.png"
            alt="Product 1"
            width={201}
            height={201}
            className="w-52 h-52 object-cover"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 hover:scale-125  hover:bg-red-500  rounded-full hover:text-white  duration-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-teal-300  rounded-full hover:text-white duration-100">
              <FaSearchPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-emerald-300  rounded-full hover:text-white duration-100">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-24">
          <h3 className="text-lg font-bold text-[#151875] mb-1 truncate text-center">
          Ultrices mauris sit
          </h3>
          <div className="flex space-x-1 justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></span>
              
              </div>
          <div className="flex items-center gap-2 text-sm text-center justify-center">
            <span className="text-[#151875] text-sm">$26.00 </span>
            <span className="text-[#FB2E86] line-through text-sm">$42.00</span>
          </div>
        </div>
      </div>


{/* 9 */}
<div className="relative group   overflow-hidden bg-white ">
        <div className="bg-[#F6F7FB] p-4 flex justify-center items-center">
          <Image
            src="/o.png"
            alt="Product 1"
            width={201}
            height={201}
            className="w-52 h-52 object-cover"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 hover:scale-125  hover:bg-red-500  rounded-full hover:text-white  duration-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-teal-300  rounded-full hover:text-white duration-100">
              <FaSearchPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-emerald-300  rounded-full hover:text-white duration-100">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-24">
          <h3 className="text-lg font-bold text-[#151875] mb-1 truncate text-center">
          Pellentesque condimentum ac
          </h3>
          <div className="flex space-x-1 justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></span>
              
              </div>
          <div className="flex items-center gap-2 text-sm text-center justify-center">
            <span className="text-[#151875] text-sm">$26.00 </span>
            <span className="text-[#FB2E86] line-through text-sm">$42.00</span>
          </div>
        </div>
      </div>


{/* 10 */}
<div className="relative group   overflow-hidden bg-white ">
        <div className="bg-[#F6F7FB] p-4 flex justify-center items-center">
          <Image
            src="/p.png"
            alt="Product 1"
            width={201}
            height={201}
            className="w-52 h-52 object-cover"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 hover:scale-125  hover:bg-red-500  rounded-full hover:text-white  duration-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-teal-300  rounded-full hover:text-white duration-100">
              <FaSearchPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-emerald-300  rounded-full hover:text-white duration-100">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-24">
          <h3 className="text-lg font-bold text-[#151875] mb-1 truncate text-center">
          Cras scelerisque velit
          </h3>
          <div className="flex space-x-1 justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></span>
              
              </div>
          <div className="flex items-center gap-2 text-sm text-center justify-center">
            <span className="text-[#151875] text-sm">$26.00 </span>
            <span className="text-[#FB2E86] line-through text-sm">$42.00</span>
          </div>
        </div>
      </div>


{/* 11 */}
<div className="relative group   overflow-hidden bg-white ">
        <div className="bg-[#F6F7FB] p-4 flex justify-center items-center">
          <Image
            src="/q.png"
            alt="Product 1"
            width={201}
            height={201}
            className="w-52 h-52 object-cover"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 hover:scale-125  hover:bg-red-500  rounded-full hover:text-white  duration-100">
              <Heart className="w-5 h-5 " />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-teal-300  rounded-full hover:text-white  duration-100">
              <FaSearchPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-emerald-300  rounded-full hover:text-white duration-100">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-24">
          <h3 className="text-lg font-bold text-[#151875] mb-1 truncate text-center">
          Lectus vulputate faucibus
          </h3>
          <div className="flex space-x-1 justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></span>
              
              </div>
          <div className="flex items-center gap-2 text-sm text-center justify-center">
            <span className="text-[#151875] text-sm">$26.00 </span>
            <span className="text-[#FB2E86] line-through text-sm">$42.00</span>
          </div>
        </div>
      </div>


{/* 12 */}
<div className="relative group   overflow-hidden bg-white ">
        <div className="bg-[#F6F7FB] p-4 flex justify-center items-center">
          <Image
            src="/j.png"
            alt="Product 1"
            width={201}
            height={201}
            className="w-52 h-52 object-cover"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 hover:scale-125  hover:bg-red-500  rounded-full hover:text-white  duration-100">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-teal-300  rounded-full hover:text-white duration-100">
              <FaSearchPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:scale-125  hover:bg-emerald-300  rounded-full hover:text-white duration-100">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between h-24">
          <h3 className="text-lg font-bold text-[#151875] mb-1 truncate text-center">
          Purus risus, ut
                    </h3>
          <div className="flex space-x-1 justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></span>
                <span className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></span>
              
              </div>
          <div className="flex items-center gap-2 text-sm text-center justify-center">
            <span className="text-[#151875] text-sm">$26.00 </span>
            <span className="text-[#FB2E86] line-through text-sm">$42.00</span>
          </div>
        </div>
      </div>
    </div>


    <div className="flex items-center justify-center mb-20">
      <Image
      src="/27.png"
      width={904}
      height={93}
      alt="images"
      />

    </div>

    </div>
  );
}
