



export default function GeneralInformation() {
    return (
      <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col">
        <div className="grid gap-8 md:grid-cols-2">
          {/* General Information Section */}
          <div className="space-y-8">
            <h1 className="text-4xl font-semibold text-[#1D3178]">General Information</h1>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-[#1D3178] mb-8">
                  Eu dictumst cum et sed vestimeed condimentum?
                </h2>
                <p className="text-[#a1abcc] mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
  
              <div>
                <h2 className="text-lg font-medium  text-[#1d3178] mb-8">
                  Magna bibendum est fermentum eros.
                </h2>
                <p className="text-[#a1abcc] mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
  
              <div>
                <h2 className="text-lg font-medium  text-[#1d3178] mb-8">
                  Odio muskana hak eris convectus scelerisq?
                </h2>
                <p className="text-[#a1abcc] mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
  
              <div>
                <h2 className="text-lg font-medium  text-[#1d3178] mb-8">
                  Elit id blandit sebore bei velit gue more?
                </h2>
                <p className="text-[#a1abcc] mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
            </div>
          </div>
  
          {/* Ask a Question Form */}
          <div className="bg-[#F8F8FD] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#1D3178] mb-6">Ask a Question</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-white"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject*"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none  bg-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Type Your Message*"
                //   rows="4"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none  bg-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#FB2E86] hover:bg-[#ec5596] text-white py-2 px-4 rounded-sm"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}
