/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Layout from '../../../components/jobs/Layout';
import Search from '../../../components/jobs/Search';
import instance from '../../../app/instance';
import {
  getJobsData,
  getJobsFilterOptions,
  getJobsSearchOptions,
  setJobsSection,
  setJobsCategory,
  setJobsLocation,
  searchJobsQuery,
  searchJobsNoQuery,
  clearAllJobsAdustments,
  addJobsContractFilter,
  addJobsSalaryFilter,
  addJobsExperienceFilter,
} from '../../../app/redux/actions/jobsActions';

import '../jobs.css';

export default function JobSearch() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    search: { categories, locations, options, filters },
  } = useSelector((state) => state.jobs);

  const setFilters = () => {
    // console.log('set filters');
    dispatch(clearAllJobsAdustments());
    const params = new URL(window.location).searchParams;
    // eslint-disable-next-line no-restricted-syntax
    for (const pair of params) {
      if (pair[0].includes('contract_type')) {
        options.contract_types.map((type) => {
          if (type.id === parseInt(pair[1], 10)) {
            dispatch(addJobsContractFilter({ id: type.id, name: type.name }));
          }
        });
      }
      if (pair[0].includes('salary_range')) {
        options.salary_ranges.map((salary) => {
          if (salary.id === parseInt(pair[1], 10)) {
            dispatch(addJobsSalaryFilter({ id: salary.id, title: salary.title }));
          }
        });
      }
      if (pair[0].includes('work_experience')) {
        options.work_experiences.map((experience) => {
          if (experience.id === parseInt(pair[1], 10)) {
            dispatch(addJobsExperienceFilter({ id: experience.id, title: experience.title }));
          }
        });
      }
    }
  };

  const setOptions = () => {
    // console.log('set box options');
    const params = new URL(window.location).searchParams;
    for (const pair of params) {
      if (pair[0].includes('category')) {
        categories.map((item) => {
          if (item.value == pair[1]) {
            dispatch(setJobsCategory({ name: item.label, id: item.value }));
          }
        });
      }
    }
    const p = parseInt(params.get('province'), 10) || null;
    const c = parseInt(params.get('city[0]'), 10) || null;
    if (c === null) {
      locations.map((item) => {
        if (item.value === p && item.city === null) {
          console.log(item);
          dispatch(
            setJobsLocation({
              id: item.value,
              name: item.label,
              city: item.city,
              province: item.province,
            }),
          );
        }
      });
    } else {
      locations.map((item) => {
        if (item.value === c && item.city !== null) {
          dispatch(
            setJobsLocation({
              id: item.value,
              name: item.label,
              city: item.city,
              province: item.province,
            }),
          );
        }
      });
    }
    if (c !== null && p !== null) {
      toast.error('ناسازگاری در انتخاب محل. لطفا یکی از کد‌های محل های ارائه شده را انتخاب کنید.');
    }
  };

  useEffect(() => {
    setFilters();
  }, [options]);

  useEffect(() => {
    setOptions();
  }, [locations, categories]);

  useEffect(() => {
    if (new URL(window.location).searchParams.get('q')) {
      dispatch(searchJobsQuery(window.location.search));
    } else {
      dispatch(searchJobsNoQuery(window.location.search));
    }
    if (categories.length === 0 || locations.length === 0) {
      dispatch(getJobsSearchOptions());
    } else {
      setOptions();
    }
    if (
      filters.work_experiences.length === 0 ||
      filters.salary_ranges.length === 0 ||
      filters.contract_types.length === 0
    ) {
      dispatch(getJobsFilterOptions());
    } else {
      setFilters();
    }
  }, [window.location.search]);

  // useEffect(() => {
  //   document.addEventListener('click', () => {
  //     const url = new URL(window.location);
  //     url.searchParams.set('category[0]', parseInt(url.searchParams.get('category[0]'), 10) + 1);
  //     history.push(`./${url.search}`);
  //   });
  // }, []);

  return (
    <Layout>
      <Search />
    </Layout>
  );
}
