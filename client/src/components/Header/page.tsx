"use client"

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./page.scss"
import Link from "next/link";

export const Header: React.FC = () => {
    return (
      <Swiper color="#1ecb15" spaceBetween={30} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper" >
        <SwiperSlide className="slider-1">
          <div>
              <button>Rent Now</button>
              <Link href={"/notifications"}>
              <div className="letter-image">
                <div className="animated-mail">
                  <div className="back-fold"></div>
                  <div className="letter">
                    <div className="letter-border"></div>
                    <div className="letter-title"></div>
                    <div className="letter-context"></div>
                    <div className="letter-stamp">
                      <div className="letter-stamp-inner"></div>
                    </div>
                  </div>
                  <div className="top-fold"></div>
                  <div className="body"></div>
                  <div className="left-fold"></div>
                </div>
                <div className="shadow"></div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-2">
          <div>
            <button>Rent Now</button>
            <Link href={"/notifications"}>
              <div className="letter-image">
                <div className="animated-mail">
                  <div className="back-fold"></div>
                  <div className="letter">
                    <div className="letter-border"></div>
                    <div className="letter-title"></div>
                    <div className="letter-context"></div>
                    <div className="letter-stamp">
                      <div className="letter-stamp-inner"></div>
                    </div>
                  </div>
                  <div className="top-fold"></div>
                  <div className="body"></div>
                  <div className="left-fold"></div>
                </div>
                <div className="shadow"></div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-3">
          <div>
            <button>Rent Now</button>
            <Link href={"/notifications"}>
              <div className="letter-image">
                <div className="animated-mail">
                  <div className="back-fold"></div>
                  <div className="letter">
                    <div className="letter-border"></div>
                    <div className="letter-title"></div>
                    <div className="letter-context"></div>
                    <div className="letter-stamp">
                      <div className="letter-stamp-inner"></div>
                    </div>
                  </div>
                  <div className="top-fold"></div>
                  <div className="body"></div>
                  <div className="left-fold"></div>
                </div>
                <div className="shadow"></div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    )
}