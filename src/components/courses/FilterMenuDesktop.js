import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { displayMobileFilterMenu } from '../../app/redux/actions/coursesActions';
import closeIcon from '../../assets/icons/Close-Gray.svg';
import Checkbox from '../../common/template/Checkbox';

export default function FilterMenuDesktop() {
  const { course_types, academies } = useSelector((state) => state.courses.search);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="courses-desktop-filters">
      <div className="tw-p-4 tw-rounded-xl bg-white">
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
          <p className="text-black tw-text-base tw-font-semibold font-kalameh">
            فیلترهای اعمال شده
          </p>
          <button className="text-error tw-text-xs tw-font-normal font-iranyekan tw-p-0">
            حذف فیلترها
          </button>
        </div>
        <div className="tw-flex tw-items-center tw-flex-wrap">
          <div className="tw-p-2 tw-m-2 tw-text-xs tw-flex bg-medium tw-rounded-md">
            <p className="tw-ml-2 text-gray font-iranyekan-num tw-text-sm tw-font-normal">
              برنامه نویسی
            </p>
            <button className="tw-p-0">
              <img src={closeIcon} alt="" style={{ width: '16px' }} />
            </button>
          </div>
        </div>
      </div>
      <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
        <p className="text-black tw-text-base tw-font-semibold tw-mb-4 font-kalameh filters-section">
          آموزشگاه
        </p>
        <div className="filters-section-items">
          {academies.map((academy) => (
            <Checkbox key={academy.id} text={academy.name} classes="font-iranyekan" />
          ))}
        </div>
      </div>
      <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
        <p className="text-black tw-text-base tw-font-semibold tw-mb-4 font-kalameh filters-section">
          نوع برگزاری
        </p>
        <div className="filters-section-items">
          {course_types.map((type) => (
            <Checkbox key={type.id} text={type.name} classes="font-iranyekan" />
          ))}
        </div>
      </div>
    </div>
  );
}
