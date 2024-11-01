import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../common/Layout/detail';
import instance from '../../app/instance';

import About from '../../components/course/About';
import Author from '../../components/course/Author';
import Chapters from '../../components/course/Chapters';
// import Comments from '../../components/course/Comments';
import Header from '../../components/course/Header';
import Recommended from '../../components/course/Recommended';
import UserComment from '../../components/course/UserComment';
import { getCourseData } from '../../app/redux/actions/courseActions';
import { hideSuggest } from '../../app/redux/actions/searchActions';
import './course.css';

export default function Course() {
  const [scroll, setScroll] = useState(window.scrollY);
  const {
    data: {
      title,
      images: { cover },
      description,
      description_summary,
      description_summary_string,
      topics,
      topics_summary,
      discount,
      is_free,
      prices,
      cashback,
      academy,
      type,
      start_datetime,
      end_datetime,
      duration_hours,
      duration_minutes,
      instructors,
      rating: { average },
      recommended_courses,
      is_purchased,
      is_bookmarked,
      user_comment,
      ref_url,
      ref_url_discount,
    },
    // comments: {
    //   sort,
    //   page: { current },
    // },
  } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const lastIndexofKa = window.location.href.lastIndexOf('ka');
  const courseId = window.location.href.substring(lastIndexofKa + 2);

  function scrollToTop() {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    dispatch(getCourseData(courseId));
    window.addEventListener('scroll', scrollToTop);
    if (window.innerWidth < 768)
      document.querySelector('.scroll-to-top-button').style.bottom = '5rem';

    return () => window.removeEventListener('scroll', scrollToTop);
  }, []);

  useEffect(() => {
    dispatch(getCourseData(courseId));
    dispatch(hideSuggest());
  }, [window.location.pathname]);

  // const affiliateCourse = async () => {
  //   try {
  //     const res = await instance.post(`/api/v1/app/service/courses/${courseId}/affiliate`);

  //     if (res.status === 200) {
  //       // history.push(res.data.data.affiliate.url);
  //       // window.location.href = res.data.data.affiliate.url;
  //       window.open(res.data.data.affiliate.url || ref_url, '_blank');
  //     } else {
  //       toast.error(res.data.message);
  //     }
  //   } catch (error) {
  //     const { status, message } = error.response;
  //     toast.error(message);
  //   }
  // };

  const openCourseLink = () => {
    toast.error('برای خرید آموزش‌ها باید وارد شوید یا ثبت‌نام کنید!');
    // if (
    //   window.localStorage.getItem('userToken') &&
    //   window.localStorage.getItem('userToken') !== ''
    // ) {
    //   affiliateCourse(courseId);
    // } else window.open(ref_url_discount || ref_url, '_blank');
  };

  return (
    <>
      <Layout>
        <Header
          id={courseId}
          image={cover}
          title={title}
          description_summary_string={description_summary_string}
          description_summary={description_summary}
          prices={prices}
          discount={discount}
          is_free={is_free}
          rating={average}
          academy={academy}
          is_purchased={is_purchased}
          is_bookmarked={is_bookmarked}
          duration_hours={duration_hours}
          duration_minutes={duration_minutes}
          start_datetime={start_datetime}
          end_datetime={end_datetime}
          type={type}
          cashback={cashback}
          ref_url={ref_url}
          ref_url_discount={ref_url_discount}
          openCourseLink={openCourseLink}
        />
        {/* <Author instructors={instructors[0]} /> */}
        <About description={description} />
        <Chapters topics={topics} topics_summary={topics_summary} />
        {/* <div className="container 2xl:tw-py-16">
          <Recommended recommended_courses={recommended_courses} />
        </div> */}
        <UserComment id={courseId} user_comment={user_comment} />
        {/* <Comments /> */}
      </Layout>
      <div
        className="tw-sticky tw-flex md:tw-hidden tw-justify-center tw-w-full tw-right-0 tw-px-4"
        style={{
          zIndex: '9999',
          bottom: scroll >= 100 ? '1rem' : '-4rem',
          transition: 'bottom .3s ease-in-out',
        }}
      >
        <button
          className="button-primary button-padding font-kalameh-num tw-mr-2 tw-w-full md:tw-w-auto tw-text-center"
          style={{ width: '100%' }}
          onClick={is_purchased ? null : openCourseLink}
        >
          {is_purchased ? 'خریداری شده' : 'خرید این دوره'}
        </button>
      </div>
    </>
  );
}
