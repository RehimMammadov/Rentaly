import React from "react";
import "../app/globals.scss"
import { Navbar } from "@/layouts/Navbar/page";
import { Footer } from "@/layouts/Footer/page";
import Script from "next/script";
import { FacebookProvider } from "react-facebook";
import Head from "next/head";
import Link from "next/link";

const SignIn = () => {
  return (
    <>
        <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v19.0&appId=your-app-id" nonce="QbeAfdzA" />
        <Navbar />
            <div style={{backgroundImage: "url('https://images7.alphacoders.com/129/1291186.jpg')"}} className="w-full h-[100vh] bg-top bg-no-repeat bg-cover flex items-center justify-center">
                <form className="w-[450px] bg-white rounded-xl p-7 flex flex-col gap-4">
                    <h2 className="text-2xl font-medium">Login</h2>
                    <input style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }} className="w-full p-3 rounded-md" type="text" placeholder="Enter your email" />
                    <input style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }} className="w-full p-3 rounded-md" type="text" placeholder="Enter your password" />
                    <button id="sign" className="h-[45px] bg-[#1ECB15] rounded-md text-white text-xl font-medium">Sign In</button>
                    <p className="">Dont have an account?</p>
                    <div className="flex justify-between gap-2 mt-4 items-center">
                        <div className="w-[120px] h-[1px] bg-[#4b5c7d]"></div>
                        <Link href={"/sign-up"} className="text-lg text-[#4b5c7d] cursor-pointer">Sign Up here</Link>
                        <div className="w-[120px] h-[1px] bg-[#4b5c7d]"></div>
                    </div>
                    <FacebookProvider appId="your-app-id">
                        <div>
                            <Head>
                                <meta property="fb:app_id" content="your-app-id" />
                            </Head>
                            <div className="fb-login-button" data-width="180px" data-size="" data-button-type="" data-layout="" data-auto-logout-link="true" data-use-continue-as="true"></div>
                        </div>
                    </FacebookProvider>
                </form>
            </div>
        <Footer />
    </>
  );
};

export default SignIn;
