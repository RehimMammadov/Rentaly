"use client"

import { api } from "@/api/api";
import UseFetchData from "@/hooks/UseFetchData";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { HiBars4 } from "react-icons/hi2";
import "./page.scss"

export const Navbar: React.FC = () => {
    const { data } = UseFetchData({ baseUrl: "logo" });
    const [logoUrl, setLogoUrl] = useState<string | undefined>(undefined);
    const [navbarData, setNavbarData] = useState<Array<any>>([])
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleToggleOpenMenu = () => {
        setIsOpen(!isOpen)
    }

    const fetchNavbarData = async () => {
        const response = await axios.get(`${api}/navbar`)
        setNavbarData(response.data)
    }

    useEffect(() => {
        fetchNavbarData()
    }, [])

    useEffect(() => {
        if (data) {
            if (Array.isArray(data)) {
                setLogoUrl(data[0] && data[0].image);
            } else {
                setLogoUrl(data);
            }
        }
    }, [data]);

    return (
        <>
        <nav className="w-full pt-8 pb-8 absolute top-0 z-20">
            <div className="max-w-[90%] mx-auto flex justify-between items-center">
                {logoUrl && <Link href={"/"}><Image width={156} height={56} src={logoUrl} loader={() => logoUrl} alt={"Logo"} /></Link>}
                <ul id="navbar" className="max-w-[35%] flex justify-between gap-12">
                    {
                        navbarData && navbarData.map((navbar) => (
                            <li className="flex justify-between gap-1 items-center transition duration-300 text-white hover:text-[#1ecb15]"><Link className="font-medium text-xl" href={navbar.link}>{navbar.title}</Link> <MdKeyboardArrowDown className="text-xl" /></li>
                        ))
                    }
                </ul>
                <div id="cart-login" className="flex justify-between gap-8 items-center ">
                <button className="cursor-pointer relative">
                    <Link href={"/favourites"}><CiHeart className="text-3xl cursor-pointer fill-white" /></Link>
                    <div className="w-5 absolute top-[-6px] right-[-8px] h-5 rounded-[50%] bg-[#1ecb15]">
                        <p className="text-white text-[12px]">0</p>
                    </div>
                </button>
                <button className="cursor-pointer relative">
                    <Link href={"/cart"}><CiShoppingCart className="text-3xl cursor-pointer fill-white" /></Link>
                    <div className="w-5 absolute top-[-6px] right-[-8px] h-5 rounded-[50%] bg-[#1ecb15]">
                        <p className="text-white text-[12px]">0</p>
                    </div>
                </button>
                <button className="cursor-pointer">
                    <Link href={"/sign-up"}><CiUser className="text-3xl cursor-pointer fill-white" /></Link>
                </button>
                </div>
                <HiBars4 className="text-3xl cursor-pointer fill-white" id="bars" onClick={handleToggleOpenMenu} style={{ display: "none" }} />
            </div>
        </nav>
        <nav style={{top: isOpen ? "116px" : "-100%"}} id="sidebar" className="w-full bg-neutral-800">
            <ul className="text-white flex flex-col gap-6">
                {
                    navbarData && navbarData.map((navbar) => (
                        <li className="flex gap-1 items-center transition duration-300 hover:text-[#1ecb15]"><Link className="font-medium text-xl" href={navbar.link}>{navbar.title}</Link> <MdKeyboardArrowDown className="text-xl" /></li>
                    ))
                }
                <button className="cursor-pointer">
                    <Link className="flex items-center gap-1  transition duration-300 hover:text-[#1ecb15]" href={"/favourites"}><p className="font-medium text-xl">Favourites</p><MdKeyboardArrowDown className="text-xl" /></Link>
                </button>
                <button className="cursor-pointer">
                    <Link className="flex items-center gap-1  transition duration-300 hover:text-[#1ecb15]" href={"/favourites"}><p className="font-medium text-xl">Cart</p><MdKeyboardArrowDown className="text-xl" /></Link>
                </button>
                <button className="cursor-pointer">
                    <Link className="flex items-center gap-1  transition duration-300 hover:text-[#1ecb15]" href={"/favourites"}><p className="font-medium text-xl">Sign Up</p><MdKeyboardArrowDown className="text-xl" /></Link>
                </button>
            </ul>
        </nav>
        </>
    );
};
