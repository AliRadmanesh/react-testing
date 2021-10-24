import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../common/Layout/chill';
import SearchBar from '../../components/global/SearchBar';
import CourseCard from '../../components/courses/CourseCard';
import FilterMenuButton from '../../components/courses/FilterMenuButton';
import FilterMenuMobile from '../../components/courses/FilterMenuMobile';
import FilterMenuDesktop from '../../components/courses/FilterMenuDesktop';
import SortDropdown from '../../components/courses/SortDropdown';
import IsFreeDropdown from '../../components/courses/IsFreeDropdown';
import { getSearchContent } from '../../app/redux/actions/coursesActions';

import './courses.css';

export default function CourseList() {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        'https://develop.karsazapp.ir/api/v1/web/service/courses/search/?q=php&type[0]=2&is_free=1&academy[0]=3',
      );
      if (res.status === 200) {
        setList(res.data.data.courses);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // toast('hello');
    dispatch(getSearchContent(), getData());

    // eslint-disable-next-line
  }, []);

  return (
    <Layout title="کورس‌ها" text="دوره‌های آموزشی">
      <div className="container courses">
        <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
          <div className="tw-hidden lg:tw-block">
            <SearchBar />
          </div>
          <div className="tw-flex tw-items-center text-dark tw-flex-col lg:tw-flex-row lg:tw-justify-end">
            <p className="font-kalameh-num tw-text-xs tw-font-normal 2xl:tw-text-base tw-ml-4 tw-mb-4 lg:tw-mb-0 tw-self-start lg:tw-self-center">
              مرتب‌شده براساس:‌
            </p>
            <div className="tw-grid tw-gap-x-4 tw-grid-cols-2 lg:tw-flex tw-w-full lg:tw-w-auto">
              <div className="">
                <SortDropdown />
              </div>
              <div className="">
                <IsFreeDropdown />
              </div>
            </div>
          </div>
        </div>
        <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
          <div className="tw-hidden lg:tw-block">
            <FilterMenuDesktop />
          </div>
          <div className="">
            {list.map((item) => (
              <CourseCard
                key={item.id}
                title={item.title}
                description=""
                price={item.price}
                author={{ first_name: '', last_name: '', image: '' }}
                rating={item.rating.average}
                academy={item.academy.name}
                duration={item.duration}
                type={item.type}
                is_free={item.is_free}
                image={item.images.cover}
                discount={item.discount}
              />
            ))}
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
