"use client";

import { Post } from "@/service/posts";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import st from "./Carousel.module.scss";

interface CarouselPosts {
  posts: Post[];
}

const Carousel = ({ posts }: CarouselPosts) => {
  console.log(posts);

  return (
    <Swiper className={st.swiper} spaceBetween={50} slidesPerView={3}>
      {posts.map((data, idx) => (
        <SwiperSlide className={st.swiper_slider}>{data.title}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
