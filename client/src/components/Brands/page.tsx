"use client";

import { api } from "@/api/api";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const CarBrands: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const fetchCategoryData = async () => {
    const response = await axios.get(`${api}/brand`);
    setData(response.data);
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);
  return (
    <section className="pt-20 pb-20">
      <div className="max-w-[90%] mx-auto flex justify-between">
        {data &&
          data.map((brand) => (
            <Link href={`/${brand.title}`}>
              <div
                className="w-[200px] text-center bg-white pt-4 pb-4 rounded-2xl cursor-pointer transition duration-800"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                key={brand.id}
              >
                <img
                  className="w-[100px] h-[100px] mx-auto"
                  src={brand.logo}
                  alt=""
                />
                {/* <h3 className="mt-2 font-semibold">{brand.title}</h3> */}
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};
