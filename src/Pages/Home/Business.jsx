import arrow from "../../assets/CTA_arrow_01.png";
import arrow2 from "../../assets/CTA_arrow_02.png";
import bigImage from "../../assets/ck_academy_7_years_happiness_celebration2-scaled-1.jpg";
import bigImage2 from "../../assets/ck_academy_7_years_happiness_celebration-1024x681.jpg";
import asset3 from "../../assets/Asset-3.png";
import coach from "../../assets/coach-kanchon.webp";

const Business = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto pt-16 bg-[#e7e7e7] rounded-lg p-8">
        <div className="text-5xl text-white font-bold bg-red-500 text-center p-4 rounded-lg">
          <h1>হ-য-ব-র-ল বিজনেস আর কতকাল?</h1>
        </div>
        <div className="text-2xl text-white font-bold bg-red-500 text-center p-3 rounded-lg mt-5">
          <h1>কোচ কাঞ্চনের ফ্রি মাস্টারক্লাসে বিজনেসে আনুন ম্যাসিভ গ্রোথ!</h1>
        </div>
        <div className="bg-white shadow-2xl rounded-xl mt-12 text-center p-8">
          <h3 className="text-2xl font-bold">
            বর্তমান সময়ে বিজনেস একটা যুদ্ধক্ষেত্র।
          </h3>
          <h4 className="text-2xl font-bold mt-2">
            তাই না বুঝে ব্যবসায় নেমে আমরা চরম প্রতিকূলতার সম্মুখীন হই। আমিও
            নিজেও স্ট্রাগল করেছি অনেক বছর। তারপর ঘুরে দাড়িয়েছি নিজেকে স্কিলড
            করে। সেই স্কিলগুলোই আমি শেয়ার করবো বিজনেস মাস্টরি সেশনে।
          </h4>
          <p className="mt-12 text-slate-500 font-bold">
            GRAB YOU FREE SEAT NOW!
          </p>
          {/* btn */}
          <div className="flex gap-4 justify-center items-center">
            <div>
              <img src={arrow} alt="" />
            </div>
            <div className="bg-red-500 px-6 rounded py-5 text-xl text-white font-bold">
              <button>Register Now for free</button>
            </div>
            <div>
              <img src={arrow2} alt="" />
            </div>
          </div>
          {/* video */}
          <div className="mt-12">
            <iframe
              className="w-full h-72 md:h-[500px]"
              src="https://www.youtube.com/embed/f6J8Ic7Meyo?si=-mXu5SbCzRV17ZR0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* big image Section */}
      <div>
        <img src={bigImage} alt="" />
      </div>
      {/* photo section */}
      <div className="max-w-screen-lg mx-auto pt-16 bg-[#2d2d2d] rounded-lg p-8 px-6 mt-12">
        <div className="p-5 text-center">
          <img className="rounded-lg" src={bigImage2} alt="" />
          <p className="text-center font-bold mt-4 text-white">
            বিজনেস হচ্ছে রুবিকস কিউব মেলানোর মতো। এলগোরিদম আর ফ্রেমওয়ার্ক না
            বুঝে সারাদিন চেষ্টা করেও লাভ হবে না। আর যে বোঝে সে মুহুর্তেই মিলিয়ে
            ফেলে।
          </p>
          <img className=" w-44 md:w-96 mt-7 inline" src={asset3} alt="" />
        </div>
      </div>
      {/* Coach Image */}
      <div className="max-w-screen-lg text-center mx-auto pt-16 rounded-lg p-8 px-6 mt-12">
        <img className="inline" src={coach} alt="" />
      </div>
      <div className="bg-red-500 h-44 -mt-8 relative">
        <div className="max-w-screen-md text-center rounded-lg p-8 px-6 bg-[#d0a065] w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-48 space-y-3 text-sm md:text-xl font-bold absolute">
          <p>বিজনেসে মূলত ২ ধরণের যুদ্ধ করতে হয়</p>
          <p>১। ইনার ব্যাটেল (৮০%)</p>
          <p>২। আউটার ব্যাটেল (২০%)</p>
          <p>
            এই দুই ব্যাটেলে জয়ী হওয়ার সিক্রেট সকল স্ট্র‍্যাটেজি শেয়ার করবো ৩
            দিনের বিজনেস মাস্টরি সেশনে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Business;
