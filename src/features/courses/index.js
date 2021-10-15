import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Layout from '../../common/Layout';
import SearchBar from '../../components/global/SearchBar';
import Checkbox from '../../common/template/Checkbox';
import CourseCard from '../../components/courses/CourseCard';

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
          </div>
        </div>
        <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
          <div className="">
            <Checkbox text="فرادرس" />
          </div>
          <div className="">
            <CourseCard
              title="UI kit آموزش طراحی"
              description=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
...است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
              price="‏183,000 تومان"
              author={{ first_name: 'محمد', last_name: 'نادری', image: '' }}
              rating="4.6"
              academy="فرادرس"
              duration="18"
              type="آنلاین"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
