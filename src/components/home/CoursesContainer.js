import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';

import CourseCard from '../global/CourseCard';

SwiperCore.use([Pagination]);

function CoursesContainer() {
  const recommended_courses = useSelector((state) => state.home.data.recommended_courses);

  const pagination = {
    clickable: true,
  };

  useEffect(() => {
    if (window.innerWidth >= 1536) {
      const wrapper = document.querySelector(
        '#home-courses-container .swiper-container .swiper-wrapper',
      );
      const slides = wrapper.querySelectorAll('.swiper-slide');
      for (let i = 0; i < slides.length; i += 1) {
        slides[i].style.width = '90vw';
      }
    }
  }, []);

  return (
    <div className="tw-my-20 container">
      <p className="text-blue tw-text-center tw-mb-8 2xl:tw-mb-12 tw-font-extrabold 2xl:tw-font-black font-kalameh home-section-title">
        دوره‌های پیشنهادی کارساز
      </p>
      <div id="home-courses-container" className="home-posts-container tw-relative">
        {/* eslint-disable-next-line */}
        <Swiper
          pagination={pagination}
          spaceBetween={30}
          slidesPerView={1}
          className="mySwiper"
          centeredSlides={true}
          // loop={true}
          // watchSlidesVisibility={true}
        >
          {recommended_courses.map((ee) => (
            <SwiperSlide key={ee.id} style={{ width: '80vw' }}>
              <CourseCard props={ee} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CoursesContainer;
