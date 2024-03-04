import Link from "next/link"
import React from "react"
import "./page.responsive.scss"
import { IoLocationSharp } from "react-icons/io5"
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer: React.FC = () => {
    return (
        <footer className="w-full p-20 bg-[#0d1117]">
            <div id="footer-main" className="flex justify-between gap-6 text-white">
                <div className="flex flex-col gap-3 w-[245px]">
                    <h3 className="text-2xl font-bold mb-2">About Rentaly</h3>
                    <p>Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That's why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense.</p>
                </div>
                <div className="flex flex-col gap-3 w-[245px]">
                    <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
                    <Link className="text-[#ffffffbf] text-xl transition duration-300 hover:text-[#1ECB15]" href={"/shop"}>Shop</Link>
                    <Link className="text-[#ffffffbf] text-xl transition duration-300 hover:text-[#1ECB15]" href={"/parts"}>Parts</Link>
                    <Link className="text-[#ffffffbf] text-xl transition duration-300 hover:text-[#1ECB15]" href={"/faq"}>FAQ</Link>
                    <Link className="text-[#ffffffbf] text-xl transition duration-300 hover:text-[#1ECB15]" href={"/about"}>About</Link>
                    <Link className="text-[#ffffffbf] text-xl transition duration-300 hover:text-[#1ECB15]" href={"/contact"}>Contact</Link>
                </div>
                <div className="flex flex-col gap-3 w-[245px]">
                    <h3 className="text-2xl font-bold mb-2">Contact Info</h3>
                    <div className="flex gap-3 items-center">
                        <IoLocationSharp className="fill-[#1ECB15]" />
                        <p>08 W 36th St, New York</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaPhoneAlt className="fill-[#1ECB15]" />
                        <p>+994 70 831 10 33</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <IoIosMail className="fill-[#1ECB15]" />
                        <p>rehim.m04@gmail.com</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-[245px]">
                    <h3 className="text-2xl font-bold mb-2">Social Media</h3>
                    <div className="flex justify-between gap-2 items-center">
                        <button className="w-10 h-10 bg-rgba-white-10 p-3 rounded-md">
                            <FaFacebookF className="fill-[#1ECB15]" />
                        </button>
                        <button className="w-10 h-10 bg-rgba-white-10 p-3 rounded-md">
                            <FaTwitter className="fill-[#1ECB15]" />
                        </button>
                        <button className="w-10 h-10 bg-rgba-white-10 p-3 rounded-md">
                            <FaLinkedinIn className="fill-[#1ECB15]" />
                        </button>
                        <button className="w-10 h-10 bg-rgba-white-10 p-3 rounded-md">
                            <FaInstagram className="fill-[#1ECB15]" />
                        </button>
                        <button className="w-10 h-10 bg-rgba-white-10 p-3 rounded-md">
                            <FaPinterest className="fill-[#1ECB15]" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}