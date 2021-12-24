import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { checkUser, showUserMenu } from '../../app/redux/actions/headerActions';
import downIcon from '../../assets/icons/down arrow.svg';

export default function HeaderUserSection() {
  const { show, data, fetched, showMenu } = useSelector((state) => state.header);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) dispatch(checkUser());
    // else dispatch(showUserHeaderData(true));

    // eslint-disable-next-line
  }, [window.localStorage.getItem('userToken')]);

  return (
    <>
      <div className="tw-justify-end">
        {!show ? (
          <div className="tw-flex tw-items-center">
            <Link
              to="/auth"
              className="button-primary tw-text-sm tw-font-medium font-kalameh-num 2xl:tw-text-lg 2xl:tw-font-semibold tw-mr-4"
            >
              ورود / ثبت نام
            </Link>
          </div>
        ) : (
          <button
            className="tw-flex tw-p-0 tw-items-center"
            onClick={() => dispatch(showUserMenu(true))}
          >
            <img
              src={data.profile.image}
              alt=""
              className="tw-hidden md:tw-block tw-ml-2 user-avatar"
              style={{ borderRadius: '50%' }}
            />
            <p className="tw-text-sm tw-font-normal font-kalameh 2xl:tw-text-lg text-black">
              {data.profile.first_name} {data.profile.last_name}{' '}
              <span className="tw-mr-2">
                <img src={downIcon} alt="" className="tw-inline-block icon" />
              </span>
            </p>
          </button>
        )}
      </div>
    </>
  );
}
