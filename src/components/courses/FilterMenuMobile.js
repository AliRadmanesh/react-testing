import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayMobileFilterMenu } from '../../app/redux/actions/coursesActions';
import closeIcon from '../../assets/icons/Close-Gray.svg';
import Checkbox from '../../common/template/Checkbox';
import SearchBar from '../global/SearchBar';

export default function FilterMenuMobile() {
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state) => state.courses);
  const { course_types, academies } = useSelector((state) => state.courses.search);

  return (
    <div
      className="courses-mobile-filters tw-fixed bg-light tw-top-0 tw-bottom-0 tw-overflow-y-scroll tw-w-full font-kalameh tw-pb-4"
      style={{ zIndex: '99999', display: showMenu ? 'block' : 'none' }}
    >
      <div className="tw-flex tw-py-4 tw-shadow-sm tw-items-center tw-justify-between lg:tw-hidden bg-white container">
        <p className="text-black tw-text-base tw-font-regular">فیلتر جستجو</p>
        <button className="tw-p-0" onClick={() => dispatch(displayMobileFilterMenu(false))}>
          <img src={closeIcon} alt="" className="icon" />
        </button>
      </div>
      <div className="container">
        <div className="tw-py-6">
          <SearchBar classes="tw-py-2" />
        </div>
        <div className="tw-p-4 tw-rounded-xl bg-white">
          <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
            <p className="text-black tw-text-base tw-font-semibold">فیلترهای اعمال شده</p>
            <button className="text-error tw-text-xs tw-font-normal font-iranyekan tw-p-0">
              حذف فیلترها
            </button>
          </div>
          <div className="tw-flex tw-items-center tw-flex-wrap">
            <div className="tw-p-2 tw-m-2 tw-text-xs tw-flex bg-medium tw-rounded-md">
              <p className="tw-ml-2 text-gray">برنامه نویسی</p>
              <button className="tw-p-0">
                <img src={closeIcon} alt="" style={{ width: '16px' }} />
              </button>
            </div>
          </div>
        </div>
        <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
          <p className="text-black tw-text-base tw-font-semibold tw-mb-4">آموزشگاه</p>
          {academies.map((academy) => (
            <Checkbox key={academy.id} text={academy.name} />
          ))}
        </div>
        <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
          <p className="text-black tw-text-base tw-font-semibold tw-mb-4">نوع برگزاری</p>
          {course_types.map((type) => (
            <Checkbox key={type.id} text={type.name} />
          ))}
        </div>
        <button className="button-primary tw-w-full tw-sticky tw-bottom-0">اعمال تغییرات</button>
      </div>
    </div>
  );
}
