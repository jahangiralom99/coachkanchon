import {
  FaDownload,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import logo1 from "../../../assets/Asset-13-1.png";
import logo2 from "../../../assets/Asset-12-1.png";
import logo3 from "../../../assets/Asset-14.png";
import logo4 from "../../../assets/Asset-18.png";
import company1 from "../../../assets/Asset-30.png";
import company2 from "../../../assets/Asset-19-1.png";
import company3 from "../../../assets/final-loog-.png";
import company4 from "../../../assets/growth-club-w.png";
import ssl from "../../../assets/SSLCommerz-1.png";

const Footer = () => {
  return (
    <div className="mt-12 px-5 pb-12">
      {/* Download Button */}
      <div className="flex max-w-screen-sm p-2 rounded-xl mx-auto justify-center px-5 bg-red-500 text-center items-center gap-8 text-white">
        <FaDownload className="text-3xl" />
        <div>
          <p className="text-xl font-bold uppercase">DOWNLOAD</p>
          <p className="font-bold"> coach kanchon corporate profile</p>
        </div>
      </div>
      {/* Icon social  */}
      <div className="flex p-5 flex-col md:flex-row items-center justify-center gap-8 mt-8">
        <div className="flex gap-6 items-center justify-center">
          <img className="w-16" src={logo1} alt="" />
          <img className="w-16" src={logo2} alt="" />
          <img className="w-16" src={logo3} alt="" />
        </div>
        <div className="flex items-end">
          <img className="w-24" src={logo4} alt="" />
          <div className="text-red-500">
            <p className="ml-4">SUPPORT 24/7</p>
            <p className="text-white text-xl">+09609 400 400</p>
            <p className="-ml-8">coachkanchonacademy@gmail.com</p>
          </div>
        </div>
      </div>
      {/* PRIVACY POLICY  TERMS OF SERVICE  | REFUND POLICY */}
      <div className="mt-8 text-red-500 uppercase flex flex-wrap gap-5 items-center justify-center">
        <p>PRIVACY POLICY</p> <p className="text-white"> | </p>
        <p>ERMS OF SERVICE </p> <p className="text-white"> | </p>
        <p>REFUND POLICY</p>
      </div>
      {/* company logo for footer  */}
      <div className="flex items-center justify-center mt-12 gap-12 flex-wrap">
        <img className="w-20 h-full object-contain" src={company1} alt="" />
        <img className="w-28 h-full object-contain" src={company2} alt="" />
        <img className="w-32 h-full object-contain" src={company3} alt="" />
        <img className="w-32 h-full object-contain" src={company4} alt="" />
      </div>
      {/* icon social  */}
      <div className="text-white text-4xl flex items-center justify-center flex-wrap gap-8 mt-7">
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaInstagramSquare />
        <FaLinkedin />
      </div>
      {/* SSL image */}
      <div className="mt-8 max-w-screen-xl mx-auto px-5">
        <img src={ssl} alt="" />
      </div>
      <div className="text-red-500 text-center mt-6 space-y-3">
        <p>TRAD/DSCC/009507/2022 </p>
        <p className="text-white">
          Atopia Aadit (1st floor), House-3, Road-1/A, Block-J , Baridhara,
          Dhaka-1212, Bangladesh
        </p>
      </div>
      <div className="text-center mt-4 text-sm ">
        <p>© COACH KANCHON - ALL RIGHTS RESERVED</p>
        <p className="text-red-500">DESIGN AND MANAGED BY: Jahangir Alam</p>
      </div>
    </div>
  );
};

export default Footer;
