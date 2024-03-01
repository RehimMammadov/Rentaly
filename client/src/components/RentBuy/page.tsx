import React from "react";

export const RentorBuyComponent: React.FC = () => {
    return (
        <section className="p-20">
            <div className="w-full mx-auto flex justify-between">
                <div className="w-[645px] h-[475px] rounded-3xl p-10 bg-[#38bdae] relative">
                    <h2 className="text-6xl w-[80%] font-medium leading-snug text-purple-600">Are You Looking For a Car ?</h2>
                    <p className="text-xl text-white mt-4 leading-9">We are committed to providing our customers with exceptional service.</p>
                    <button className="w-[175px] h-[65px] rounded-2xl mt-8 text-2xl font-medium text-white transition duration-400 bg-purple-600 hover:bg-[#1ECB15]">Get Started</button>
                    <img className="absolute bottom-12 right-20" src="https://demoapus1.com/boxcar/wp-content/uploads/2023/09/electric-car2.svg" alt="" />
                </div>
                <div className="w-[645px] h-[475px] rounded-3xl p-10 bg-[#70a5fd] relative">
                <h2 className="text-6xl w-[80%] font-medium leading-snug text-purple-600">Are You Want For Rent a Car ?</h2>
                    <p className="text-xl text-white mt-4 leading-9">We are committed to providing our customers with exceptional service.</p>
                    <button className="w-[175px] h-[65px] rounded-2xl mt-8 text-2xl font-medium text-white transition duration-400 bg-purple-600 hover:bg-[#1ECB15]">Get Started</button>
                    <img className="absolute bottom-12 right-20" src="https://demoapus1.com/boxcar/wp-content/uploads/2023/09/electric-car.svg" alt="" />
                </div>
            </div>
        </section>
    )
}