import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  addQueryAcademyFilter,
  removeQueryAcademyFilter,
  addQueryTypeFilter,
  removeQueryTypeFilter,
  clearQueryFilters,
} from '../../app/redux/actions/searchActions';
import Checkbox from '../../common/template/Checkbox';
import FilterIndicator from './FilterIndicator';
import {} from '../../common/hooks/search';

export default function FilterMenuDesktop() {
  const { course_types, academies } = useSelector((state) => state.courses.options);
  const {
    filters: { academies: filtersAcademies, types: filtersTypes },
  } = useSelector((state) => state.search.query);
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.search.courses);

  const filterAcademy = (event, item) => {
    if (event.target.checked) {
      dispatch(addQueryAcademyFilter({ id: item.id, title: item.name }));
    } else {
      dispatch(removeQueryAcademyFilter(item.id));
    }
    // search();
  };

  const filterType = (event, item) => {
    if (event.target.checked) {
      dispatch(addQueryTypeFilter({ id: item.id, title: item.name }));
    } else {
      dispatch(removeQueryTypeFilter(item.id));
    }
  };

  const clearAllFilters = () => {
    dispatch(clearQueryFilters());
    document.querySelectorAll('[class*="academy-desktop-"]').forEach((item) => {
      if (item.querySelector('input').checked) item.querySelector('input').checked = false;
    });
    document.querySelectorAll('[class*="type-desktop-"]').forEach((item) => {
      if (item.querySelector('input').checked) item.querySelector('input').checked = false;
    });
  };

  useEffect(() => {
    // console.log(1);
  }, [courses]);

  return (
    <div className="courses-desktop-filters">
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
          {filtersAcademies.map((academy) => (
            <FilterIndicator
              key={academy.id}
              title={academy.title}
              onDelete={() => {
                dispatch(removeQueryAcademyFilter(academy.id));
                // console.log(document.querySelector(`.academy-${academy.id} input`));
                document
                  .querySelectorAll(`.academy-desktop-${academy.id} input`)
                  .forEach((item) => {
                    item.checked = false;
                  });
              }}
            />
          ))}
          {filtersTypes.map((type) => (
            <FilterIndicator
              key={type.id}
              title={type.title}
              onDelete={() => {
                dispatch(removeQueryTypeFilter(type.id));
                // console.log(document.querySelector(`.academy-${academy.id}`));
                document.querySelector(`.type-desktop-${type.id} input`).checked = false;
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
          {academies.map((academy, index) => (
            <Checkbox
              key={academy.id}
              text={academy.name}
              classes={`font-iranyekan-num academy-desktop-${academy.id}`}
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
              classes={`font-iranyekan-num type-desktop-${type.id}`}
              onChange={(e) => filterType(e, type)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
