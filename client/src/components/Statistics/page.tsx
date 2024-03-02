"use client"

import { api } from "@/api/api";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Statistics: React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    const fetchStatisticsData = async () => {
        const response = await axios.get(`${api}/statistics`)
        setData(response.data)
    }

    useEffect(() => {
        fetchStatisticsData()
    }, [])
    return (
        <section className="p-20">
            <div className="w-full flex justify-between pt-20 pb-20">
                {
                    data && data.map((statistic) => (
                        <div key={statistic.id} className="w-[325px] h-[235px] p-6 rounded-3xl text-center bg-[#70a5fd]" style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}}>
                            <h1 className="text-[#25ff55] text-5xl font-semibold">{statistic.quantity}</h1>
                            <h3 className="text-[#f42192] mt-4 text-2xl font-medium">{statistic.title}</h3>
                            <p className="text-white mt-4 text-xl">{statistic.info}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}