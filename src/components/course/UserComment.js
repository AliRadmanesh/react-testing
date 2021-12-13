import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from 'react-rating';
import toast from 'react-hot-toast';
import { TextArea } from '../../common/template/TextArea';

import { createComment } from '../../app/redux/actions/courseActions';

import starFillIcon from '../../assets/icons/Star Fill.svg';
import starIcon from '../../assets/icons/Star.svg';
import instance from '../../app/instance';

export default function UserComment({ id }) {
  const [rate, setRate] = useState(0);
  const [state, setState] = useState(null);
  const [message, setMessage] = useState('');
  const ref = useRef();

  const dispatch = useDispatch();
  const { is_anonymous } = useSelector((store) => store.course.data);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (rate === 0) {
      toast.error('لطفا نمره خود را ثبت کنید.');
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
            `api/v1/web/service/courses/${id}/comments/?sort=${2}&page=${1}`,
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
    document.querySelector('.stars').style.display = 'grid';
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
          <TextArea
            ref={ref}
            onChange={(e) => setMessage(e.target.value)}
            value={message || null}
            placeholder="دیدگاه خود را بنویسید..."
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
