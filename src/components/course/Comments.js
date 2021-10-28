import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseComments } from '../../app/redux/actions/courseActions';

export default function Comments({ id }) {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getCourseComments(id));
  }, []);

  return (
    <div className="container">
      <p className="text-blue tw-text-center font-kalameh-num tw-text-2xl tw-font-extrabold lg:tw-text-xl lg:tw-font-bold 2xl:tw-text-4xl 2xl:tw-font-black">
        دیدگاه دانشجویان
      </p>
    </div>
  );
}
