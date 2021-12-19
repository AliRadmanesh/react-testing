/* eslint-disable array-callback-return */
/* eslint-disable radix */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Layout from '../../common/Layout/chill';
import SearchBar from '../../components/global/SearchBar';
import CourseCard from '../../components/courses/CourseCard';
import FilterMenuButton from '../../components/courses/FilterMenuButton';
import FilterMenuMobile from '../../components/courses/FilterMenuMobile';
import FilterMenuDesktop from '../../components/courses/FilterMenuDesktop';
import SortDropdown from '../../components/courses/SortDropdown';
import IsFreeDropdown from '../../components/courses/IsFreeDropdown';
import {
  getSearchContent,
  addCoursesTypeFilter,
  addCoursesAcademyFilter,
  setCoursesSort,
  setCoursesIsFree,
  setSearchContent,
  clearCoursesFilters,
} from '../../app/redux/actions/coursesActions';
import { searchCourses, setCurrentPage } from '../../app/redux/actions/searchActions';
import arrow from '../../assets/icons/Arrow Down Gray.svg';
import './courses.css';
import instance from '../../app/instance';

export default function Courses() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    options,
    sort,
    is_free,
    filters: { course_types, academies },
  } = useSelector((state) => state.courses);
  const {
    courses,
    category,
    total_results,
    page: { current, total },
  } = useSelector((state) => state.search);

  const search = () => {
    console.log(`search: `, window.location.search);
  };

  const setOptions = () => {
    const params = new URL(window.location).searchParams;
    // eslint-disable-next-line no-restricted-syntax
    for (const pair of params) {
      if (pair[0].includes('sort')) {
        dispatch(setCoursesSort(parseInt(pair[1])));
      }
      if (pair[0].includes('page')) {
        dispatch(setCurrentPage(parseInt(pair[1])));
      }
      if (pair[0].includes('is_free')) {
        dispatch(setCoursesIsFree(parseInt(pair[1])));
      }
    }
  };

  const setFilters = () => {
    dispatch(clearCoursesFilters());
    const params = new URL(window.location).searchParams;
    // eslint-disable-next-line no-restricted-syntax
    for (const pair of params) {
      if (pair[0].includes('academy')) {
        options.academies.map((academy) => {
          if (academy.id == parseInt(pair[1])) {
            dispatch(addCoursesAcademyFilter({ id: academy.id, name: academy.name }));
          }
        });
      }
      if (pair[0].includes('type')) {
        options.course_types.map((type) => {
          if (type.id == parseInt(pair[1])) {
            dispatch(addCoursesTypeFilter({ id: type.id, name: type.name, type: type.type }));
          }
        });
      }
    }
  };

  const redirecter = () => {
    const url = new URL(window.location);
    url.searchParams.set('academy[0]', parseInt(url.searchParams.get('academy[0]')) + 1);
    url.searchParams.set('sort', parseInt(url.searchParams.get('sort')) + 1);
    history.push(`./${url.search}`);
  };

  const getSearchOptions = async () => {
    try {
      const res = await instance.get('/api/v1/web/content/courses/search-content');
      if (res.status === 200) {
        dispatch(setSearchContent(res.data.data));
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
    // setCategory(new URL(window.location).searchParams.get('category[0]'));
    dispatch(searchCourses(new URL(window.location).search));
    if (options.academies.length === 0 || options.course_types.length === 0) {
      getSearchOptions();
    } else {
      setOptions();
      setFilters();
    }
  }, [window.location.search]);

  return (
    <Layout
      title={category ? category.name : 'آموزش‌ها'}
      text={`${total_results} دوره آموزشی یافت شد`}
    >
      <div className="container courses">
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
          <div className="">
            {courses.length === 0 && (
              <p className="tw-text-base text-dark font-kalameh-num tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold tw-mt-3">
                موردی برای نمایش وجود ندارد.
              </p>
            )}
            {courses.map((item) => (
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
  );
}

/*

export const useCourses = () => {
  const [category, setCategory] = useState(
    new URL(window.location).searchParams.get('category[0]'),
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const {
    options,
    sort,
    is_free,
    filters: { course_types, academies },
  } = useSelector((state) => state.courses);
  const {
    courses,
    page: { current, total },
  } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(getSearchContent());
  }, []);

  useEffect(() => {
    dispatch(searchCourses(new URL(window.location).search));
    setCategory(new URL(window.location).searchParams.get('category[0]'));
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
              dispatch(addCoursesAcademyFilter(object));
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
              dispatch(addCoursesTypeFilter(object));
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
    url.searchParams.set('category[0]', category);
    console.log(academies);
    academies.forEach((item, index) => {
      url.searchParams.set(`academy[${index}]`, item.id);
    });
    course_types.forEach((item, index) => {
      url.searchParams.set(`type[${index}]`, item.id);
    });
    url.searchParams.set(`sortby`, sort);
    url.searchParams.set(`is_free`, is_free);
    url.searchParams.set(`page`, current);
    // console.log(url.search);
    history.push(`./${url.search}`);
  }, [academies, course_types, sort, is_free, current]);

  useEffect(() => {
    if (window.scollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, [current]);
};

*/
