import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addDashboardFavoritesInterestsCourses,
  removeDashboardFavoritesInterestsCourses,
} from '../../../app/redux/actions/dashboardActions';

function SubFavtoriteItem({ props }) {
  const [selected, setSelected] = useState(false);
  const { name, id } = props;
  const {
    favorites: { courses },
  } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();

  useEffect(() => {
    // if (jobs.interested.fetched) {
    //   // eslint-disable-next-line array-callback-return
    //   jobs.interested.list.map((item) => {
    //     if (item.id === id && section === 'jobs') setSelected(true);
    //   });
    // }
    if (courses.interested.fetched) {
      // eslint-disable-next-line array-callback-return
      courses.interested.list.map((item) => {
        if (item.id === id) setSelected(true);
      });
    }
  }, []);

  const onClick = () => {
    setSelected(!selected);

    // if (section === 'courses') {
    if (!selected) dispatch(addDashboardFavoritesInterestsCourses({ id, name }));
    else dispatch(removeDashboardFavoritesInterestsCourses(id));
    // }

    // if (section === 'jobs') {
    //   if (!selected) dispatch(addDashboardFavoritesInterestsJobs({ id, name }));
    //   else dispatch(removeDashboardFavoritesInterestsJobs(id));
    // }
  };

  return (
    <div
      role="none"
      className="tw-grid tw-relative tw-place-items-center lg:tw-h-24 tw-h-16 tw-cursor-pointer tw-rounded-xl"
      style={{
        background: selected ? '#118AB2' : 'rgba(0,0,0,.75)',
        transition: 'background .5s ease-in-out',
      }}
      onClick={onClick}
    >
      <p className="text-white font-kalameh-num tw-text-xs tw-font-normal 2xl:tw-text-base">
        {name}
      </p>
    </div>
  );
}

export default SubFavtoriteItem;
