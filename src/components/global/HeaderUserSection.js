import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { checkUser, showUserHeaderData } from '../../app/redux/actions/headerActions';
import downIcon from '../../assets/icons/down arrow.svg';

export default function HeaderUserSection() {
  const { show, data } = useSelector((state) => state.header);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) dispatch(checkUser());
    // else dispatch(showUserHeaderData(true));
  }, []);

  return (
    <div>
      {!show ? (
        <div className="tw-flex tw-items-center">
          <Link to="https://google.com" className="tab tw-mx-4">
            ورود
          </Link>
          <Link to="https://google.com" className="tab button-primary">
            ثبت نام
          </Link>
        </div>
      ) : (
        <button className="tw-flex tw-py-0 tw-items-center">
          <img
            src={data.profile.image}
            alt=""
            className="tw-hidden md:tw-block tw-ml-2 user-avatar"
            style={{ borderRadius: '50%' }}
          />
          <p className="tw-text-sm tw-font-normal font-kalameh xl:tw-text-xl">
            {data.profile.first_name} {data.profile.last_name}{' '}
            <span className="tw-mr-2">
              <img src={downIcon} alt="" className="tw-inline-block icon" />
            </span>
          </p>
        </button>
      )}
    </div>
  );
}
