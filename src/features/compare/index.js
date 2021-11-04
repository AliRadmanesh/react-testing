import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import instance from '../../app/instance';
import Footer from '../../components/global/Footer';
import MenuMobile from '../../components/global/MenuMobile';
import ScrollToTop from '../../components/global/ScrollToTop';
import MenuDesktop from '../../components/global/MenuDesktop';
import UserMenu from '../../components/global/UserMenu';
import CategoryMenuMobile from '../../components/global/CategoryMenuMobile';
import CategoryMenuDesktop from '../../components/global/CategoryMenuDesktop';

import plusIcon from '../../assets/icons/Add Fill.svg';

import OverView from '../../components/compare/OverView';
import Modal from '../../components/compare/Modal';

import {
  setPrimary,
  setSecondary,
  getData,
  showModal,
  setDispatcher,
} from '../../app/redux/actions/compareActions';
import './compare.css';

export default function Compare() {
  const { primary, secondary } = useSelector((state) => state.compare);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [new URL(window.location).search]);

  return (
    <>
      <>
        <div className="bg-light">
          <ScrollToTop />
          <MenuMobile />
          <MenuDesktop />
          <UserMenu />
          <CategoryMenuDesktop />
          <div className="compare-container container font-kalameh-num tw-py-6 2xl:tw-py-16">
            <p className="text-blue tw-text-2xl tw-font-extrabold 2xl:tw-text-3xl 2xl:tw-font-black tw-text-center">
              مقایسه دوره‌ها
            </p>
            <OverView />
            <div className="bg-white tw-my-4 tw-grid tw-grid-cols-2 tw-align-center tw-shadow tw-rounded-xl tw-p-4">
              <div className="compare-gridder-right tw-flex tw-justify-center lg:tw-justify-start ">
                {!primary.id && (
                  <button
                    onClick={() => {
                      dispatch(showModal(true));
                      dispatch(setDispatcher('primary'));
                    }}
                    alt=""
                    className="tw-rounded-xl tw-hidden lg:tw-flex tw-w-full tw-border-dashed tw-border-gray-300 tw-border-2 tw-justify-center tw-items-center"
                    style={{
                      height: '129px',
                    }}
                  >
                    <img src={plusIcon} alt="" className="tw-ml-4" />
                    <p className="tw-text-center text-gray tw-font-kalameh-num tw-text-base 2xl:tw-text-lg">
                      برای افزودن دوره به لیست مقایسه کلیک کنید
                    </p>
                  </button>
                )}
                {primary.id && (
                  <>
                    <span
                      alt=""
                      className="tw-rounded-xl tw-hidden lg:tw-block"
                      style={{
                        width: '212px',
                        height: '129px',
                        background: `url("${primary.images.cover}") no-repeat center/cover`,
                      }}
                    />

                    <p className="tw-block tw-mr-4">
                      <span className="tw-text-xs text-blue tw-font-bold tw-block md:tw-hidden">
                        {primary.title}
                      </span>
                      <span className="tw-text-xs text-dark tw-font-bold tw-hidden md:tw-block 2xl:tw-text-xl 2xl:tw-font-semibold">
                        {primary.title}
                      </span>
                      {primary.price && (
                        <>
                          <span className="tw-text-xs text-dark tw-font-normal tw-block md:tw-hidden">
                            {primary.is_free ? 'رایگان' : primary.price}
                          </span>
                          <span className="tw-text-xs text-blue tw-font-bold tw-hidden md:tw-block 2xl:tw-text-lg 2xl:tw-font-semibold tw-overflow-ellipses">
                            {primary.is_free ? 'رایگان' : primary.price}
                          </span>
                        </>
                      )}
                    </p>
                  </>
                )}
              </div>
              <div className="compare-gridder-left tw-flex tw-justify-center lg:tw-justify-start ">
                {!secondary.id && (
                  <button
                    onClick={() => {
                      dispatch(setDispatcher('secondary'));
                      dispatch(showModal(true));
                    }}
                    alt=""
                    className="tw-rounded-xl tw-hidden lg:tw-flex tw-w-full tw-border-dashed tw-border-gray-300 tw-border-2 tw-justify-center tw-items-center"
                    style={{
                      height: '129px',
                    }}
                  >
                    <img src={plusIcon} alt="" className="tw-ml-4" />
                    <p className="tw-text-center text-gray tw-font-kalameh-num tw-text-base 2xl:tw-text-lg">
                      برای افزودن دوره به لیست مقایسه کلیک کنید
                    </p>
                  </button>
                )}
                {secondary.id && (
                  <>
                    <span
                      alt=""
                      className="tw-rounded-xl tw-hidden lg:tw-block"
                      style={{
                        width: '212px',
                        height: '129px',
                        background: `url("${secondary.images.cover}") no-repeat center/cover`,
                      }}
                    />
                    <p className="tw-block tw-mr-4">
                      <span className="tw-text-xs text-blue tw-font-bold tw-block md:tw-hidden">
                        {secondary.title}
                      </span>
                      <span className="tw-text-xs text-dark tw-font-bold tw-hidden md:tw-block 2xl:tw-text-xl 2xl:tw-font-semibold tw-overflow-ellipses">
                        {secondary.title}
                      </span>
                      {secondary.price && (
                        <>
                          <span className="tw-text-xs text-dark tw-font-normal tw-block md:tw-hidden">
                            {secondary.is_free ? 'رایگان' : secondary.price}
                          </span>
                          <span className="tw-text-xs text-blue tw-font-bold tw-hidden md:tw-block 2xl:tw-text-lg 2xl:tw-font-semibold tw-overflow-ellipses">
                            {secondary.is_free ? 'رایگان' : secondary.price}
                          </span>
                        </>
                      )}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="bg-white tw-my-4 tw-shadow tw-rounded-xl tw-p-4">
              <div>
                <p className="text-blue tw-mb-4 tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-text-bold tw-text-center md:tw-text-right">
                  ارائه‌دهنده
                </p>
                <div className="comapare-gridder-detail bg-primary-pale tw-rounded-xl tw-mb-4">
                  <div className="compare-gridder-right tw-p-4 ">{primary.academy.name}</div>
                  <div className="compare-gridder-line-constant" />
                  <div className="compare-gridder-left tw-p-4">{secondary.academy.name}</div>
                </div>
              </div>
              <div>
                <p className="text-blue tw-mb-4 tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-text-bold tw-text-center md:tw-text-right">
                  نوع برگزاری
                </p>
                <div className="comapare-gridder-detail bg-primary-pale tw-rounded-xl tw-mb-4">
                  <div className="compare-gridder-right tw-p-4 ">{primary.type.name}</div>
                  <div className="compare-gridder-line-constant" />
                  <div className="compare-gridder-left tw-p-4">{secondary.type.name}</div>
                </div>
              </div>
              <div>
                <p className="text-blue tw-mb-4 tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-text-bold tw-text-center md:tw-text-right">
                  مدت زمان
                </p>
                <div className="comapare-gridder-detail bg-primary-pale tw-rounded-xl tw-mb-4">
                  <div className="compare-gridder-right tw-p-4 ">{primary.duration_hours}</div>
                  <div className="compare-gridder-line-constant" />
                  <div className="compare-gridder-left tw-p-4">{secondary.duration_hours}</div>
                </div>
              </div>
              <div>
                <p className="text-blue tw-mb-4 tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-text-bold tw-text-center md:tw-text-right">
                  امتیاز کاربران
                </p>
                <div className="comapare-gridder-detail bg-primary-pale tw-rounded-xl tw-mb-4">
                  <div className="compare-gridder-right tw-p-4 ">{primary.rating.average}</div>
                  <div className="compare-gridder-line-constant" />
                  <div className="compare-gridder-left tw-p-4">{secondary.rating.average}</div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <CategoryMenuMobile />
      </>
      <Modal />
    </>
  );
}
