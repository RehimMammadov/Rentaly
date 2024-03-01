"use client"

import { api } from "@/api/api";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const Choose: React.FC = () => {
    const [data, setData] = useState<any[]>([])

    const fetchChooseData = async () => {
        const response = await axios.get(`${api}/choose`)
        setData(response.data)
    }

    useEffect(() => {
        fetchChooseData();
    }, [])
    
    return (
        <section className="p-20 w-full">
            <h1 className="text-5xl font-medium text-[#1ecb15]">Why Choose Us?</h1>
            <div className="w-full flex justify-between mx-auto mt-7">
                {
                    data && data.map((choose) => (
                        <div className="w-[330px] text-left pt-4" key={choose.id}>
                            <img src={choose.image} alt="" />
                            <h2 className="mt-3 text-2xl font-medium text-teal-500">{choose.title}</h2>
                            <p className="mt-3 text-base text-white">{choose.content}</p>
                         </div>
                    ))
                }
            </div>
        </section>
    )
}