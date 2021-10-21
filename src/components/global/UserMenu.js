import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import walletGray from '../../assets/icons/Wallet-Gray.svg';
import dashboardGray from '../../assets/icons/Dashboard-Gray.svg';
import bookmarksGray from '../../assets/icons/Bookmarks-Gray.svg';
import favoriteGray from '../../assets/icons/Favorite-Gray.svg';
import editGray from '../../assets/icons/Edit-Gray.svg';
import closeGray from '../../assets/icons/Close-Gray.svg';

import { showUserMenu } from '../../app/redux/actions/headerActions';

export default function UserMenu() {
  const { data, showMenu } = useSelector((state) => state.header);
  const ref = useRef();
  const dispatch = useDispatch();
  const {
    profile: { first_name, last_name, image },
    wallet: { balance },
  } = data;

  // eslint-disable-next-line
  const handleClick = (e) => {
    // console.log(e.target.classList);
    if (e.target.classList.contains('user-menu')) {
      dispatch(showUserMenu(false));
    }
  };

  useEffect(() => {
    // document.addEventListener('click', handleClick);
    // return () => {
    //   document.removeEventListener('click', handleClick);
    // };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div className="tw-block lg:tw-hidden">
        <div
          className="tw-fixed tw-w-full"
          style={{ zIndex: '8888', top: '0', display: showMenu ? 'block' : 'none' }}
        >
          <div className="tw-flex tw-justify-between tw-items-center bg-white tw-px-4 tw-py-6 tw-shadow">
            <p className="font-kalameh-num tw-text-base tw-font-normal">منوی کاربر</p>
            <button className="tw-p-0" onClick={() => dispatch(showUserMenu(false))}>
              <img src={closeGray} alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* MENU CONTENT */}
      <div
        id="user-menu-container"
        className="tw-fixed user-menu-container"
        style={{
          width: '100%',
          height: window.innerHeight,
          zIndex: '8888',
          top: '0',
          // background: 'rgba(0, 0, 0, 0.5)',
          display: showMenu ? 'block' : 'none',
        }}
      >
        <div
          className="tw-w-full tw-h-full tw-absolute"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            dsiplay: showMenu ? 'block' : 'none',
          }}
        />
        <div className="tw-relative tw-w-full tw-h-full user-menu">
          <div className="tw-px-4 tw-py-4 tw-w-full tw-max-w-full lg:tw-max-w-md font-kalameh-num bg-white user-menu-content">
            <div className="tw-flex tw-my-5 lg:tw-hidden tw-items-center">
              <img
                src={image}
                alt=""
                className="tw-rounded-xl tw-ml-4"
                style={{ width: '50px', height: '50px' }}
              />
              {/* <div className="tw-flex tw-flex-col tw-items-center"> */}
              <p className="tw-text-sm tw-font-medium text-black">
                {first_name} {last_name}
              </p>
              {/* </div> */}
            </div>
            <div className="tw-flex tw-justify-between tw-items-center tw-my-5">
              <div className="tw-flex tw-items-center">
                <img src={walletGray} alt="" className="icon tw-ml-4" />
                <p className="text-black tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-normal">
                  موجودی کیف پول شما
                </p>
              </div>
              <p className="text-gray tw-text-left tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-normal">
                {balance}
              </p>
            </div>
            <div className="tw-flex tw-items-center tw-my-5">
              <img src={dashboardGray} alt="" className="icon tw-ml-4" />
              <p className="text-black tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-normal">
                پنل کاربری
              </p>
            </div>
            <div className="tw-flex tw-items-center tw-my-5">
              <img src={bookmarksGray} alt="" className="icon tw-ml-4" />
              <p className="text-black tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-normal">
                بوک‌مارک‌ها
              </p>
            </div>
            <div className="tw-flex tw-items-center tw-my-5">
              <img src={favoriteGray} alt="" className="icon tw-ml-4" />
              <p className="text-black tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-normal">
                علاقه‌مندی‌ها
              </p>
            </div>
            <div className="tw-flex tw-items-center tw-my-5">
              <img src={editGray} alt="" className="icon tw-ml-4" />
              <p className="text-black tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-normal">
                ویرایش پروفایل
              </p>
            </div>
            <button className="button-error tw-w-full">خروج از حساب</button>
          </div>
        </div>
      </div>
    </>
  );
}
