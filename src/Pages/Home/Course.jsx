import arrow from "../../assets/CTA_arrow_01.png";
import arrow2 from "../../assets/CTA_arrow_02.png";

const Course = () => {
  return (
    <div className="bg-[#e7e7e7] mt-14">
      <div className="text-center p-16 max-w-screen-lg mx-auto">
        <p className="text-2xl font-bold text-red-500 12">This course will</p>
        <p className="font-bold text-red-500 text-xl mt-3 ">
          SUPERCHARGE & SKYROCKET YOUR BUSINESS GROWTH
        </p>
        <hr className=" border-2 border-red-500" />
        <p className="text-3xl font-bold bg-red-500 mt-12 rounded-xl text-white p-8 text-center leading-loose">
          বিজনেসের ব্যাটেলগ্রাউন্ডে জয়ী হওয়ার দারুণ সব ফ্রেমওয়ার্ক, টুলস,মেথড
          এবং অসংখ্য প্রাকটিক্যল এক্সাম্পল আপনার বিজনেস জার্নিকে করবে
          UNSTOPPABLE!!!
        </p>
      </div>
      <div className="mt-12 bg-[#e9e9e9] max-w-screen-lg mx-auto p-16 rounded-lg">
        <h3 className="text-3xl font-bold text-center">
          ৩ দিনের সেশন শেষে আপনি হয়ে উঠবেন FEARLESS!!!
        </h3>
        <p className="font-bold text-center mt-6 text-slate-700">
          একজন উদ্যোক্তা নিজেকে কিভাবে মেন্টালি স্ট্রং ও পাওয়ারফুলভাবে গড়ে
          তুলবেন সেই সাইকোলজি ও প্রিন্সিপাল শেয়ার করা হবে।এই কোর্স আপনাকে বিগ
          এচিভার হতে হেল্প করবে।
        </p>
      </div>
      {/* time but not dynamic */}
      <div className="border-t md:w-96 mx-auto border-red-500  border-r border-l">
        <div className="flex items-center font-bold gap-3 justify-center border ">
          <div className=" text-center text-red-500">
            <p>12</p>
            <p className="text-sm">Days</p>
          </div>
          <div>|</div>
          <div className="text-red-500 text-center">
            <p>02</p>
            <p className="text-sm">Hours</p>
          </div>
          <div>|</div>
          <div className="text-red-500 text-center">
            <p>44</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div>|</div>
          <div className="text-red-500 text-center">
            <p>12</p>
            <p className="text-sm">Seconds</p>
          </div>
        </div>
      </div>
      {/* Limited time offer! */}
      <div className="border border-red-500 text-red-500 space-y-4 max-w-screen-md mx-auto p-8 text-center">
        <p className="text-xl font-bold">Business Mastery Course</p>
        <p className="text-xl">For</p>
        <h2 className="text-2xl font-bold">Free</h2>
        <h2 className="text-2xl ">Limited time offer!</h2>
        <h1 className="text-3xl font-bold">
          Registration is open for short time!{" "}
          <span className="font-bold">So, Hurry</span>
        </h1>
        <h3 className="text-3xl font-bold">&</h3>
      </div>
      {/* btn */}
      <div className="flex mt-12 gap-4 justify-center items-center">
        <div>
          <img src={arrow} alt="" />
        </div>
        <div className="bg-red-500 px-6 rounded py-5 text-xl text-white font-bold">
          <button> <span className="font-extrabold">CLAIM YOUR SPOT</span> <br /> REGISTER NOW</button>
        </div>
        <div>
          <img src={arrow2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Course;
