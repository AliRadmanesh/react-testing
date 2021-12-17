import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showCategoryDesktopMenu, getMenuCategories } from '../../app/redux/actions/headerActions';
import { setCategoryId } from '../../app/redux/actions/coursesActions';

export default function CategoryMenuDesktop() {
  const [active, setActive] = useState(1);
  const [total, setTotal] = useState(3);
  const [right, setRight] = useState(0);
  const [width, setWidth] = useState(0);
  const dispatch = useDispatch();
  const { categoryDesktop, categories } = useSelector((state) => state.header);
  const handleClick = (click) => {
    if (click.target.className.includes('category-menu')) {
      dispatch(showCategoryDesktopMenu(false));
    }
  };

  useEffect(() => {
    setWidth(document.querySelector('.titles-container').offsetWidth);

    if (categories.length === 0) dispatch(getMenuCategories());

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ display: categoryDesktop ? 'block' : 'none' }}>
      <div
        className="desktop-category-menu-container container text-black tw-fixed tw-w-full tw-h-screen tw-top-0 font-kalameh tw-hidden lg:tw-block"
        style={{ zIndex: '8888', background: 'rgba(0,0,0,.5)' }}
      >
        {/* <p className="tw-text-white">منوی دسته‌بندی</p> */}
        <div
          className="bg-white"
          style={{ borderRadius: '0 0 12px 12px', transition: 'height .2s' }}
        >
          <div className="tw-relative" style={{ borderBottom: '1px solid #ddd' }}>
            <div className="tw-px-4 titles-container tw-flex tw-justify-between tw-w-auto">
              {categories.map((ci) => (
                <div
                  key={ci.id}
                  className={
                    active === ci.id
                      ? 'header-category-title active tw-py-4 tw-cursor-pointer'
                      : 'header-category-title tw-py-4 tw-cursor-pointer'
                  }
                  onClick={() => setActive(ci.id)}
                  role="none"
                  style={{}}
                >
                  <div className="tw-flex tw-items-center">
                    <img
                      src={ci.image}
                      alt=""
                      className="tw-ml-2"
                      style={{ width: '24px', height: '24px' }}
                    />
                    <p className="tw-text-sm tw-font-medium 2xl:tw-text-lg 2xl:tw-font-semibold ">
                      {ci.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ACTIVE LINE */}
            {/* <div
              className="tw-absolute bg-primary tw-mx-2"
              style={{
                width: '100px',
                height: '4px',
                bottom: '-2px',
                borderRadius: '6px',
                transition: 'right .2s ease-in-out',
                margin: 'auto 2.5rem',
                right:
                  (active === 1 && '0') ||
                  (active === 2 && '12.5%') ||
                  (active === 3 && '25%') ||
                  (active === 4 && '37.5%') ||
                  (active === 5 && '50%') ||
                  (active === 6 && '62.5%') ||
                  (active === 7 && '75%') ||
                  (active === 8 && '87.5%'),
              }}
            /> */}
          </div>
          {/* CONTENT */}
          {categories.map((ci) => (
            <div
              key={ci.id}
              className="tw-px-4 tw-flex-wrap tw-w-auto tw-h-auto"
              style={{ display: active === ci.id ? 'flex' : 'none' }}
            >
              {ci.sub.map((si) => {
                const url = new URL(window.location);
                url.searchParams.set('category[0]', si.id);
                return (
                  <Link
                    key={si.id}
                    // to={`../courses/category[0]=${si.id}&sortby=1&is_free=0&page=1`}
                    to={`../courses/?category[0]=${si.id}&sort=1&is_free=0&page=1`}
                    className="header-category-item tw-py-4 tw-text-sm tw-font-normal 2xl:tw-text-lg"
                    onClick={() => {
                      dispatch(setCategoryId(si.id));
                      dispatch(showCategoryDesktopMenu(false));
                      window.localStorage.setItem('category', si.id);
                    }}
                  >
                    {si.name}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
