import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import Layout from '../../common/Layout/chill';
import SearchBar from '../../components/global/SearchBar';
import Checkbox from '../../common/template/Checkbox';

import CourseCard from '../../components/courses/CourseCard';
import FilterMenuButton from '../../components/courses/FilterMenuButton';
import FilterMenuMobile from '../../components/courses/FilterMenuMobile';
import FilterMenuDesktop from '../../components/courses/FilterMenuDesktop';

import { getSearchContent } from '../../app/redux/actions/coursesActions';

import './courses.css';

export default function CourseList() {
  const dispatch = useDispatch();

  useEffect(() => {
    // toast('hello');
    dispatch(getSearchContent());
    console.log(window.innerHeight, window.innerWidth);
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
          <div className="tw-hidden lg:tw-block">
            <FilterMenuDesktop />
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
      <div>
        <FilterMenuMobile />
      </div>
      <FilterMenuButton />
    </Layout>
  );
}
