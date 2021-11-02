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
import './course.css';

export default function Course() {
  const id = new URL(window.location).searchParams.get('id');

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
    },
    comments: {
      sort,
      page: { current },
    },
  } = useSelector((state) => state.course);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseData(id, sort, current));
  }, [sort, current]);

  return (
    <Layout>
      <Header
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
      />
      <Author instructors={instructors[0]} />
      <About description={description} />
      <Chapters topics={topics} topics_summary={topics_summary} />
      <div className="container 2xl:tw-py-16">
        <Recommended recommended_courses={recommended_courses} />
      </div>
      <UserComment user_comment={user_comment} />
      <Comments />
    </Layout>
  );
}
