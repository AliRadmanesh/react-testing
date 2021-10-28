/* eslint-disable array-callback-return */
/* eslint-disable one-var */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '../../common/Layout/chill';
import SearchBar from '../../components/global/SearchBar';
import CourseCard from '../../components/courses/CourseCard';
import FilterMenuButton from '../../components/courses/FilterMenuButton';
import FilterMenuMobile from '../../components/courses/FilterMenuMobile';
import FilterMenuDesktop from '../../components/courses/FilterMenuDesktop';
import SortDropdown from '../../components/courses/SortDropdown';
import IsFreeDropdown from '../../components/courses/IsFreeDropdown';
import { getSearchContent } from '../../app/redux/actions/coursesActions';
import { searchCourses, searchCategoryCourses } from '../../app/redux/actions/searchActions';

import './courses.css';

export default function CourseList() {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  const pageValue = window.location.href.split('=')[1];

  const {
    options: { course_types, academies },
    sort,
    is_free,
    filters,
  } = useSelector((state) => state.courses);

  const { courses, query } = useSelector((state) => state.search);

  const onSearch = () => {
    // console.log(academies);
    const acaArr = filters.academies;
    console.log(acaArr);
  };

  useEffect(() => {
    // dispatch(getSearchContent(), getData());
    dispatch(getSearchContent());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(searchCategoryCourses(pageValue));
  }, [pageValue]);

  return (
    <Layout title="کورس‌ها" text="دوره‌های آموزشی">
      <div className="container courses">
        <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
          <div className="tw-hidden lg:tw-block">
            <SearchBar onSearch={onSearch} />
          </div>
          <div className="tw-flex tw-items-center text-dark tw-flex-col lg:tw-flex-row lg:tw-justify-end">
            <p className="font-kalameh-num tw-text-xs tw-font-normal 2xl:tw-text-base tw-ml-4 tw-mb-4 lg:tw-mb-0 tw-self-start lg:tw-self-center">
              مرتب‌شده براساس:‌
            </p>
            <div className="tw-grid tw-gap-x-4 tw-grid-cols-2 lg:tw-flex tw-w-full lg:tw-w-auto">
              <div className="">
                <SortDropdown />
              </div>
              <div className="">
                <IsFreeDropdown />
              </div>
            </div>
          </div>
        </div>
        <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
          <div className="tw-hidden lg:tw-block">
            <FilterMenuDesktop />
          </div>
          <div className="">
            {courses.map((item) => (
              <CourseCard
                key={item.id}
                title={item.title}
                description=""
                price={item.price}
                author={{ first_name: '', last_name: '', image: '' }}
                rating={item.rating.average}
                academy={item.academy}
                duration={item.duration}
                type={item.type}
                is_free={item.is_free}
                image={item.images.cover}
                discount={item.discount}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <FilterMenuMobile />
      </div>
      <FilterMenuButton />
    </Layout>
  );
}
