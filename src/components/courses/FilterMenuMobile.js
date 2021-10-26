import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  displayMobileFilterMenu,
  addCoursesAcademyFilter,
  removeCoursesAcademyFilter,
  addCoursesTypeFilter,
  removeCoursesTypeFilter,
  clearCoursesFilters,
} from '../../app/redux/actions/coursesActions';
import closeIcon from '../../assets/icons/Close-Gray.svg';
import Checkbox from '../../common/template/Checkbox';
import SearchBar from '../global/SearchBar';
import FilterIndicator from './FilterIndicator';

export default function FilterMenuMobile() {
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state) => state.courses);
  const { course_types, academies } = useSelector((state) => state.courses.options);
  const { filters } = useSelector((state) => state.courses);

  const filterAcademy = (event, item) => {
    if (event.target.checked) {
      dispatch(addCoursesAcademyFilter({ id: item.id, title: item.name }));
    } else {
      dispatch(removeCoursesAcademyFilter(item.id));
    }
  };

  const filterType = (event, item) => {
    if (event.target.checked) {
      dispatch(addCoursesTypeFilter({ id: item.id, title: item.name }));
    } else {
      dispatch(removeCoursesTypeFilter(item.id));
    }
  };

  const clearAllFilters = () => {
    dispatch(clearCoursesFilters());
    document.querySelectorAll('[class*="academy-mobile-"]').forEach((item) => {
      if (item.querySelector('input').checked) item.querySelector('input').checked = false;
    });
    document.querySelectorAll('[class*="type-mobile-"]').forEach((item) => {
      if (item.querySelector('input').checked) item.querySelector('input').checked = false;
    });
  };

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
            <button
              className="text-error tw-text-xs tw-font-normal font-iranyekan tw-p-0"
              onClick={clearAllFilters}
            >
              حذف فیلترها
            </button>
          </div>
          <div className="tw-flex tw-items-center tw-flex-wrap">
            {filters.academies.map((academy) => (
              <FilterIndicator
                key={academy.id}
                title={academy.title}
                onDelete={() => {
                  dispatch(removeCoursesAcademyFilter(academy.id));
                  // console.log(document.querySelector(`.academy-${academy.id} input`));
                  document.querySelector(`.academy-mobile-${academy.id} input`).checked = false;
                }}
              />
            ))}
            {filters.course_types.map((type) => (
              <FilterIndicator
                key={type.id}
                title={type.title}
                onDelete={() => {
                  dispatch(removeCoursesTypeFilter(type.id));
                  // console.log(document.querySelector(`.academy-${academy.id}`));
                  document.querySelector(`.type-mobile-${type.id} input`).checked = false;
                }}
              />
            ))}
          </div>
        </div>
        <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
          <p className="text-black tw-text-base tw-font-semibold tw-mb-4">آموزشگاه</p>
          {academies.map((academy) => (
            <Checkbox
              key={academy.id}
              text={academy.name}
              classes={`font-iranyekan-num academy-mobile-${academy.id}`}
              onChange={(e) => filterAcademy(e, academy)}
            />
          ))}
        </div>
        <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
          <p className="text-black tw-text-base tw-font-semibold tw-mb-4">نوع برگزاری</p>
          {course_types.map((type) => (
            <Checkbox
              key={type.id}
              text={type.name}
              classes={`font-iranyekan-num type-mobile-${type.id}`}
              onChange={(e) => filterType(e, type)}
            />
          ))}
        </div>
        <button className="button-primary tw-w-full tw-sticky tw-bottom-0">اعمال تغییرات</button>
      </div>
    </div>
  );
}
