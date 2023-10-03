import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination } from 'swiper';

import PostCard from '../global/PostCard';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination]);

function RecentPostsContainer() {
  const recent_posts = useSelector((state) => state.home.data.recent_posts);

  const pagination = {
    clickable: true,
  };

  return (
    <div className="tw-py-4 tw-my-16 container">
      <p className="text-blue tw-text-center tw-mb-8 2xl:tw-mb-12 tw-font-extrabold 2xl:tw-font-black font-kalameh home-section-title">
        جدیدترین مقالات کارساز
      </p>
      <div id="home-posts-container">
        {
          // recent_posts.map(ee => <PostCard key={ee.id} props={ee} /> )
        }

        <Swiper
          pagination={pagination}
          spaceBetween={16}
          className="mySwiper"
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            '@1.50': {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            '@2.00': {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            '@3.00': {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            '@3.50': {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            '@4.00': {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            '@4.50': {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            '@5.00': {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            '@5.50': {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
        >
          {recent_posts.map((ee) => (
            <SwiperSlide key={ee.id}>
              <PostCard props={ee} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default RecentPostsContainer;
