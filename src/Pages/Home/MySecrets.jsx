import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import profile from "../../assets/Asset-12-600x876.png";
import asset1 from "../../assets/Asset-333.png";
import asset2 from "../../assets/Asset-444.png";
import asset3 from "../../assets/Asset-555.png";
import { HiCheckCircle } from "react-icons/hi";

const MySecrets = () => {
  return (
    <div className="bg-white -mt-6">
      <div className="pt-32 max-w-screen-lg mx-auto ">
        <h3 className="text-3xl bg-red-500 p-4 text-center text-white">
          I AM SO EXCITED TO SHARE WITH YOU
        </h3>
        <h1 className="text-6xl font-bold text-center text-red-500 p-4 bg-[#efefef]">
          MY SECRETS
        </h1>
      </div>
      <p className="text-2xl mt-4 font-bold text-center text-red-500">
        WHAT I HAVE LEARNED LAST 17 YEARS.
      </p>
      <div className="mt-28 text-center">
        <img className="inline " src={profile} alt="" />
      </div>
      <div className="bg-black  -mt-80">
        <div className="pt-96 text-white text-center">
          <p className="font-bold ">Coach Kanchon</p>
          <div className="flex flex-col items-center justify-start">
            <p className="flex items-center justify-center gap-4 mt-12">
              <MdKeyboardDoubleArrowRight className="text-2xl text-red-500 " />{" "}
              Build Multiple 8-Figure Businesses
            </p>
            <p className="flex items-center justify-center gap-4 mt-4">
              <MdKeyboardDoubleArrowRight className="text-2xl text-red-500 " />{" "}
              Coached over 20,000 people
            </p>
            <p className="flex items-center  gap-4 mt-4">
              <MdKeyboardDoubleArrowRight className="text-2xl text-red-500 " />{" "}
              Wrote 2X Rokomari No#1 Bestseller
            </p>
            <p className="flex items-center justify-center gap-4 mt-4">
              <MdKeyboardDoubleArrowRight className="text-2xl text-red-500 " />{" "}
              Build Multiple 8-Figure Businesses
            </p>
            <p className="flex items-center justify-center gap-4 mt-4">
              <MdKeyboardDoubleArrowRight className="text-2xl text-red-500 " />{" "}
              5 National Awards Winner
            </p>
            <p className="flex items-center justify-center gap-4 mt-4">
              <MdKeyboardDoubleArrowRight className="text-2xl text-red-500 " />{" "}
              6 International Certification
            </p>
          </div>
          {/* image for Assets */}
          <div className="mt-12 flex gap-8 items-center justify-center">
            <img className="w-24" src={asset1} alt="" />
            <img className="w-24" src={asset2} alt="" />
            <img className="w-24" src={asset3} alt="" />
          </div>
          {/* Button */}
          <div className="px-8">
            <div className="flex items-center justify-center rounded-lg text-black mt-12 bg-white md:w-96 mx-auto border p-3">
              <HiCheckCircle className="text-4xl text-red-500 " />
              <div>
                {" "}
                <h1 className="text-xl font-bold text-red-500">CLAIM YOUR FREE SPOT NOW</h1>
                <h3 className="text-xl">For 3 days Virtual Training</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySecrets;
