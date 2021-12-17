import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../../../components/jobs/Layout';
import Search from '../../../components/jobs/Search';

import {
  getJobsData,
  getJobsFilterOptions,
  getJobsSearchOptions,
  setJobsSection,
} from '../../../app/redux/actions/jobsActions';

import '../jobs.css';

export default function JobSearch() {
  const dispatch = useDispatch();
  const { section } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getJobsSearchOptions());
  }, []);

  return (
    <Layout>
      <Search />
    </Layout>
  );
}
