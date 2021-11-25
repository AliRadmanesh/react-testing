/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import FilterMenuDesktop from './FilterMenuDesktop';
import FilterMenuMobile from './FilterMenuMobile';
import FilterMenuButton from './FilterMenuButton';
import JobCard from '../global/JobCard';
import Loading from '../global/Loading';
import {
  searchJobs,
  clearAllJobsAdustments,
  addJobsContractFilter,
  addJobsExperienceFilter,
  addJobsSalaryFilter,
} from '../../app/redux/actions/jobsActions';

import arrow from '../../assets/icons/Arrow Down Gray.svg';

export default function Search() {
  const dispatch = useDispatch();
  const [urlQuery, setUrlQuery] = useState(new URL(window.location).searchParams.get('q'));
  const city = new URL(window.location).searchParams.get('city[0]') || null;
  const province = new URL(window.location).searchParams.get('province') || null;
  const category = new URL(window.location).searchParams.get('category[0]') || null;

  const {
    search: {
      result,
      loading,
      page: { current, total },
      filters: { work_experiences, contract_types, salary_ranges },
      options,
    },
  } = useSelector((state) => state.jobs);
  const history = useHistory();

  const searchFunction = () => {
    const queryArr = new URL(window.location).search.split('&filters=');
    const query =
      queryArr[1] === '' || queryArr[1] === undefined
        ? `${queryArr[0]}`
        : `${queryArr[0]}/${queryArr[1]}`;
    console.log(query);
    dispatch(searchJobs(query));
  };

  useEffect(() => {
    // dispatch(searchQuery(window.location.href.split('q=')[1]));
    // dispatch(getSearchContent());
    new URL(window.location).searchParams.forEach((value, key) => {
      console.log(key, ': ', value);
      if (key.includes('sort') && value !== 1) {
        console.log(1);
      }
    });
    return () => {
      dispatch(clearAllJobsAdustments());
    };
  }, []);

  useEffect(() => {
    const { searchParams } = new URL(window.location);
    if (options.contract_types.length !== 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const pair of searchParams.entries()) {
        if (pair[0].includes('contract_types')) {
          options.contract_types.forEach((item) => {
            if (item.id == pair[1]) {
              const object = { id: item.id, title: item.name };
              dispatch(addJobsContractFilter(object));
            }
          });
        }
      }
    }
    if (options.work_experiences.length !== 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const pair of searchParams.entries()) {
        if (pair[0].includes('work_experiences')) {
          options.work_experiences.forEach((item) => {
            if (item.id == pair[1]) {
              const object = { id: item.id, title: item.name };
              dispatch(addJobsExperienceFilter(object));
            }
          });
        }
      }
    }
    if (options.salary_ranges.length !== 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const pair of searchParams.entries()) {
        if (pair[0].includes('salary_ranges')) {
          options.salary_ranges.forEach((item) => {
            if (item.id == pair[1]) {
              const object = { id: item.id, title: item.name };
              dispatch(addJobsSalaryFilter(object));
            }
          });
        }
      }
    }
  }, [options]);

  useEffect(() => {
    const base = window.location.origin;
    console.log(base);
    const url = new URL(window.location.origin);
    url.searchParams.set('q', urlQuery);
    work_experiences.forEach((item, index) => {
      url.searchParams.set(`work_experiences[${index}]`, item.id);
    });
    // contract_types.forEach((item, index) => {
    //   url.searchParams.set(`contract_types[${index}]`, item.id);
    // });
    // url.searchParams.set(`page`, current);
    // console.log(url.search);

    history.push(`./${url.search}`);
  }, [work_experiences, current]);

  useEffect(() => {
    dispatch(searchJobs(new URL(window.location).search));
    setUrlQuery(new URL(window.location).searchParams.get('q'));
  }, [new URL(window.location).search]);

  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, [current]);

  return (
    <>
      <div className="container courses ">
        <div className="tw-py-6 2xl:tw-py-16">
          <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
            <div className="tw-hidden lg:tw-block">
              <FilterMenuDesktop />
            </div>
            {loading && <Loading />}
            {!loading && (
              <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-items-start">
                {result.length === 0 && (
                  <p className="tw-text-base text-dark font-kalameh-num tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold tw-mt-3">
                    موردی برای نمایش وجود ندارد.
                  </p>
                )}
                {result.map((item) => (
                  <JobCard key={item.id} props={item} />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="tw-grid tw-place-items-center courses-grid tw-my-8 2xl:tw-my-16">
          <div />
          <ReactPaginate
            // onPageChange={({ selected }) => dispatch(setQueryCurrentPage(selected + 1))}
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
      <FilterMenuMobile />
      <FilterMenuButton />
    </>
  );
}
