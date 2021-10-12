import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import eseminar from '../../assets/images/logo/eseminar.svg';
import evand from '../../assets/images/logo/evand.png';
import excelpedia from '../../assets/images/logo/excelpedia.png';
import hamyar from '../../assets/images/logo/hamyarwp.png';
import maktabkhooneh from '../../assets/images/logo/maktabkhooneh.png';
import moobemoo from '../../assets/images/logo/moobemoo.png';
import shahid from '../../assets/images/logo/shahid beheshti.svg';

SwiperCore.use([Pagination]);

export default function HomeColleagues() {
  const pagination = {
    clickable: true,
  };

  return (
    <div className="tw-my-16 container ">
      <div className="tw-py-4 border-smooth tw-shadow-sm bg-white">
        <h2 className="title-secondary text-blue tw-text-right tw-mb-2">برخی از همکاران ما</h2>
        <p className="font-yekan text-gray tw-text-xs tw-font-normal 2xl:tw-text-sm tw-mb-12">
          آموزشگاه هایی که با کارساز همکاری می کنند
        </p>

        <div className="home-colleagues">
          <Swiper
            pagination={pagination}
            spaceBetween={16}
            className="mySwiper"
            breakpoints={{
              '@0.00': {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              '@0.50': {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              '@1.00': {
                slidesPerView: 5,
                spaceBetween: 16,
              },
              '@1.50': {
                slidesPerView: 5,
                spaceBetween: 16,
              },
              '@2.00': {
                slidesPerView: 7,
                spaceBetween: 16,
              },
              '@3.00': {
                slidesPerView: 7,
                spaceBetween: 16,
              },
              '@3.50': {
                slidesPerView: 7,
                spaceBetween: 16,
              },
              '@4.00': {
                slidesPerView: 7,
                spaceBetween: 16,
              },
              '@4.50': {
                slidesPerView: 7,
                spaceBetween: 16,
              },
              '@5.00': {
                slidesPerView: 7,
                spaceBetween: 16,
              },
              '@5.50': {
                slidesPerView: 7,
                spaceBetween: 16,
              },
            }}
          >
            <SwiperSlide className="tw-mx-6 md:tw-mx-8 lg:tw-mx-16">
              <img style={{ height: '100px', width: 'auto' }} src={eseminar} alt="" />
            </SwiperSlide>
            <SwiperSlide className="tw-mx-6 md:tw-mx-8 lg:tw-mx-16">
              <img style={{ height: '100px', width: 'auto' }} src={evand} alt="" />
            </SwiperSlide>
            <SwiperSlide className="tw-mx-6 md:tw-mx-8 lg:tw-mx-16">
              <img style={{ height: '100px', width: 'auto' }} src={excelpedia} alt="" />
            </SwiperSlide>
            <SwiperSlide className="tw-mx-6 md:tw-mx-8 lg:tw-mx-16">
              <img style={{ height: '100px', width: 'auto' }} src={hamyar} alt="" />
            </SwiperSlide>
            <SwiperSlide className="tw-mx-6 md:tw-mx-8 lg:tw-mx-16">
              <img style={{ height: '100px', width: 'auto' }} src={maktabkhooneh} alt="" />
            </SwiperSlide>
            <SwiperSlide className="tw-mx-6 md:tw-mx-8 lg:tw-mx-16">
              <img style={{ height: '100px', width: 'auto' }} src={moobemoo} alt="" />
            </SwiperSlide>
            <SwiperSlide className="tw-mx-6 md:tw-mx-8 lg:tw-mx-16">
              <img style={{ height: '100px', width: 'auto' }} src={shahid} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
