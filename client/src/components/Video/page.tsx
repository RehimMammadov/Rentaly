import React, { useEffect } from "react";

export const VideoComponent: React.FC = () => {
  
  return (
    <section className="w-full p-20">
      <div className="w-full h-[690px] mx-auto rounded-3xl flex justify-between" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
        <div className="w-[50%] h-full relative rounded-l-3xl">
            <iframe className="w-full h-full rounded-l-3xl" src="https://www.youtube.com/embed/0AcvHuGeOZE?autoplay=1&loop=1&playlist=0AcvHuGeOZE" allowFullScreen />
        </div>
        <div className="w-[50%] h-full relative rounded-r-3xl p-24">
          <h2 className="text-6xl font-medium leading-snug text-[#1ECB15]">Get A Fair Price For Your Car Sell To Us Today</h2>
          <p className="text-xl text-white mt-4 leading-9">We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of.</p>
          <ul className="flex flex-col gap-2 mt-5 text-lg text-[#14b8a6]">
            <li>We are the UK's largest provider, with more patrols in more places.</li>
            <li>You get 24/7 roadside assistance.</li>
            <li>We fix 4 out of 5 cars at the roadside.</li>
          </ul>
          <button className="w-[175px] h-[65px] rounded-2xl mt-8 text-2xl font-medium text-white transition duration-400 bg-[#1ECB15] hover:bg-[#14B8A6]">Get Started</button>
        </div>
      </div>
    </section>
  );
};
