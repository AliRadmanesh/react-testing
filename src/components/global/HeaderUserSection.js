import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { checkUser, showUserMenu } from '../../app/redux/actions/headerActions';
import downIcon from '../../assets/icons/down arrow.svg';

export default function HeaderUserSection() {
  const { show, data, fetched, showMenu } = useSelector((state) => state.header);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!fetched) dispatch(checkUser());
  //   // else dispatch(showUserHeaderData(true));

  //   // eslint-disable-next-line
  // }, [window.localStorage.getItem('userToken')]);

  return (
    <div className="tw-justify-end">
      <div className="tw-flex tw-items-center">
        <Link
          to="/auth"
          className="button-primary tw-text-sm tw-font-medium font-kalameh-num 2xl:tw-text-lg 2xl:tw-font-semibold tw-mr-4"
        >
          ورود / ثبت نام
        </Link>
      </div>
    </div>
  );
}
