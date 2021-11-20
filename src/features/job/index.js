import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../common/Layout/detail';
import Header from '../../components/job/Header';
import StikcyBox from '../../components/job/StikcyBox';
import RelatedJobsContainer from '../../components/job/RelatedJobsContainer';
import ConditionsContainer from '../../components/job/ConditionsContainer';
import Company from '../../components/job/Company';
import Requirements from '../../components/job/Requirements';
import Description from '../../components/job/Description';
import RecommendedCourses from '../../components/job/RecommendedCourses';

import './job.css';

import { getJobData } from '../../app/redux/actions/jobActions';

export default function JobList() {
  const dispatch = useDispatch();
  const [id, setId] = useState(window.location.href.split('job/')[1]);
  const { data } = useSelector((state) => state.job);
  useEffect(() => {
    dispatch(getJobData(id));
    if (window.innerWidth < 768)
      document.querySelector('.scroll-to-top-button').style.bottom = '5rem';
  }, []);

  return (
    <>
      <Layout>
        <Header data={data} />
        <div className="tw-grid tw-mt-12 job-gridder tw-gap-x-4 container tw-items-start">
          <div className="">
            <Company data={data} />
            <Requirements data={data} />
            <Description data={data} />
            <ConditionsContainer data={data} />
          </div>
          <StikcyBox data={data} />
        </div>
        <div className="container">
          <RelatedJobsContainer data={data} />
        </div>

        <RecommendedCourses data={data} />
      </Layout>
      <div
        className="tw-sticky tw-flex md:tw-hidden tw-justify-center tw-bottom-4 tw-w-full tw-right-0 tw-px-4"
        style={{ zIndex: '9999' }}
      >
        <Link
          to={{ pathname: data.ref_url }}
          target="_blank"
          className="button-primary button-padding font-kalameh-num tw-mr-2 tw-w-full md:tw-w-auto tw-text-center"
          style={{ width: '100%' }}
        >
          خرید این دوره
        </Link>
      </div>
    </>
  );
}

// Headings
/*
<p className="text-blue tw-mr-2 tw-text-base tw-font-semibold 2xl:tw-text-2xl 2xl:tw-font-black tw-mb-4">
        شرایط احراز شغل
      </p>
*/
