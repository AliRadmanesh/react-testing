import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MenuMobile from '../../components/global/MenuMobile';
import GridContainer from '../../components/home/GridContainer';
import Footer from '../../components/global/Footer';
import SearchBar from '../../components/home/SearchBar';

import { getHomePageData } from '../../app/redux/actions/homeActions';
import HomeMenuDesktop from '../../components/home/HomeMenuDesktop';
import CategoryContainer from '../../components/home/CategoryContainer';
import RecentPostsContainer from '../../components/home/RecentPostsContainer';
import CoursesContainer from '../../components/home/CoursesContainer';
import ScrollToTop from '../../components/global/ScrollToTop';
import RecommendedCoursesContainer from '../../components/home/RecommendedCoursesContainer';
import JobsContainer from '../../components/home/JobsContainer';
import { checkUser } from '../../app/redux/actions/headerActions';

const Home = () => {
  const { user_recommended_courses, user_recommended_jobs } = useSelector(
    (state) => state.home.data,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePageData());
    // eslint-disbale-next-line
  }, []);

  return (
    <div className="bg-light">
      <ScrollToTop />
      <MenuMobile />
      <div
        id="main-landing"
        className="tw-text-center main-landing top-shadow-inner tw-pt-4 tw-pb-2 md:tw-pt-16"
        style={{
          height: 'auto',
        }}
      >
        <HomeMenuDesktop />
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
      {user_recommended_courses && <RecommendedCoursesContainer />}
      {user_recommended_jobs && <JobsContainer />}
      <RecentPostsContainer />
      <CoursesContainer />
      <Footer />
    </div>
  );
};

export default Home;
