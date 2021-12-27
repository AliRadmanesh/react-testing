/* eslint-disable array-callback-return */
/* eslint-disable radix */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import instance from '../../app/instance';

import Error404 from '../../components/search/Error404';
import Layout from '../../common/Layout/chill';
import SearchBar from '../../components/global/SearchBar';
import CourseCard from '../../components/courses/CourseCard';
import FilterMenuButton from '../../components/search/FilterMenuButton';
import FilterMenuMobile from '../../components/search/FilterMenuMobile';
import FilterMenuDesktop from '../../components/search/FilterMenuDesktop';
import SortDropdown from '../../components/search/SortDropdown';
import IsFreeDropdown from '../../components/search/IsFreeDropdown';
import {
  searchQuery,
  setQuerySort,
  setQueryIsFree,
  addQueryAcademyFilter,
  addQueryTypeFilter,
  setQueryCurrentPage,
  clearQueryFilters,
  setQueryOptions,
} from '../../app/redux/actions/searchActions';
import '../courses/courses.css';
import arrow from '../../assets/icons/Arrow Down Gray.svg';

export default function Search() {
  const {
    query: {
      result,
      query_total_results,
      page: { total },
      status,
      options,
    },
  } = useSelector((state) => state.search);
  const [urlQuery, setUrlQuery] = useState(new URL(window.location).searchParams.get('q'));

  const dispatch = useDispatch();
  const history = useHistory();

  const setOptions = () => {
    const params = new URL(window.location).searchParams;
    // eslint-disable-next-line no-restricted-syntax
    for (const pair of params) {
      if (pair[0].includes('sortby')) {
        dispatch(setQuerySort(parseInt(pair[1])));
      }
      if (pair[0].includes('page')) {
        dispatch(setQueryCurrentPage(parseInt(pair[1])));
      }
      if (pair[0].includes('is_free')) {
        dispatch(setQueryIsFree(parseInt(pair[1])));
      }
    }
  };

  const setFilters = () => {
    dispatch(clearQueryFilters());
    const params = new URL(window.location).searchParams;
    // eslint-disable-next-line no-restricted-syntax
    for (const pair of params) {
      if (pair[0].includes('academy')) {
        options.academies.map((academy) => {
          if (academy.id == parseInt(pair[1])) {
            dispatch(addQueryAcademyFilter({ id: academy.id, name: academy.name }));
          }
        });
      }
      if (pair[0].includes('type')) {
        options.course_types.map((type) => {
          if (type.id == parseInt(pair[1])) {
            dispatch(addQueryTypeFilter({ id: type.id, name: type.name, type: type.type }));
          }
        });
      }
    }
  };

  const getSearchOptions = async () => {
    try {
      const res = await instance.get('/api/v1/web/content/courses/search-content');
      if (res.status === 200) {
        dispatch(setQueryOptions(res.data.data));
        setOptions();
      }
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    setFilters();
  }, [options]);

  useEffect(() => {
    setUrlQuery(new URL(window.location).searchParams.get('q'));
    dispatch(searchQuery(new URL(window.location).search));
    if (options.academies.length === 0 || options.course_types.length === 0) {
      getSearchOptions();
    } else {
      setOptions();
      setFilters();
    }
  }, [window.location.search]);

  return (
    <>
      {status === 400 && <Error404 query={urlQuery} />}

      {status === 200 && (
        <Layout
          title={`نتایج جستجوی «${urlQuery}»`}
          text={`${query_total_results} دوره آموزشی یافت شد`}
        >
          <div className="container Query">
            <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
              <div className="tw-hidden lg:tw-block">
                <SearchBar />
              </div>
              <div className="tw-flex tw-items-center text-dark tw-flex-col md:tw-flex-row md:tw-justify-between md:tw-items-center lg:tw-justify-end">
                <div className="tw-mb-4 md:tw-mb-0 tw-flex tw-justify-start tw-w-full lg:tw-justify-end lg:tw-ml-4">
                  <p className="font-kalameh-num tw-text-xs tw-font-normal 2xl:tw-text-base">
                    مرتب‌شده براساس:‌
                  </p>
                </div>
                <div className="tw-grid tw-gap-x-4 tw-grid-cols-2 md:tw-flex tw-w-full lg:tw-w-auto md:tw-justify-end">
                  <div className="tw-w-full md:tw-w-auto">
                    <SortDropdown />
                  </div>
                  <div className="tw-w-full md:tw-w-auto">
                    <IsFreeDropdown />
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
              <div className="tw-hidden lg:tw-block">
                <FilterMenuDesktop />
              </div>
              <div>
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
                    description={item.description}
                    prices={item.prices}
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
                onPageChange={({ selected }) => {
                  const url = new URL(window.location);
                  url.searchParams.set('page', selected + 1);
                  history.push(`./${url.search}`);
                  window.scrollTo(0, 0);
                }}
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
                pageClassName="tw-mx-1 tw-grid"
                activeClassName="tw-mx-1 tw-grid"
                activeLinkClassName="pagination-page-item-active tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold tw-grid tw-place-items-center tw-rounded-xl"
                pageLinkClassName="pagination-page-item tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold tw-grid tw-place-items-center tw-rounded-xl"
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
