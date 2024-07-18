import { IoMdArrowRoundForward } from "react-icons/io";
import asset from "../../assets/Asset-circle-300x71.png";
import asset2 from "../../assets/Asset-1-1-150x85.png";
import asset3 from "../../assets/Asset-3-150x85.png";

const WinningBusiness = () => {
  return (
    <div>
      {/* button section */}
      <div className="text-center mt-12">
        <button className="text-white uppercase px-6 py-2 border rounded-lg">
          Register Now
        </button>
        <p className="text-sm mt-8 text-white font-semibold">
          Click the link above to Register now.
        </p>
        <p className="text-sm text-white font-semibold">
          Your business can’t afford to miss this.
        </p>
      </div>
      {/* business part */}
      <div className="mt-12 bg-red-500 rounded-lg max-w-screen-md mx-auto p-12">
        <h1 className="text-center font-bold text-xl text-white">
          বিজনেসে জয়ী হতে আপনার দরকার...
        </h1>
        <div className="flex items-center justify-center mt-14">
          <p className="bg-white p-4 rounded-l-lg ">
            <IoMdArrowRoundForward className="text-2xl rotate-45 text-red-500 font-bold" />
          </p>
          <p className="bg-black md:w-96 py-4 text-white px-8 font-bold rounded-r-md">
            রাইট মাইন্ডসেট
          </p>
        </div>
        <div className="flex items-center justify-center mt-3">
          <p className="bg-white p-4 rounded-l-lg ">
            <IoMdArrowRoundForward className="text-2xl rotate-45 text-red-500 font-bold" />
          </p>
          <p className="bg-black md:w-96 py-4 text-white px-8 font-bold rounded-r-md">
            প্রুভেন স্ট্র‍্যাটেজি
          </p>
        </div>
        <div className="flex items-center justify-center mt-3">
          <p className="bg-white p-4 rounded-l-lg ">
            <IoMdArrowRoundForward className="text-2xl rotate-45 text-red-500 font-bold" />
          </p>
          <p className="bg-black md:w-96 py-4 text-white px-8 font-bold rounded-r-md">
            অ্যাডভান্স মার্কেটিং
          </p>
        </div>
        <div className="flex items-center justify-center mt-3">
          <p className="bg-white p-4 rounded-l-lg ">
            <IoMdArrowRoundForward className="text-2xl rotate-45 text-red-500 font-bold" />
          </p>
          <p className="bg-black md:w-96 py-4 text-white px-8 font-bold rounded-r-md">
            মানি ম্যানেজমেন্ট স্কিল
          </p>
        </div>

        {/* ভার্চুয়াল এই 'বিজনেস মাস্টারি' */}
        <div className="bg-white p-9 text-center rounded-xl mt-12">
          <p className="text-2xl font-bold text-red-500">
            ভার্চুয়াল এই 'বিজনেস মাস্টারি' সেশনে আমরা এই সবগুলো জিনিসই কাভার
            করবো।
          </p>
          <h3 className="mt-4 text-3xl font-bold">তাও Absolutely ফ্রি !!!</h3>
        </div>
        <div className="text-center mt-8 relative">
          <h1 className="text-3xl font-bold text-white ">
            GRAB YOUR SEAT NOW!
          </h1>
          <p className="text-white uppercase mt-4 text-xl font-semibold">
            Limit Time Offer
          </p>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0 md:-translate-y-3">
            <img src={asset} alt="" />
          </div>
        </div>
        {/* button  */}
        <div className="mt-36 flex items-center justify-center gap-6 ">
          <div>
            <img className="w-20" src={asset2} alt="" />
          </div>
          <div>
            <button className="py-4 px-8 bg-black font-bold rounded text-white">ENROLL NOW</button>
          </div>
          <div>
            <img className="w-20" src={asset3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinningBusiness;
