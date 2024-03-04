import React from "react";
import "../app/globals.scss"
import { Navbar } from "@/layouts/Navbar/page";
import { Footer } from "@/layouts/Footer/page";
import Link from "next/link";

const SignUp = () => {
    
  return (
    <>
        <Navbar />
            <div style={{backgroundImage: "url('https://images7.alphacoders.com/129/1291186.jpg')"}} className="w-full h-[100vh] bg-top bg-no-repeat bg-cover flex items-center justify-center">
                <div className="w-[450px] h-[400px] bg-white rounded-xl p-7 flex flex-col gap-4">
                    <h2 className="text-2xl font-medium">Register</h2>
                    <input style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", outline: "none" }} className="w-full p-3 rounded-md" type="text" placeholder="Enter your fullname" />
                    <input style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", outline: "none" }} className="w-full p-3 rounded-md" type="text" placeholder="Enter your email" />
                    <input style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", outline: "none" }} className="w-full p-3 rounded-md" type="text" placeholder="Enter your password" />
                    <button id="sign" className="h-[45px] bg-[#1ECB15] rounded-md text-white text-xl font-medium">Sign In</button>
                    <p>Already have an account?</p>
                    <div className="flex justify-between gap-2 mt-2 items-center">
                        <div className="w-[120px] h-[1px] bg-[#4b5c7d]"></div>
                        <Link href={"/sign-in"} className="text-lg text-[#4b5c7d] cursor-pointer">Sign in here</Link>
                        <div className="w-[120px] h-[1px] bg-[#4b5c7d]"></div>
                    </div>
                </div>
            </div>
        <Footer />
    </>
  );
};

export default SignUp;
