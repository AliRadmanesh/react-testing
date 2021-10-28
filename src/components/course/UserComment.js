import React, { useState, useEffect, useRef } from 'react';
import Rating from 'react-rating';

import { TextArea } from '../../common/template/TextArea';

import starFillIcon from '../../assets/icons/Star Fill.svg';
import starIcon from '../../assets/icons/Star.svg';

export default function UserComment({ user_comment }) {
  const [rate, setRate] = useState(0);
  const [state, setState] = useState(null);
  const [message, setMessage] = useState('');
  const [uiMessage, setUiMessage] = useState('دیدگاه شما را خواهیم دید...');

  const ref = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === '') {
      setState('error');
      // setUiMessage('لطفا دیدگاه خود را برای مان بنویسید');
    } else {
      console.log(message);
    }
  };

  useEffect(() => {
    document.querySelector('.stars').style.display = 'grid';
  }, []);

  return (
    <div className="container tw-my-4 2xl:tw-my-8">
      <p className="text-blue tw-text-center font-kalameh-num tw-text-2xl tw-font-extrabold lg:tw-text-xl lg:tw-font-bold 2xl:tw-text-4xl 2xl:tw-font-black">
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
            onClick={(value) => {
              setRate(value);
            }}
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
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="دیدگاه خود را بنویسید..."
            ref={ref}
            state={state}
            onBlur={() => {
              if (message !== '') {
                setState('success');
                // setUiMessage('دیدگاه شما را خواهیم دید...');
              } else {
                setState('warning');
                // setUiMessage('دیدگاه خود را ننوشتید');
              }
            }}
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
