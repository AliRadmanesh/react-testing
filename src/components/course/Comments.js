import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import CommentItem from './CommentItem';
import Loading from '../global/Loading';
import { getCourseComments, pageComment } from '../../app/redux/actions/courseActions';
import arrow from '../../assets/icons/Arrow Down Gray.svg';

export default function Comments() {
  const dispatch = useDispatch();

  const {
    comments: {
      list,
      sort,
      page: { total, current },
      loading,
    },
  } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(
      getCourseComments(parseInt(window.location.href.split('course/')[1], 10), sort, current),
    );
  }, [current, sort]);

  useEffect(() => {
    // dispatch(getCourseComments(new URL(window.location).searchParams.get('id'), sort, current));
  }, [list]);

  if (loading) return <Loading />;
  return (
    <div className="container tw-my-4 2xl:tw-my-8 tw-py-6 2xl:tw-py-12">
      <div className="tw-mx-auto tw-w-full" style={{ maxWidth: '1000px' }}>
        <div className="tw-flex  tw-flex-col md:tw-flex-row tw-items-center tw-jsutify-center md:tw-justify-between">
          <p className="text-blue font-kalameh-num tw-font-extrabold tw-text-xl lg:tw-font-bold 2xl:tw-text-3xl 2xl:tw-font-black">
            دیدگاه دانشجویان
          </p>
          {/* <div>items</div> */}
        </div>
        {list.length === 0 && (
          <p className="tw-mt-4 text-gray tw-text-sm 2xl:tw-text-lg font-kalameh-num tw-font-normal 2xl:tw-font-medium">
            دیدگاهی برای این دوره ثبت نشده. اولین نفر باشید.
          </p>
        )}
        {list.map((ci) => (
          <CommentItem key={ci.id} props={ci} />
        ))}
      </div>
      {list.length !== 0 && (
        <div className="tw-grid tw-place-items-center tw-my-8 2xl:tw-my-16">
          <ReactPaginate
            onPageChange={({ selected }) => dispatch(pageComment(selected + 1))}
            breakLabel="..."
            nextLabel={
              <span className="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item">
                <img
                  src={arrow}
                  alt=""
                  style={{ width: '40%', height: 'auto', transform: 'rotate(90deg)' }}
                />
              </span>
            }
            pageCount={total}
            previousLabel={
              <span className="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item">
                <img
                  src={arrow}
                  alt=""
                  style={{ width: '40%', height: 'auto', transform: 'rotate(-90deg)' }}
                />
              </span>
            }
            initialPage={0}
            marginPagesDisplayed={1}
            containerClassName="tw-flex tw-items-center font-kalameh-num"
            pageClassName="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item"
            activeClassName="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item-active"
          />
        </div>
      )}
    </div>
  );
}
