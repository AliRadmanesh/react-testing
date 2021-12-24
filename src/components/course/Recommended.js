import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination } from 'swiper';

import CourseCard from './CourseCard';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination]);

const RecentPostsContainer = ({ recommended_courses }) => {
  const pagination = {
    clickable: true,
  };

  return (
    <div className="tw-py-4 tw-my-16 2xl:tw-py-16">
      <p className="text-blue tw-text-2xl tw-text-center tw-mb-8 2xl:tw-mb-12 tw-font-extrabold 2xl:tw-font-black font-kalameh 2xl:tw-text-3xl">
        آموزش‌های مرتبط
      </p>
      <div id="course-slider">
        <Swiper
          pagination={pagination}
          spaceBetween={16}
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
          {/* eslint-disable-next-line */}
          {recommended_courses.map((ee) => {
            return (
              <SwiperSlide key={ee.id}>
                <CourseCard props={ee} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentPostsContainer;
