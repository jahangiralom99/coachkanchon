import image1 from "../../assets/book-9-185x300.png";
import image2 from "../../assets/sukher-somikoron-185x300.png";
import image3 from "../../assets/re-start-ur-lyf-185x300.png";
import image4 from "../../assets/mastaring-ur-life-185x300.png";
import image5 from "../../assets/Asset-11-300x8.png";
import image6 from "../../assets/Business-Mastery-e1720094539202.jpg";
import image7 from "../../assets/ffffffff.png";
import { FaArrowUpLong } from "react-icons/fa6";

const BookCard = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4">
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
      <div className="text-center bg-red-500 pt-96 -mt-56">
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
        <div className="mt-8 text-white text-center">
          <p>
            কোর্স চলাকালীন যেকোনো সাপোর্টের জন্য কোচ কাঞ্চন একাডেমি এলামনাই
            ফেসবুক গ্রুপে অবশ্যই জয়েন করেবন।
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
