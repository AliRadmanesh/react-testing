import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../common/Layout/detail';

export default function JobList() {
  const dispatch = useDispatch();

  return (
    <>
      <Layout>
        <h1>Job Page</h1>
      </Layout>
      {/* {!is_purchased && (
        <div
          className="tw-sticky tw-flex md:tw-hidden tw-justify-center tw-bottom-4 tw-w-full tw-right-0 tw-px-4"
          style={{ zIndex: '9999' }}
        >
          <button
            className="button-primary button-padding font-kalameh-num tw-mr-2 tw-w-full md:tw-w-auto tw-text-center"
            style={{ width: '100%' }}
          >
            خرید این دوره
          </button>
        </div>
      )} */}
    </>
  );
}
