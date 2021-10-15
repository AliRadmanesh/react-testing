import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Layout from '../../common/Layout';
import SearchBar from '../../components/global/SearchBar';
import Checkbox from '../../common/template/Checkbox';

import './courses.css';

export default function CourseList() {
  useEffect(() => {
    // toast('hello');
  }, []);

  return (
    <Layout title="کورس‌ها" text="دوره‌های آموزشی">
      <div className="container courses">
        <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
          <div className="tw-hidden lg:tw-block">
            <SearchBar />
            <Checkbox text="فرادرس" />
          </div>
          <div className="">
            <h1>left</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
