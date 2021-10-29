/* 
  Category Menu Mobile Version. This files contains of a simple dispatch calling
  for Close functionlity imported from headerActions. Dropping the sub-menus is 
  being handled by css targeted in _pages.scss under category-dropdown section. 
  Also, sections are devided seperately and commented by their number. 
*/
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showCategoryMobileMenu, getMenuCategories } from '../../app/redux/actions/headerActions';
import it from '../../assets/icons/Category/IT-Dark-Small.svg';
import data from '../../assets/icons/Category/Intelligence and data-Dark-Small.svg';
import marketing from '../../assets/icons/Category/Marketing-Dark-Small.svg';
import art from '../../assets/icons/Category/Graphic-Dark-Small.svg';
import economic from '../../assets/icons/Category/Economics and Finance-Dark-Small.svg';
import science from '../../assets/icons/Category/Science-Dark-Small.svg';
import language from '../../assets/icons/Category/Language-Dark-Small.svg';
import general from '../../assets/icons/Category/General-Dark-Small.svg';
import arrow from '../../assets/icons/Arrow Down Gray.svg';
import close from '../../assets/icons/Close-Gray.svg';

export default function CategoryMenuMobile() {
  const dispatch = useDispatch();
  const { categoryMobile, categories } = useSelector((state) => state.header);

  useEffect(() => {
    if (categories.length === 0) dispatch(getMenuCategories());
  });

  return (
    <div style={{ display: categoryMobile ? 'block' : 'none' }}>
      <div
        className="bg-light tw-min-h-screen tw-w-full tw-fixed tw-top-0 font-kalameh-num"
        style={{ zIndex: '99999' }}
      >
        <div className="tw-flex tw-items-center tw-p-4 tw-shadow bg-white">
          <button className="tw-p-0 tw-m-0" onClick={() => dispatch(showCategoryMobileMenu(false))}>
            <img src={close} alt="" className="icon" />
          </button>
          <p className="tw-text-base tw-font-normal tw-mr-4">دسته بندی</p>
        </div>
        <div className="tw-p-4">
          {categories.map((ci) => (
            <div key={ci.id} className="category-dropdown-container tw-relative tw-my-2">
              <div
                onClick={(e) => e.target.classList.toggle('active')}
                role="none"
                className="tw-flex tw-items-center tw-justify-between tw-mb-2 tw-p-4 tw-shadow tw-rounded-xl category-dropdown tw-cursor-pointer"
              >
                <div className="tw-flex tw-items-center">
                  <img src={ci.image} alt="" className="icon tw-opacity-50" />
                  <p className="tw-text-sm tw-font-medium tw-mr-4">{ci.name}</p>
                </div>
                <img src={arrow} alt="" className="tw-w-4" />
              </div>
              <div className="category-dropdown-items tw-relative tw-w-full">
                {ci.sub.map((si) => (
                  <Link
                    to="../courses/category[0]=1"
                    key={si.id}
                    className="category-dropdown-item tw-py-4 tw-text-sm tw-font-normal tw-px-4 tw-block"
                  >
                    {si.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
