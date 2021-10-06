import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import MenuMobile from '../../components/global/MenuMobile';
import GridContainer from '../../components/home/GridContainer';
import Footer from '../../components/global/Footer';
import SearchBar from '../../components/home/SearchBar';

import { getHomePageData } from '../../app/redux/actions/homeActions';
import MenuDesktop from '../../components/global/MenuDesktop';
import CategoryContainer from '../../components/home/CategoryContainer';
import RecentPostsContainer from '../../components/home/RecentPostsContainer';
import CoursesContainer from '../../components/home/CoursesContainer';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePageData());
    // eslint-disbale-next-line
  }, []);

  return (
    <div className="bg-light">
      <MenuMobile />
      <div
        id="main-landing"
        className="tw-text-center main-landing top-shadow-inner tw-pt-4 tw-pb-2 md:tw-pt-16"
        style={{
          height: 'auto',
        }}
      >
        <MenuDesktop />
        <div className="main-landing-content tw-w-full md:tw-w-1/2 md:tw-mx-auto tw-pt-6 lg:tw-pt-8 xl:tw-pt-12">
          <div className="" style={{}}>
            <h1 className="title-primary text-blue">کارساز، بستری برای یادگیری</h1>
            <p className="text-primary tw-mx-2 tw-mt-2 lg:tw-mt-4">
              {' '}
              کارساز بستر جامع برای یادگیری میباشد، در کارساز در هر زمینه ای آموزش ببینید و از فرصت
              های شغلی کارساز برای اشتغال خود به سادگی استفاده کنید
            </p>
          </div>
          <GridContainer />
        </div>
      </div>
      <SearchBar />
      <CategoryContainer />
      <RecentPostsContainer />
      <CoursesContainer />
      <Footer />
    </div>
  );
};

export default Home;

/*
    <div
        className="bg-light border-smooth tw-py-2 tw-px-4 lg:tw-px-6 tw-mx-2 tw-w-auto tw-flex"
        style={{gridArea: 'card-1'}}
    >
        <img className="tw-opacity-40" src={studentIcon} alt=""/>
        <div className="tw-flex tw-flex-col tw-mr-6">
            <h3 className="text-blue">{student}</h3>
            <p className="text-primary">دانشجو</p>
        </div>
    </div>
    */
