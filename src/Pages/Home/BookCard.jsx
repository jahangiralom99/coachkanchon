import image1 from "../../assets/book-9-185x300.png";
import image2 from "../../assets/sukher-somikoron-185x300.png";
import image3 from "../../assets/re-start-ur-lyf-185x300.png";
import image4 from "../../assets/mastaring-ur-life-185x300.png";
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
      </div>
    </div>
  );
};

export default BookCard;
