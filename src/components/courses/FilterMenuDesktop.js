/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCoursesAcademyFilter,
  removeCoursesAcademyFilter,
  addCoursesTypeFilter,
  removeCoursesTypeFilter,
  clearCoursesFilters,
} from '../../app/redux/actions/coursesActions';
import Checkbox from '../../common/template/Checkbox';
import FilterIndicator from './FilterIndicator';
import {} from '../../common/hooks/search';

export default function FilterMenuDesktop() {
  const { course_types, academies } = useSelector((state) => state.courses.options);
  const { filters } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const history = useHistory();

  const filterAcademy = (event, item) => {
    const url = new URL(window.location);
    if (!event.target.checked) {
      let temp;
      for (const pair of url.searchParams) {
        // eslint-disable-next-line eqeqeq
        if (pair[0].includes('academy') && pair[1] == item.id) {
          temp = pair[0];
          break;
        }
      }
      url.searchParams.delete(temp);
    } else {
      let counter;
      counter = 0;
      for (const pair of url.searchParams) {
        if (pair[0].includes('academy')) counter += 1;
      }
      url.searchParams.set(`academy[${counter}]`, item.id);
    }
    history.push(`./${url.search}`);
  };

  const filterType = (event, item) => {
    const url = new URL(window.location);
    if (!event.target.checked) {
      let temp;
      for (const pair of url.searchParams) {
        if (pair[0].includes('type') && pair[1] == item.id) {
          temp = pair[0];
          break;
        }
      }
      url.searchParams.delete(temp);
    } else {
      let counter;
      counter = 0;
      for (const pair of url.searchParams) {
        if (pair[0].includes('type')) counter += 1;
      }
      url.searchParams.set(`type[${counter}]`, item.id);
    }
    history.push(`./${url.search}`);
  };

  const clearAllFilters = () => {
    const url = new URL(window.location);
    const arr = [];
    for (const pair of url.searchParams) {
      if (pair[0].includes('academy') || pair[0].includes('type')) {
        arr.push(pair[0]);
      }
    }
    arr.map((key) => url.searchParams.delete(key));

    history.push(`./${url.search}`);
    document.querySelectorAll('[class*="academy-desktop-"]').forEach((element) => {
      element.querySelector('input').checked = false;
    });
    document.querySelectorAll('[class*="type-desktop-"]').forEach((element) => {
      element.querySelector('input').checked = false;
    });
  };

  useEffect(() => {
    document.querySelectorAll('[class*="academy-desktop-"]').forEach((element) => {
      const temp = element.classList[2].split('-')[2];
      filters.academies.map((academy) => {
        if (temp == academy.id) {
          element.querySelector('input').checked = true;
        }
      });
    });
    document.querySelectorAll('[class*="type-desktop-"]').forEach((element) => {
      const temp = element.classList[2].split('-')[2];
      filters.course_types.map((type) => {
        if (temp == type.id) {
          element.querySelector('input').checked = true;
        }
      });
    });
  }, [filters]);

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
          {filters.academies.map((academy) => (
            <FilterIndicator
              key={academy.id}
              title={academy.name}
              onDelete={() => {
                const url = new URL(window.location);
                for (const pair of url.searchParams) {
                  if (pair[0].includes('academy') && pair[1] == academy.id) {
                    url.searchParams.delete(pair[0]);
                    break;
                  }
                }
                history.push(`./${url.search}`);
                document.querySelectorAll('[class*="academy-desktop-"]').forEach((element) => {
                  const temp = element.classList[2].split('-')[2];
                  if (academy.id == temp) element.querySelector('input').checked = false;
                });
              }}
            />
          ))}
          {filters.course_types.map((type) => (
            <FilterIndicator
              key={type.id}
              title={type.name}
              secondText={`(${type.type})`}
              onDelete={() => {
                const url = new URL(window.location);
                for (const pair of url.searchParams) {
                  if (pair[0].includes('type') && pair[1] == type.id) {
                    url.searchParams.delete(pair[0]);
                    break;
                  }
                }
                history.push(`./${url.search}`);
                document.querySelectorAll('[class*="type-desktop-"]').forEach((element) => {
                  const temp = element.classList[2].split('-')[2];
                  if (type.id == temp) element.querySelector('input').checked = false;
                });
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
              secondText={`(${type.type})`}
              classes={`font-iranyekan-num type-desktop-${type.id}`}
              onChange={(e) => filterType(e, type)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
