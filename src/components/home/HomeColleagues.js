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
    <div className="tw-my-16 container">
      <div className="tw-py-4 border-smooth tw-shadow-lg bg-white">
        <div className="home-colleagues">
          <Swiper
            pagination={pagination}
            className="mySwiper"
            breakpoints={{
              '@0.00': {
                slidesPerView: 2,
                spaceBetween: 48,
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
            <span slot="container-start">
              <h2 className="text-blue tw-text-rigth tw-mb-4 tw-font-extrabold 2xl:tw-font-black font-kalameh home-section-title tw-mr-4">
                برخی از همکاران ما
              </h2>
              <p className="font-iranyekan text-gray tw-text-xs tw-font-normal 2xl:tw-text-sm tw-mb-12  tw-mr-4">
                آموزشگاه هایی که با کارساز همکاری می کنند
              </p>
            </span>
            <SwiperSlide>
              <img src={eseminar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evand} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={excelpedia} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hamyar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={maktabkhooneh} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={moobemoo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={shahid} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
