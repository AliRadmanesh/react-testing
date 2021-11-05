/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Error404 from '../../components/search/Error404';
import Result from '../../components/search/Result';
import Layout from '../../common/Layout/chill';
import SearchBar from '../../components/global/SearchBar';
import CourseCard from '../../components/search/CourseCard';
import FilterMenuButton from '../../components/search/FilterMenuButton';
import FilterMenuMobile from '../../components/search/FilterMenuMobile';
import FilterMenuDesktop from '../../components/search/FilterMenuDesktop';
import SortDropdown from '../../components/search/SortDropdown';
import IsFreeDropdown from '../../components/search/IsFreeDropdown';
import {
  searchQuery,
  setQueryString,
  setQuerySort,
  setQueryIsFree,
  addQueryAcademyFilter,
  removeQueryAcademyFilter,
  addQueryTypeFilter,
  removeQueryTypeFilter,
  setQueryKeywords,
  setQueryTotalPage,
  setQueryCurrentPage,
} from '../../app/redux/actions/searchActions';
import { getSearchContent } from '../../app/redux/actions/coursesActions';
import '../courses/courses.css';
import arrow from '../../assets/icons/Arrow Down Gray.svg';

console.log(new URL(window.location).search);

const constant =
  new URL(window.location).searchParams.get('q') == 'null'
    ? window.localStorage.getItem('query')
    : new URL(window.location).searchParams.get('q');

console.log(`constant: ${constant}`);
window.localStorage.setItem('query', constant);

export default function Search() {
  const {
    query: {
      keywords,
      result,
      page: { total, current },
      status,
      string,
      filters: { academies, types, sort, is_free },
    },
  } = useSelector((state) => state.search);

  const { options } = useSelector((state) => state.courses);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // dispatch(searchQuery(window.location.href.split('q=')[1]));
    dispatch(getSearchContent());
  }, []);

  useEffect(() => {
    console.log(new URL(window.location).search);
    dispatch(searchQuery(new URL(window.location).search));
  }, [new URL(window.location).search]);

  useEffect(() => {
    const { searchParams } = new URL(window.location);
    if (options.academies.length !== 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const pair of searchParams.entries()) {
        if (pair[0].includes('academy')) {
          options.academies.forEach((item) => {
            if (item.id == pair[1]) {
              const object = { id: item.id, title: item.name };
              dispatch(addQueryAcademyFilter(object));
            }
          });
        }
      }
    }
    if (options.course_types.length !== 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const pair of searchParams.entries()) {
        if (pair[0].includes('type')) {
          options.course_types.forEach((item) => {
            if (item.id == pair[1]) {
              const object = { id: item.id, title: item.name };
              dispatch(addQueryTypeFilter(object));
            }
          });
        }
      }
    }
  }, [options]);

  useEffect(() => {
    const url = new URL(window.location.origin);
    url.searchParams.set('q', constant);
    academies.forEach((item, index) => {
      url.searchParams.set(`academy[${index}]`, item.id);
    });
    types.forEach((item, index) => {
      url.searchParams.set(`type[${index}]`, item.id);
    });
    url.searchParams.set(`sort`, sort);
    url.searchParams.set(`is_free`, is_free);
    url.searchParams.set(`page`, current);
    // console.log(url.search);
    history.push(`./${url.search}`);
  }, [academies, types, sort, is_free, current]);

  return (
    <>
      {status === 400 && <Error404 query={constant} />}

      {status === 200 && (
        <Layout title={`نتایج جستجو برای «${constant}»`}>
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
                {result.length === 0 && (
                  <p className="tw-text-base text-dark font-kalameh-num tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold tw-mt-3">
                    موردی برای نمایش وجود ندارد.
                  </p>
                )}
                {result.map((item) => (
                  <CourseCard
                    key={item.id}
                    id={item.id}
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
                onPageChange={({ selected }) => dispatch(setQueryCurrentPage(selected + 1))}
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
      )}
    </>
  );
}
