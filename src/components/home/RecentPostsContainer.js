import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination } from 'swiper';

import PostCard from '../global/PostCard';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination]);

const RecentPostsContainer = () => {
  const recent_posts = useSelector((state) => state.home.data.recent_posts);

  const pagination = {
    clickable: true,
  };

  return (
    <div className="tw-py-4 tw-my-16 container">
      <h2 className="title-secondary text-blue tw-text-center tw-mb-6">جدیدترین مقالات کارساز</h2>
      <div id="home-posts-container" className="">
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
};

export default RecentPostsContainer;
