import image1 from "../../assets/book-9-185x300.png";
import image2 from "../../assets/sukher-somikoron-185x300.png";
import image3 from "../../assets/re-start-ur-lyf-185x300.png";
import image4 from "../../assets/mastaring-ur-life-185x300.png";
import image5 from "../../assets/Asset-11-300x8.png";
import image6 from "../../assets/Business-Mastery-e1720094539202.jpg";
import image7 from "../../assets/ffffffff.png";
import image8 from "../../assets/Alumni-Uplift-Coach-Kanchon.webp";
import { FaArrowUpLong, FaFacebook } from "react-icons/fa6";
import { RiCursorFill } from "react-icons/ri";

const BookCard = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center -mt-44">
          <div className="space-y-8">
            <img
              className="hover:scale-125 transition duration-300"
              src={image1}
              alt=""
            />
            <button className="text-xl font-bold border bg-white rounded-xl p-3 border-white text-red-500 flex gap-3 items-center">
              একটু পড়ে দেখুন
              <FaArrowUpLong />
            </button>
          </div>
          <div className="space-y-8">
            <img
              className="hover:scale-125 transition duration-300"
              src={image2}
              alt=""
            />
            <button className="text-xl font-bold border bg-white rounded-xl p-3 border-white text-red-500 flex gap-3 items-center">
              একটু পড়ে দেখুন
              <FaArrowUpLong />
            </button>
          </div>
          <div className="space-y-8">
            <img
              className="hover:scale-125 transition duration-300"
              src={image3}
              alt=""
            />
            <button className="text-xl bg-white font-bold border rounded-xl p-3 border-white text-red-500 flex gap-3 items-center">
              একটু পড়ে দেখুন
              <FaArrowUpLong />
            </button>
          </div>
          <div className="space-y-8">
            <img
              className="hover:scale-125 transition duration-300"
              src={image4}
              alt=""
            />
            <button className="text-xl bg-white font-bold border rounded-xl p-3 border-white text-red-500 flex gap-3 items-center">
              একটু পড়ে দেখুন
              <FaArrowUpLong />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center bg-red-500 pt-96 -mt-56 px-5 pb-16">
        <h1 className="text-2xl font-bold text-white">
          কোর্স একসেস কিভাবে পাবেন?
        </h1>
        <p className="mt-12 text-white font-bold ">
          Business Mastery Course টি Facebook group থেকে হবে। কোর্সে Join করতে
          এখনই যুক্ত হোন
        </p>
        <p className="text-white font-bold mt-2">
          Coach Kanchon Academy Facebook Group এ ।
        </p>
        <p className="text-white font-bold mt-2">
          শুধুমাত্র ওয়েবসাইটে Registered members গ্রুপে জয়েন করে ক্লাস করতে
          পারবেন।
        </p>
        {/* Join the Class */}
        <div className="border-4 border-white bg-black mt-12 max-w-screen-xl mx-auto px-4">
          <div className="text-center text-white p-10">
            <h5 className="text-xl">www.coachkanchon.academy/my-profile</h5>
            <img className="inline" src={image5} alt="" />
            <p className="mt-6 text-xl ">
              উপরের URL এড্রেসের login form এ আপনার Username এবং Password দিয়ে
              ওয়েবসাইটে লগইন করলে আপনার কোর্স ড্যাশবোর্ড ওপেন হবে।
            </p>
            <div className="flex flex-col md:flex-row mt-12">
              <div className="md:flex-1 p-12 hover:bg-[#4c4c4c]">
                <img
                  className="rounded-tr-[100px]  rounded-b-[0px] rounded-tl-none  rounded-l-[100px]"
                  src={image7}
                  alt=""
                />
              </div>
              <div className="md:flex-1">
                <img className="w-[700px] h-full" src={image6} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* ---------------- */}
        <div className="mt-8 font-bold text-white text-center">
          {" "}
          <p>
            কোর্স চলাকালীন যেকোনো সাপোর্টের জন্য কোচ কাঞ্চন একাডেমি এলামনাই
            ফেসবুক গ্রুপে অবশ্যই জয়েন করেবন।
          </p>
          <p className="mt-2">
            কোচ কাঞ্চন একাডেমি এলামনাই ফেসবুক গ্রুপ লিঙ্ক পেতে আপনি আপনার
            প্রোফাইল ড্যাশবোর্ড এ লগ ইন করুন ।
          </p>
        </div>
        {/* button  */}
        <div className="border-4 border-white hover:border-black md:w-96 mx-auto mt-12">
          <div className="flex items-center justify-center hover:bg-white hover:text-black gap-4 text-white p-3 cursor-pointer">
            <RiCursorFill className="text-2xl" />
            <div className="flex flex-col text-start">
              <p className="text-xl">GO TO DASHBOARD</p>
              <p>Get instant access to your course</p>
            </div>
          </div>
        </div>
        {/* Please use your  EMAIL ID   PASSWORD to login */}
        <div className="mt-6 text-center text-white">
          <p className="underline text-xl">
            <span className="underline text-xl font-bold">Please use your</span>{" "}
            <span className="bg-white text-red-500 font-extrabold p-1">
              EMAIL ID{" "}
            </span>{" "}
            <span className="bg-white text-red-500 font-extrabold p-1 ml-2">
              PASSWORD
            </span>{" "}
            to login
          </p>
          <p className="text-xl mt-2">
            For any help or enquiry please WhatsApp us
          </p>
          <p className="bg-white text-black font-bold  w-36 mx-auto mt-3">
            {" "}
            01966 508 000{" "}
          </p>
        </div>
        {/* group image  */}
        <div className="mt-12 text-center">
          <img className="inline" src={image8} alt="" />
        </div>
        {/* button join our */}
        <div className="flex max-w-screen-sm mx-auto items-center text-white justify-center mt-8  p-4 gap-8 bg-[#1877f2] rounded "> 
        <FaFacebook className="text-3xl " />
      
            <p className="text-xl font-bold uppercase">JOIN OUR FACEBOOK GROUP</p>
        
        </div>
      </div>
    </div>
  );
};

export default BookCard;
