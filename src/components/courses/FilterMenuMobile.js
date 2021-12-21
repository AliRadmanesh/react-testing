/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
  const { course_types, academies } = useSelector((state) => state.courses.options);
  const { filters, showMenu } = useSelector((state) => state.courses);
  const history = useHistory();
  const dispatch = useDispatch();

  const filterAcademy = (event, item) => {
    if (event.target.checked) {
      dispatch(addCoursesAcademyFilter({ id: item.id, name: item.name }));
    } else {
      dispatch(removeCoursesAcademyFilter(item.id));
    }
  };

  const filterType = (event, item) => {
    if (event.target.checked) {
      dispatch(addCoursesTypeFilter({ id: item.id, name: item.name, type: item.type }));
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

  const submitChange = () => {
    const url = new URL(window.location);
    const arr = [];
    for (const pair of url.searchParams) {
      if (pair[0].includes('academy') || pair[0].includes('type')) {
        arr.push(pair[0]);
      }
    }
    arr.map((key) => url.searchParams.delete(key));
    filters.academies.map((item, index) => url.searchParams.set(`academy[${index}]`, item.id));
    filters.course_types.map((item, index) => url.searchParams.set(`type[${index}]`, item.id));
    history.push(`./${url.search}`);
    dispatch(displayMobileFilterMenu(false));
  };

  useEffect(() => {
    document.querySelectorAll('[class*="academy-mobile-"]').forEach((element) => {
      const temp = element.classList[2].split('-')[2];
      filters.academies.map((academy) => {
        if (temp == academy.id) {
          element.querySelector('input').checked = true;
        }
      });
    });
    document.querySelectorAll('[class*="type-mobile-"]').forEach((element) => {
      const temp = element.classList[2].split('-')[2];
      filters.course_types.map((type) => {
        if (temp == type.id) {
          element.querySelector('input').checked = true;
        }
      });
    });
  }, [filters]);

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
        <div className="tw-my-6">
          <SearchBar classes="tw-py-4" />
        </div>
        <div className="courses-mobile-filters">
          <div className="tw-p-4 tw-rounded-xl bg-white">
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
              <p className="text-black tw-text-base tw-font-semibold font-kalameh">
                فیلترهای اعمال شده
              </p>
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
                  title={academy.name}
                  onDelete={() => {
                    dispatch(removeCoursesAcademyFilter(academy.id));
                    document.querySelector(`.academy-mobile-${academy.id} input`).checked = false;
                  }}
                />
              ))}
              {filters.course_types.map((type) => (
                <FilterIndicator
                  key={type.id}
                  title={type.name}
                  secondText={`(${type.type})`}
                  onDelete={() => {
                    dispatch(removeCoursesTypeFilter(type.id));
                    document.querySelector(`.type-mobile-${type.id} input`).checked = false;
                  }}
                />
              ))}
            </div>
          </div>
          <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
            <p className="text-black tw-text-base tw-font-semibold tw-mb-4 font-kalameh filters-section">
              آموزشگاه
            </p>
            <div className="filters-section-items">
              {academies.map((academy) => (
                <Checkbox
                  key={academy.id}
                  text={academy.name}
                  classes={`font-iranyekan-num academy-mobile-${academy.id}`}
                  onChange={(e) => filterAcademy(e, academy)}
                />
              ))}
            </div>
          </div>
          <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
            <p className="text-black tw-text-base tw-font-semibold tw-mb-4 font-kalameh filters-section">
              نوع برگزاری
            </p>
            <div className="filters-section-items">
              {course_types.map((type) => (
                <Checkbox
                  key={type.id}
                  text={type.name}
                  secondText={`(${type.type})`}
                  classes={`font-iranyekan-num type-mobile-${type.id}`}
                  onChange={(e) => filterType(e, type)}
                />
              ))}
            </div>
          </div>
          <div className="tw-sticky tw-bottom-0 md:tw-w-3/4 md:tw-mx-auto lg:tw-w-1/2">
            <button className="button-primary tw-w-full " onClick={submitChange}>
              اعمال تغییرات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state) => state.courses);
  const { course_types, academies } = useSelector((state) => state.courses.options);
  const { filters } = useSelector((state) => state.courses);

  const filterAcademy = (event, item) => {
    if (event.target.checked) {
      dispatch(addCoursesAcademyFilter({ id: item.id, name: item.name }));
    } else {
      dispatch(removeCoursesAcademyFilter(item.id));
    }
  };

  const filterType = (event, item) => {
    if (event.target.checked) {
      dispatch(addCoursesTypeFilter({ id: item.id, name: item.name, type: item.name }));
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
        <button
          className="button-primary tw-w-full tw-sticky tw-bottom-0"
          onClick={() => dispatch(displayMobileFilterMenu(false))}
        >
          اعمال تغییرات
        </button>
      </div>
    </div>
  );
  */
