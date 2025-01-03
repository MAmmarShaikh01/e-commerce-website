export default function Contact() {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center ">
        <div className=" w-full ">
          {/* Header */}
          <header className="text-center justify-center flex bg-[#F6F5FF] mb-12 h-32 sm:h-[286px] flex-col ">
            <h1 className="text-4xl font-bold text-[#151875] ml-2 ">Contact Us</h1>
            <p className="text-[#8A8FB9]">
              Home &gt; Pages &gt; <span className="text-blue-600">Contact Us</span>
            </p>
          </header>
          <div className="ml-2 sm:ml-32">
  
          {/* Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#151875]">Information About Us</h2>
              <p className="text-[#8A8FB9] text-sm sm:text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
              </p>
              <div className="flex space-x-4">
                <span className="w-[25px] h-[25px] rounded-full bg-[#5726DF]"></span>
                <span className="w-[25px] h-[25px] rounded-full bg-[#FF27B7]"></span>
                <span className="w-[25px] h-[25px] rounded-full bg-[#37DAF3]"></span>
              
              </div>
            </div>
  
       {/* Right Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-5">
  <h2 className="text-2xl font-bold mb-4 text-[#151875] col-span-full">Contact Way</h2>
  <ul className="space-y-9 text-[#8A8FB9]">
    
    <li className="flex items-center">
      <span className="w-[45px] h-[45px] rounded-full bg-[#5726DF] inline-block mr-2"></span>
      Tel: 877-67-86-99
      <br />
      E-mail: shop@store.com
    </li>

    <li className="flex items-center">
      <span className="w-[45px] h-[45px] rounded-full bg-[#FFB265] inline-block mr-2"></span>
      20 Margaret st, London
      <br />
      Great britain, 3NM98-LK
    </li>

  </ul>
  <ul className="space-y-9 text-[#8A8FB9]">
   
    <li className="flex items-center">
      <span className="w-[45px] h-[45px] rounded-full bg-[#FB2E86] inline-block mr-2"></span>
      Support Forum
      <br />
      for over 24hr
    </li>

    <li className="flex items-center">
      <span className="w-[45px] h-[45px] rounded-full bg-[#1BE982] inline-block mr-2"></span>
      Free standard shipping
      <br />
      on all orders.
    </li>
  </ul>

</div>

          </div>
  
          {/* Get in Touch Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Form */}
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl text-[#151875] font-bold mb-4">Get In Touch</h2>
              <p className="text-[#8A8FB9] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <textarea
                  placeholder="Type Your Message"
                  className="border border-gray-300 rounded-md p-2 w-full h-32"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#FB2E86] text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
                >
                  Send Mail
                </button>
              </form>
            </div>
  
            {/* Right Image */}
            <div className="bg-white p-6 rounded-lg flex items-center justify-center ">
              <img
                src="/e.png"
                alt="Contact Illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }