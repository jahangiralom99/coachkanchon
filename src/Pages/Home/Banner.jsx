// import moment from "moment";
import { FaFacebookSquare, FaGraduationCap } from "react-icons/fa";
import img from "../../assets/Business-Mastery-e1720094539202-768x665.jpg";
import img2 from "../../assets/Brain-Icon.webp"

const Banner = () => {

  return (
    <div className="max-w-screen-lg mx-auto pt-24 pb-12 px-6">
      <div className="flex flex-col md:flex-row justify-center gap-12 items-center ">
        <div className="flex w-full items-center justify-center gap-6 bg-white rounded-md p-8 ">
          <h1 className="md:text-7xl text-4xl font-extrabold text-red-500">ফ্রি!</h1>
          <div className="space-y-2">
            <h2 className="md:text-5xl text-xl font-extrabold text-red-500">BUSINESS</h2>
            <p className="text-[#d0a065] text-2xl font-extrabold">
              MASTERY SESSION
            </p>
          </div>
        </div>
        {/* Banner time */}
        <div className="text-white mt-12">
          <div className="flex items-center justify-center flex-wrap lg:flex-nowrap text-center gap-12">
            <div className="border p-3 ">
              <p className="p-3 px-5 -mt-12 bg-red-500 font-bold text-3xl rounded">
                12
              </p>
              <p className="text-xl font-bold">Days</p>
            </div>
            <div className="border p-3 ">
              <p className="p-3 px-5 -mt-12 bg-red-500 font-bold text-3xl rounded">
                12
              </p>
              <p className="text-xl font-bold">Days</p>
            </div>
            <div className="border p-3 ">
              <p className="p-3 px-5 -mt-12 bg-red-500 font-bold text-3xl rounded">
                12
              </p>
              <p className="text-xl font-bold">Days</p>
            </div>
            <div className="border p-3 ">
              <p className="p-3 px-5 -mt-12 bg-red-500 font-bold text-3xl rounded">
                12
              </p>
              <p className="text-xl font-bold">Days</p>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Image */}
      <div className="text-center mt-12">
        <img className="inline" src={img} alt="" />
      </div>
      {/* banner S Media */}
      <div className="text-white relative h-[520px] md:h-[430px] bg-[#1c1c1c] max-w-screen-lg mx-auto md:space-y-5 p-10 border rounded-xl text-center mb-12">
        <h3 className="text-xl">3 DAYS BUSINESS MASTERY</h3>
        <h2 className="text-2xl font-semibold">INNOVATE, EXECUTE, DOMINATE</h2>
        <h1 className="text-3xl font-bold text-red-500 md:text-white">FREE ONLINE SESSION</h1>
        <p className="font-semibold text-[#d0a065] md:text-white">18-20 JULY 2024</p>
        <p className="font-semibold text-[#d0a065] md:text-white">Time: 9PM - 11PM</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <FaFacebookSquare className="text-5xl" />
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">ONLINE PROGRAM</h2>
            <h2 className="text-2xl font-semibold">FACEBOOK GROUP</h2>
          </div>
        </div>
        <div className="flex border items-center justify-center gap-6 p-4 bg-[#1c1c1c] rounded-lg mt-[80px]">
          <FaGraduationCap className="text-6xl text-red-500" />
          <div>
            <h1 className="text-3xl font-bold text-red-500">REGISTRATION IS OPEN</h1>
            <button className="text-xl">Click to register</button>
          </div>
        </div>
      </div>
      {/* small image */}
      <div className="text-center mt-28">
        <img className="inline" src={img2} alt="" />
      </div>
    </div>
  );
};

export default Banner;
