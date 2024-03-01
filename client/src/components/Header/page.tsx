"use client"

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./page.scss"

export const Header: React.FC = () => {
    return (
      <Swiper color="#1ecb15" spaceBetween={30} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper" >
        <SwiperSlide className="slider-1">
          <div>
            <button>Rent Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-2">
          <div>
            <button>Rent Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-3">
          <div>
            <button>Rent Now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    )
}