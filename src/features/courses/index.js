import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Layout from '../../common/Layout/chill';
import SearchBar from '../../components/global/SearchBar';
import CourseCard from '../../components/courses/CourseCard';
import FilterMenuButton from '../../components/courses/FilterMenuButton';
import FilterMenuMobile from '../../components/courses/FilterMenuMobile';
import FilterMenuDesktop from '../../components/courses/FilterMenuDesktop';
import SortDropdown from '../../components/courses/SortDropdown';
import IsFreeDropdown from '../../components/courses/IsFreeDropdown';
import { getSearchContent, setCoursesCategory } from '../../app/redux/actions/coursesActions';
import {
  searchCourses,
  setCurrentPage,
  setQueryKeywords,
} from '../../app/redux/actions/searchActions';
import { useFilters, useQuery } from '../../common/hooks/search';
import arrow from '../../assets/icons/Arrow Down Gray.svg';

import './courses.css';

export default function Courses() {
  const pageValue = window.location.href.split('=')[1];

  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  const {
    options: { course_types, academies },
    sort,
    is_free,
    filters,
  } = useSelector((state) => state.courses);

  const {
    courses,
    value,
    page: { current, total },
  } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(setCoursesCategory(pageValue));
    // dispatch(searchCategoryCourses(pageValue));
  }, [pageValue]);

  useEffect(() => {
    dispatch(getSearchContent());
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line
  const onSearch = () => {
    const bool = true;
    if (bool) {
      return <Redirect to="../" />;
    }
  };

  useFilters();

  return (
    <Layout title="کورس‌ها" text="دوره‌های آموزشی">
      <div className="container courses">
        <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
          <div className="tw-hidden lg:tw-block">
            <SearchBar />
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
            {courses.length === 0 && (
              <p className="tw-text-base text-dark font-kalameh-num tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold tw-mt-3">
                موردی برای نمایش وجود ندارد.
              </p>
            )}
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
        <div className="tw-grid tw-place-items-center tw-my-8 2xl:tw-my-16">
          <ReactPaginate
            onPageChange={({ selected }) => dispatch(setCurrentPage(selected + 1))}
            breakLabel="..."
            nextLabel={
              <span className="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item">
                <img
                  src={arrow}
                  alt=""
                  style={{ width: '40%', height: 'auto', transform: 'rotate(90deg)' }}
                />
              </span>
            }
            pageCount={total}
            previousLabel={
              <span className="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item">
                <img
                  src={arrow}
                  alt=""
                  style={{ width: '40%', height: 'auto', transform: 'rotate(-90deg)' }}
                />
              </span>
            }
            initialPage={0}
            marginPagesDisplayed={1}
            containerClassName="tw-flex tw-items-center font-kalameh-num"
            pageClassName="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item"
            activeClassName="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item-active"
          />
        </div>
      </div>
      <div>
        <FilterMenuMobile />
      </div>
      <FilterMenuButton />
    </Layout>
  );
}
