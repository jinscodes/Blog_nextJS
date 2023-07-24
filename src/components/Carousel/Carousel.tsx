"use client";

import { Post } from "@/service/posts";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import PostCard from "@/components/PostCard/PostCard";
import st from "./Carousel.module.scss";

interface CarouselPosts {
  posts: Post[];
}

const Carousel = ({ posts }: CarouselPosts) => {
  console.log(posts);

  return (
    <Swiper
      className={st.swiper}
      spaceBetween={50}
      slidesPerView={3}
      modules={[Navigation]}
      navigation
    >
      {posts.map((data: Post, idx: number) => (
        <SwiperSlide key={idx} className={st.swiper_slider}>
          {/* <Image
            src={`/images/posts/${data.path}.png`}
            alt={data.title}
            className={st.img}
            sizes="100vw"
            width="0"
            height="0"
          />
          <div className={st.post_info}>
            <div>
              <time>{data.date.toString()}</time>
              <span>{data.category}</span>
            </div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div> */}
          <PostCard post={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
