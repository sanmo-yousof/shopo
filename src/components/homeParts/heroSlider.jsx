"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Button } from "../ui/button";
import { HomeSlides } from "@/utils/utils";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <div className="relative z-0  w-full xl:h-[650px] h-[500px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {HomeSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-no-repeat bg-cover  bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.bg.src})` }}
            >
              <div className="w-7xl pl-4 mx-auto relative px-6">
                <div className="xl:w-[626px] sm:w-[600px]  w-full">
                  <p className="text-primary font-medium md:text-3xl text-lg mb-3">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
                    {slide.title}
                  </h1>
                  <Link href={"/shop"}>
                    <Button className="px-8 py-6">{slide.button}</Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
