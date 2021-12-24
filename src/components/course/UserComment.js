import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import toast from 'react-hot-toast';
import { TextArea } from '../../common/template/TextArea';

import { createComment } from '../../app/redux/actions/courseActions';

import starFillIcon from '../../assets/icons/Star Fill.svg';
import starIcon from '../../assets/icons/Star.svg';
import instance from '../../app/instance';

export default function UserComment({ id }) {
  const [rate, setRate] = useState(0);
  const [message, setMessage] = useState('');
  const ref = useRef();

  const dispatch = useDispatch();
  const { is_anonymous } = useSelector((state) => state.course.data);
  const {
    user: { authenticated },
  } = useSelector((state) => state.auth);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (rate === 0) {
      toast.error('لطفا امتیاز خود را ثبت کنید.');
    } else {
      try {
        const data =
          message !== '' && message !== null
            ? { rating: rate, content: message }
            : { rating: rate };

        const res = await instance.post(`/api/v1/web/service/courses/${id}/comments/create`, data);
        if (res.status === 200 || res.status === 201) {
          toast.success('دیدگاه شما ثبت گردید.');
          dispatch({ type: 'CREATE_COMMENT' });
          // window.location.reload();
          dispatch({ type: 'RESET_COMMENTS' });
          dispatch({ type: 'SET_COMMENTS_LOADING' });
          const res1 = await instance.get(
            `api/v1/web/service/courses/${id}/comments/?sortby=${2}&page=${1}`,
          );
          setRate(0);
          setMessage('');
          // ref.current.value = '';
          dispatch({ type: 'GET_COURSE_COMMENTS', payload: res1.data.data.comments });
          if (res1.data.meta.last_page !== 1) {
            dispatch({
              type: 'COURSE_COMMENT_PAGE_TOTAL',
              payload: res1.data.meta.last_page,
            });
          }
        } else {
          toast.error('خطا هنگام ثبت بازخورد شما');
        }
      } catch (error) {
        const { data, status } = error.response;
      }
    }
  };

  useEffect(() => {
    if (document.querySelector('.stars')) document.querySelector('.stars').style.display = 'grid';
  }, []);

  return (
    <div className="container tw-my-4 2xl:tw-my-8">
      <p className="text-blue tw-text-center font-kalameh-num tw-text-xl tw-font-extrabold lg:tw-font-bold 2xl:tw-text-3xl 2xl:tw-font-black">
        دیدگاه شما
      </p>
      <div
        className="course-page-user-comment bg-white tw-p-4 tw-rounded-xl tw-shadow-md tw-w-full font-kalameh-num tw-mx-auto"
        style={{ maxWidth: '1000px' }}
      >
        {authenticated ? (
          <>
            <p className="tw-text-xs tw-text-center tw-font-normal text-dark 2xl:tw-text-base">
              شما می‌توانید دیدگاه خود را درباره این دوره با دیگر کاربران به اشتراک بگذارید.
            </p>

            <div
              className="tw-mx-auto tw-my-4 tw-w-1/3  lg:tw-w-3/4 "
              style={{ minWidth: '152px', maxWidth: '224px', direction: 'ltr' }}
            >
              <Rating
                className="tw-grid-cols-5 stars tw-justify-items-center"
                onChange={(value) => {
                  setRate(value);
                }}
                initialRating={rate}
                emptySymbol={<img src={starIcon} alt="" className="icon" />}
                fullSymbol={<img src={starFillIcon} alt="" className="icon" />}
              />
            </div>

            {rate !== 0 && (
              <p className="tw-text-xs tw-font-normal 2xl:tw-text-base tw-text-center text-dark">
                امتیاز شما برای این دوره {rate} از ۵ است؟
              </p>
            )}
            <form className="tw-mt-4" onSubmit={onSubmit}>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="دیدگاه خود را بنویسید..."
                className="tw-w-full tw-mb-2"
                // message={uiMessage}
              />
              <div className="tw-flex md:tw-justify-end">
                <button
                  type="submit"
                  className="button-primary tw-w-full md:tw-w-auto button-padding tw-text-center md:tw-ml-0"
                >
                  ارسال دیدگاه
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="tw-grid tw-justify-center">
            <p className="tw-text-sm text-dark font-kalameh-num tw-font-normal 2xl:tw-text-lg 2xl:tw-mb-2 tw-text-center">
              لطفا برای ارسال دیدگاه، وارد سایت شده یا ثبت‌نام کنید.
            </p>
            <Link
              to="/auth"
              className="button-primary tw-mx-auto tw-text-center tw-mt-4 tw-text-sm tw-font-medium font-kalameh-num 2xl:tw-text-lg 2xl:tw-font-semibold tw-mr-4"
              style={{ width: '200px', margin: '1rem auto 0' }}
            >
              ورود/ثبت‌نام
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

/* <div
  className="course-page-user-comment-stars tw-grid tw-grid-cols-5 tw-w-1/2  lg:tw-w-3/4 tw-mx-auto tw-my-4  tw-justify-items-center"
  style={{ minWidth: '152px', maxWidth: '224px', direction: 'ltr' }}
>
  <div className="icon star">
    <img src={starIcon} alt="" className="empty" />
    <img src={starFillIcon} alt="" className="fill" />
  </div>
  <img src={starIcon} alt="" className="icon" />
  <img src={starIcon} alt="" className="icon" />
  <img src={starIcon} alt="" className="icon" />
  <img src={starIcon} alt="" className="icon" />
</div>; */
