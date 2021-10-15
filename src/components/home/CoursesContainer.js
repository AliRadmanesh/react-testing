import React from 'react';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import CourseCard from '../global/CourseCard';

SwiperCore.use([Pagination]);

const CoursesContainer = () => {
  const recommended_courses = useSelector((state) => state.home.data.recommended_courses);

  const pagination = {
    clickable: true,
  };

  return (
    <div className="tw-py-16 tw-my-16 container">
      <h2 className="title-secondary text-blue tw-text-center tw-mb-6">دوره‌های پیشنهادی کارساز</h2>
      <div id="home-posts-container" className="home-posts-container">
        <Swiper pagination={pagination} spaceBetween={16} className="mySwiper">
          {recommended_courses.map((ee) => (
            <SwiperSlide key={ee.id}>
              <CourseCard props={ee} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CoursesContainer;
