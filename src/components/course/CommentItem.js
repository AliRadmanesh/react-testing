import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Rating from 'react-rating';

import starFillIcon from '../../assets/icons/Star Fill.svg';
import starIcon from '../../assets/icons/Star.svg';
import likeIcon from '../../assets/icons/Like/like-gray.svg';
import dislikeIcon from '../../assets/icons/Like/dislike-gray.svg';
import likedIcon from '../../assets/icons/Like/like-green.svg';
import dislikedIcon from '../../assets/icons/Like/dislike-red.svg';

import { likeComment, dislikeComment } from '../../app/redux/actions/courseActions';

function CommentItem({ props }) {
  const {
    content,
    created_at,
    id,
    is_anonymous,
    is_participant,
    like: { like, dislike, user_like, user_dislike },
    rating,
    user: {
      profile: { first_name, last_name, image },
    },
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelectorAll('.comment-stars').forEach((item) => {
      item.style.display = 'grid';
    });
  }, []);

  return (
    <div className="tw-p-4 bg-white tw-shadow tw-my-4 tw-rounded-xl font-kalameh-num">
      <div className="tw-flex tw-items-start tw-justify-between">
        <div className="tw-flex tw-items-center">
          <img src={image} alt="" className="avatar tw-rounded-xl" />
          <div className="tw-mr-2 tw-flex tw-flex-col md:tw-flex-row">
            <p className="tw-text-sm tw-font-normal text-dark 2xl:tw-text-base md:tw-ml-4">
              {first_name} {last_name}
            </p>
            <p className="tw-text-xs tw-font-normal text-gray 2xl:tw-text-sm font-iranyekan-num tw-border-gray-700 md:tw-border-r md:tw-pr-4">
              {created_at}
            </p>
          </div>
        </div>
        <div className="tw-flex">
          <Rating
            readonly={true}
            initialRating={rating}
            className="tw-grid-cols-5 tw-gap-x-1 md:tw-gap-x-2 tw-justify-items-center comment-stars"
            emptySymbol={<img src={starIcon} alt="" className="icon" />}
            fullSymbol={<img src={starFillIcon} alt="" className="icon" />}
          />
          <div className="md:tw-flex tw-jsutify-center tw-items-center tw-hidden font-kalameh-num">
            <button
              className="tw-flex tw-items-center tw-p-0 tw-mx-2"
              onClick={() =>
                dispatch(likeComment(parseInt(window.location.href.split('course/')[1], 10), id))
              }
            >
              <img src={user_like === 1 ? likedIcon : likeIcon} alt="" className="tw-ml-2" />
              <span className="font-kalameh-num tw-text-xs text-dark 2xl:tw-text-base">{like}</span>
            </button>
            <button
              className="tw-flex tw-items-center tw-p-0 tw-mx-2"
              onClick={() =>
                dispatch(dislikeComment(parseInt(window.location.href.split('course/')[1], 10), id))
              }
            >
              <img
                src={user_dislike === 1 ? dislikedIcon : dislikeIcon}
                alt=""
                className="tw-ml-2"
              />
              <span className="font-kalameh-num tw-text-xs text-dark 2xl:tw-text-base">
                {dislike}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="tw-my-4 2xl:tw-my-6">
        <p className="tw-text-sm tw-font-normal text-gray font-iranyekan-num 2xl:tw-text-lg">
          {content}
        </p>
      </div>
      <div className="tw-flex tw-jsutify-center tw-items-center md:tw-hidden font-kalameh-num">
        <button
          className="tw-flex tw-items-center tw-p-0 tw-mx-2"
          onClick={() =>
            dispatch(likeComment(parseInt(window.location.href.split('course/')[1], 10), id))
          }
        >
          <img src={user_like === 1 ? likedIcon : likeIcon} alt="" className="tw-ml-2" />
          <span className="font-kalameh-num tw-text-xs text-dark 2xl:tw-text-base">{like}</span>
        </button>
        <button
          className="tw-flex tw-items-center tw-p-0 tw-mx-2"
          onClick={() =>
            dispatch(dislikeComment(parseInt(window.location.href.split('course/')[1], 10), id))
          }
        >
          <img src={user_dislike === 1 ? dislikedIcon : dislikeIcon} alt="" className="tw-ml-2" />
          <span className="font-kalameh-num tw-text-xs text-dark 2xl:tw-text-base">{dislike}</span>
        </button>
      </div>
    </div>
  );
}

export default CommentItem;
