"use client"

import { api } from "@/api/api";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Categories: React.FC = () => {
    const [data, setData] = useState<any[]>([])

    const fetchCategoryData = async () => {
        const response = await axios.get(`${api}/category`)
        setData(response.data)
    }

    useEffect(() => {
        fetchCategoryData()
    }, [])
    return (
        <section>
            <div className="max-w-[90%] mx-auto">
                {
                    data && data.map((category) => (
                        <div className="w-[120px] h-[100px] text-center" key={category.id}>
                            <Image src={category.image} alt="" />
                            <h3>{category.title}</h3>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}