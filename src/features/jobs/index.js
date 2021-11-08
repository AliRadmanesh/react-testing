import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../../components/jobs/Layout';
import Home from '../../components/jobs/Home';

import { getJobsData } from '../../app/redux/actions/jobsActions';

import './jobs.css';

export default function JobListPage() {
  const dispatch = useDispatch();
  const { section } = useSelector((state) => state.jobs);

  useEffect(() => {
    if (new URL(window.location).search === '') {
      dispatch(getJobsData());
    }
  }, [new URL(window.location).search]);

  return (
    <Layout>
      {section === 1 && <Home />}
      {section === 2 && (
        <div>
          <h1>Job search</h1>
        </div>
      )}
    </Layout>
  );
}
