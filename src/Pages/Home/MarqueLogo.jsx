import prothomAlo from "../../assets/prothom-alo.png";
import somokal from "../../assets/somokal.png";
import dailyObserver from "../../assets/the-daily-observer.png";
import dailystar from "../../assets/the-daily-star.png";
import atnNews from "../../assets/atn-news.png";
import dhaka from "../../assets/Dhaka-tribune.png";
import isttefaq from "../../assets/ittefaq.png";
import noyaDigonto from "../../assets/noya-digonto.png";
import peoples from "../../assets/peoples-radio.png";
import Marquee from "react-fast-marquee";

const MarqueLogo = () => {
  return (
    <div className=" bg-white p-4 mx-auto mt-12 pb-12 px-6">
      <p className="text-center font-bold text-red-500">COACH KANCHON SEEN ON</p>
      <Marquee className="mt-2">
        <div className="flex gap-8 items-center">
          <img className="w-44" src={prothomAlo} alt="" />
          <img className="w-44" src={somokal} alt="" />
          <img className="w-44" src={dailyObserver} alt="" />
          <img className="w-44" src={dailystar} alt="" />
          <img className="w-44" src={atnNews} alt="" />
          <img className="w-44" src={dhaka} alt="" />
          <img className="w-44" src={isttefaq} alt="" />
          <img className="w-44" src={noyaDigonto} alt="" />
          <img className="w-44" src={peoples} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueLogo;
