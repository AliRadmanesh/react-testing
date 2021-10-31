import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Layout from '../../common/Layout/chill';
import SearchBar from '../global/SearchBar';
import CourseCard from '../courses/CourseCard';
import FilterMenuButton from '../courses/FilterMenuButton';
import FilterMenuMobile from '../courses/FilterMenuMobile';
import FilterMenuDesktop from '../courses/FilterMenuDesktop';
import SortDropdown from '../courses/SortDropdown';
import IsFreeDropdown from '../courses/IsFreeDropdown';
import { setCurrentPage } from '../../app/redux/actions/searchActions';
import { getSearchContent } from '../../app/redux/actions/coursesActions';
import { useQuery } from '../../common/hooks/search';
import arrow from '../../assets/icons/Arrow Down Gray.svg';

export default function Result({ query }) {
  const dispatch = useDispatch();

  const {
    page: { total },
    keywords,
    result,
  } = useSelector((state) => state.search.query);

  const {
    options: { academies, course_types },
  } = useSelector((state) => state.courses);

  useEffect(() => {
    console.log(result);
    if (academies.length === 0 || course_types.length === 0) dispatch(getSearchContent());
  }, []);

  // useQuery();

  return (
    <Layout title={`نتایج جستجو برای «${keywords}»`} text="دوره‌های آموزشی">
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
