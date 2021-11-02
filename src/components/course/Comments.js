import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentItem from './CommentItem';
import { getCourseComments } from '../../app/redux/actions/courseActions';

export default function Comments({ user_comment }) {
  const dispatch = useDispatch();

  const {
    comments: {
      list,
      page: { total, current },
    },
  } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getCourseComments(new URL(window.location).searchParams.get('id')));
  }, []);

  return (
    <div className="container tw-my-4 2xl:tw-my-8 tw-py-6 2xl:tw-py-12">
      <div className="tw-mx-auto tw-w-full" style={{ maxWidth: '1000px' }}>
        <div className="tw-flex  tw-flex-col md:tw-flex-row tw-items-center tw-jsutify-center md:tw-justify-between">
          <p className="text-blue font-kalameh-num tw-text-2xl tw-font-extrabold lg:tw-text-xl lg:tw-font-bold 2xl:tw-text-4xl 2xl:tw-font-black">
            دیدگاه دانشجویان
          </p>
          {/* <div>items</div> */}
        </div>
        {list.map((ci) => (
          <CommentItem key={ci.id} props={ci} />
        ))}
      </div>
    </div>
  );
}
