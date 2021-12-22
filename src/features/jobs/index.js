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

export default function Jobs() {
  const dispatch = useDispatch();
  const {
    section,
    search: { locations, categories },
  } = useSelector((state) => state.jobs);

  useEffect(() => {
    if (categories.length === 0 || locations.length === 0) {
      dispatch(getJobsSearchOptions());
    }
    dispatch(getJobsData());
  }, []);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}
