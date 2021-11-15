import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../../components/jobs/Layout';
import Home from '../../components/jobs/Home';
import Search from '../../components/jobs/Search';

import {
  getJobsData,
  getJobsFilterOptions,
  getJobsSearchOptions,
  setJobsSection,
} from '../../app/redux/actions/jobsActions';

import './jobs.css';

export default function JobListPage() {
  const dispatch = useDispatch();
  const { section } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getJobsFilterOptions());
    if (new URL(window.location).search === '') {
      dispatch(setJobsSection(1));
      dispatch(getJobsData());
    } else {
      dispatch(setJobsSection(2));
      dispatch(getJobsSearchOptions());
    }
  }, [new URL(window.location).search]);

  return (
    <Layout>
      {section === 1 && <Home />}
      {section === 2 && <Search />}
    </Layout>
  );
}
