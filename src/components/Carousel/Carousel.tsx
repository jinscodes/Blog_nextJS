"use client";

import { Post } from "@/service/posts";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import st from "./Carousel.module.scss";

const Carousel = ({ posts }: Post[]) => {
  console.log(posts);

  return (
    <Swiper className={st.swiper} spaceBetween={50} slidesPerView={3}>
      <SwiperSlide className={st.swiper_slider}>slider 1</SwiperSlide>
      <SwiperSlide>slider 2</SwiperSlide>
      <SwiperSlide>slider 3</SwiperSlide>
      <SwiperSlide>slider 4</SwiperSlide>
      <SwiperSlide>slider 5</SwiperSlide>
      <SwiperSlide>slider 6</SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
