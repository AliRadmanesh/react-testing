import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import CourseCard from '../course/CourseCard';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import illustration from '../../assets/illustrations/Suggested tutorials.svg';

export default function RecommendedCourses({ data }) {
  const { recommended_courses } = data;

  return (
    <div className="job-course-container tw-grid">
      <div className="tw-flex tw-flex-col lg:tw-hidden tw-text-center small-screen-title tw-pt-4 tw-z-50">
        <p className="font-kalameh-num tw-text-xl  tw-font-extrabold 2xl:tw-text-3xl 2xl:tw-font-black text-white tw-mb-4 2xl:tw-mb-8">
          آموزش‌های مرتبط
        </p>
        <p className="tw-text-xs tw-font-normal 2xl:tw-text-base  text-white font-kalameh-num">
          تخصص این زمینه رو نداری؟؟
          <br />
          کارساز برای یادگیری شما در این حوزه؛ این آموزش ها را پیشنهاد می کند
        </p>
      </div>
      <div className="tw-hidden lg:tw-flex">
        <div className="tw-w-full illustration tw-flex-col tw-justify-between tw-py-12" style={{}}>
          <div>
            <p className="font-kalameh-num tw-text-xl tw-font-extrabold 2xl:tw-text-3xl 2xl:tw-font-black text-white tw-mb-4 2xl:tw-mb-8">
              آموزش‌های مرتبط
            </p>
            <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-white font-kalameh-num">
              تخصص این زمینه رو نداری؟؟
              <br />
              کارساز برای یادگیری شما در این حوزه؛ این آموزش ها را پیشنهاد می کند
            </p>
          </div>
          <img
            src={illustration}
            alt=""
            style={{ width: '360px ' }}
            className="tw-mt-4 2xl:tw-mt-8"
          />
        </div>
      </div>
      <Swiper
        spaceBetween={16}
        className="mySwiper tw-w-full tw-py-4"
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 2.5,
            spaceBetween: 16,
          },
        }}
      >
        {recommended_courses.map((ee) => (
          <SwiperSlide key={ee.id}>
            <CourseCard props={ee} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
