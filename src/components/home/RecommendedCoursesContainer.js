import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import RecommendedCourseCard from './RecommendedCourseCard';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination]);

export default function RecommendedCoursesContainer() {
  const user_recommended_courses = useSelector((state) => state.home.data.user_recommended_courses);

  const pagination = {
    clickable: true,
  };

  useEffect(() => {
    console.log(user_recommended_courses);
  }, []);

  return (
    <div className="tw-py-4 tw-my-16 container">
      <h2 className="title-s econdary text-blue tw-text-center tw-mb-6">
        دوره‌های پیشنهادی برای شما
      </h2>
      <div id="" className="home-posts-container">
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
          {user_recommended_courses.map((ee) => (
            <SwiperSlide key={ee.id}>
              <RecommendedCourseCard props={ee} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
