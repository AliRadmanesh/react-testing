import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../common/Layout/detail';
import instance from '../../app/instance';

import About from '../../components/course/About';
import Author from '../../components/course/Author';
import Chapters from '../../components/course/Chapters';
import Comments from '../../components/course/Comments';
import Header from '../../components/course/Header';
import Recommended from '../../components/course/Recommended';
import UserComment from '../../components/course/UserComment';
import { getCourseData } from '../../app/redux/actions/courseActions';
import { hideSuggest } from '../../app/redux/actions/searchActions';
import './course.css';

export default function Course() {
  const [scroll, setScroll] = useState(window.scrollY);

  const [id, setId] = useState(window.location.href.split('course/')[1]);
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
    comments: {
      sort,
      page: { current },
    },
  } = useSelector((state) => state.course);
  let price = 0;
  if (prices !== null) {
    price = prices.original.price;
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseData(id));
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    if (window.innerWidth < 768)
      document.querySelector('.scroll-to-top-button').style.bottom = '5rem';
  }, []);

  useEffect(() => {
    dispatch(getCourseData(window.location.href.split('course/')[1]));
    dispatch(hideSuggest());
  }, [window.location.href.split('course/')[1]]);

  const openCourseLink = () => {
    window.open(ref_url_discount || ref_url, '_blank');
  };

  return (
    <>
      <Layout>
        <Header
          id={id}
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
        />
        <Author instructors={instructors[0]} />
        <About description={description} />
        <Chapters topics={topics} topics_summary={topics_summary} />
        <div className="container 2xl:tw-py-16">
          <Recommended recommended_courses={recommended_courses} />
        </div>
        <UserComment id={id} user_comment={user_comment} />
        <Comments id={id} />
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
