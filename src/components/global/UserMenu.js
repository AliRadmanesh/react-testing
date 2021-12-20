import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import instance from '../../app/instance';

import walletGray from '../../assets/icons/Wallet-Gray.svg';
import dashboardGray from '../../assets/icons/Dashboard-Gray.svg';
import bookmarksGray from '../../assets/icons/Bookmarks-Gray.svg';
import favoriteGray from '../../assets/icons/Favorite-Gray.svg';
import editGray from '../../assets/icons/Edit-Gray.svg';
import closeGray from '../../assets/icons/Close-Gray.svg';

import { showUserMenu } from '../../app/redux/actions/headerActions';

export default function UserMenu() {
  const { data, showMenu } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const {
    profile: { first_name, last_name, image },
    wallet: { balance },
  } = data;

  const history = useHistory();

  // eslint-disable-next-line
  const handleClick = (e) => {
    // console.log(e.target.classList);
    if (e.target.classList.contains('user-menu')) {
      dispatch(showUserMenu(false));
    }
  };

  const logout = async () => {
    try {
      const res = await instance.post('/api/v1/web/service/users/logout');
      if (res.status === 200) {
        window.localStorage.removeItem('userPhone');
        window.localStorage.removeItem('userToken');
        history.push('/');
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.response.data.message);
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
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(showUserMenu(false));
  }, [window.location.href]);

  return (
    <>
      <div className="tw-block lg:tw-hidden">
        <div
          className="tw-fixed tw-w-full"
          style={{
            zIndex: '8888',
            top: '0',
            display: showMenu ? 'block' : 'none',
          }}
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
          background: 'rgba(0, 0, 0, 0.5)',
          display: showMenu ? 'block' : 'none',
        }}
      >
        <div
          className="tw-w-full tw-h-full tw-absolute"
          style={
            {
              // display: showMenu ? 'block' : 'none',
              // top: showMenu ? '0' : '-10rem',
            }
          }
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
            <Link to="/dashboard/wallet">
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
            </Link>
            <Link to="/dashboard">
              <div className="tw-flex tw-items-center tw-my-5">
                <img src={dashboardGray} alt="" className="icon tw-ml-4" />
                <p className="text-black tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-normal">
                  پنل کاربری
                </p>
              </div>
            </Link>
            <Link to="/dashboard/bookmarks">
              <div className="tw-flex tw-items-center tw-my-5">
                <img src={bookmarksGray} alt="" className="icon tw-ml-4" />
                <p className="text-black tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-normal">
                  بوک‌مارک‌ها
                </p>
              </div>
            </Link>
            <Link to="/dashboard/favorites">
              <div className="tw-flex tw-items-center tw-my-5">
                <img src={favoriteGray} alt="" className="icon tw-ml-4" />
                <p className="text-black tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-normal">
                  علاقه‌مندی‌ها
                </p>
              </div>
            </Link>
            <Link to="/dashboard/edit">
              <div className="tw-flex tw-items-center tw-my-5">
                <img src={editGray} alt="" className="icon tw-ml-4" />
                <p className="text-black tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-normal">
                  ویرایش پروفایل
                </p>
              </div>
            </Link>
            <button className="button-error tw-w-full" onClick={logout}>
              خروج از حساب
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
