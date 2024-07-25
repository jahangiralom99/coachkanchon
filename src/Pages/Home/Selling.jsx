/* eslint-disable react/no-unescaped-entities */
import { FaArrowUpLong } from "react-icons/fa6";
import img1 from "../../assets/Asset-2-1.png";
import money from "../../assets/money-machine-2-600x824.png";

const Selling = () => {
  return (
    <div className="bg-white mt-12 pb-96">
      <div className="pt-12">
        <h1 className="text-2xl text-red-500 font-bold text-center">
          EXPLORE COACH KANCHON'S WRITTEN MASTERPIECES
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-5 justify-center mt-8">
          <img src={img1} alt="" />
          <div className="text-[#d0a065] space-y-2">
            <h1 className="text-2xl font-bold ">#NO-1</h1>
            <h1 className="text-2xl font-bold ">BEST-SELLING AUTHOR</h1>
          </div>
        </div>
        {/* money machine */}
        <div className="text-center mt-8">
          <img className="inline shadow-2xl" src={money} alt="" />
        </div>
        {/* button একটু পড়ে দেখুন */}
        <div className="mt-12 w-96 mx-auto">
          <button className="text-xl font-bold border rounded-xl p-3 border-black text-red-500 flex gap-3 items-center">
            একটু পড়ে দেখুন
            <FaArrowUpLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selling;
