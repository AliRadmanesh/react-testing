import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MenuMobile from '../../components/global/MenuMobile';
import GridContainer from '../../components/home/GridContainer';
import Footer from '../../components/global/Footer';
import SearchBar from '../../components/home/SearchBar';
import { getHomePageData } from '../../app/redux/actions/homeActions';
import ScrollToTop from '../../components/global/ScrollToTop';
import CategoryMenuMobile from '../../components/global/CategoryMenuMobile';
import HomeMenuDesktop from '../../components/home/HomeMenuDesktop';
import CategoryContainer from '../../components/home/CategoryContainer';
import RecentPostsContainer from '../../components/home/RecentPostsContainer';
import CoursesContainer from '../../components/home/CoursesContainer';
import RecommendedCoursesContainer from '../../components/home/RecommendedCoursesContainer';
import JobsContainer from '../../components/home/JobsContainer';
import HomeColleagues from '../../components/home/HomeColleagues';
import ApplicationAd from '../../components/home/ApplicationAd';

// import data from '../../assets/data/db.json';

import './home.css';

function Home() {
  const { recommended_courses, categories } = useSelector((state) => state.home.data);
  const dispatch = useDispatch();

  // function fetchMockData() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(data), 2000);
  //   });
  // }

  useEffect(() => {
    dispatch(getHomePageData());
    // eslint-disbale-next-line
  }, []);

  return (
    <div className="bg-light">
      <ScrollToTop />
      <MenuMobile />
      <HomeMenuDesktop />
      <CategoryMenuMobile />
      <div
        id="main-landing"
        className="tw-text-center main-landing top-shadow-inner tw-flex-col tw-items-center tw-justify-center tw-h-auto tw-flex"
      >
        <div className="main-landing-content tw-w-full md:tw-w-1/2 md:tw-mx-auto">
          <div className="tw-mt-0 xl:tw-mt-24">
            <p className="text-blue tw-text-2xl 2xl:tw-text-5xl tw-font-extrabold font-kalameh tw-mb-8 2xl:tw-mb-16 tw-mt-6 md:tw-mt-0">
              کارساز، بستری برای پیشرفت
            </p>
            <p className="text-black tw-text-sm 2xl:tw-text-xl font-iranyekan tw-font-normal tw-w-4/5 tw-max-w-lg lg:tw-max-w-3xl tw-mx-auto tw-mb-8 2xl:tw-mb-16">
              کارساز بستری جامع برای پیشرفت است. در کارساز آموزش‌ها را با هم مقایسه کنید و
              مناسب‌ترین را با تخفیف ویژه‌ی کارساز بخرید و با استفاده از فرصت‌های شغلی کارساز شغل
              مناسب خود را بیابید.
            </p>
          </div>
          <GridContainer />
        </div>
      </div>
      <SearchBar />
      <CategoryContainer />
      {/* {user_recommended_courses.length > 0 && <RecommendedCoursesContainer />}
      {user_recommended_jobs.length > 0 && <JobsContainer />} */}
      {/* <RecentPostsContainer /> */}
      <CoursesContainer />
      <HomeColleagues />
      <ApplicationAd />
      <Footer />
    </div>
  );
}

export default Home;
