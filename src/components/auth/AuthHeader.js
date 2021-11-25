import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoSmall from '../../assets/images/logo/karsaz/logo-small.svg';
import logoLarge from '../../assets/images/logo/karsaz/logo-large.svg';
import backArrowIcon from '../../assets/icons/Right arrow.svg';
import backArrowWhiteIcon from '../../assets/icons/Right arrow white.svg';
import searchIcon from '../../assets/icons/Search.svg';

export default function Header() {
  const [show, doShow] = useState(false);
  const history = useHistory();

  return (
    <>
      <div
        id="auth-header-mobile"
        className="tw-block lg:tw-hidden tw-w-screen auth-header-mobile tw-absolute tw-z-10 tw-top-0 tw-overflow-x-hidden"
      >
        <div className="container bg-light tw-flex tw-justify-between tw-items-center tw-py-4 tw-shadow">
          <div className="tw-flex tw-items-center bg-white">
            <img src={logoSmall} className="tw-ml-4" alt="" />
            <p className="tw-font-black text-blue tw-text-base">کارساز</p>
          </div>
          <button className="button-secondary tw-rounded-xl tw-p-0">
            <img src={backArrowIcon} alt="" />
          </button>
        </div>
      </div>
      <div
        id="auth-header-desktop"
        className="tw-hidden lg:tw-block tw-w-full auth-header-desktop tw-absolute tw-z-10 tw-top-0 tw-overflow-x-hidden"
      >
        <div className="container tw-bg-transparent tw-flex tw-justify-between items-center tw-py-4">
          <div className="tw-flex tw-items-center tw-flex-row">
            <img src={logoLarge} alt="" />
            <h3 className="tw-mr-4 tw-font-black text-blue">کارساز</h3>
          </div>
          <div className="tw-flex">
            <div id="auth-header-desktop-back" className="tw-mr-4 auth-header-desktop-back">
              <button
                onClick={() => history.goBack()}
                className="button-secondary border-white tw-flex tw-flex-row tw-items-center"
                style={{}}
              >
                <div className="hoverer tw-z-0 tw-relative">
                  <p ckassName="text font-kalameh tw-block">بازگشت به صفحه اصلی</p>
                </div>
                <div className="tw-z-10">
                  <img src={backArrowIcon} alt="" className="primary tw-mr-4" />
                  <img src={backArrowWhiteIcon} alt="" className="white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
