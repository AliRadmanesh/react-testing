import React from 'react';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import CourseCard from '../global/CourseCard';
import PostCard from '../global/PostCard';

SwiperCore.use([Pagination]);

export default function RecommendedCoursesContainer() {
  const user_recommended_courses = useSelector((state) => state.home.data.user_recommended_courses);

  const pagination = {
    clickable: true,
  };

  return (
    <div className="tw-py-4 tw-my-16 container">
      <h2 className="title-s econdary text-blue tw-text-center tw-mb-6">
        دوره‌های پیشنهادی برای شما
      </h2>
    </div>
  );
}
