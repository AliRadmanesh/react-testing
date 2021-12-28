import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addDashboardFavoritesInterestsCourses,
  removeDashboardFavoritesInterestsCourses,
} from '../../../app/redux/actions/dashboardActions';

export default function FavoritesCourseItem({ props, section }) {
  const [selected, setSelected] = useState(false);
  const { name, sub, image, id } = props;

  const {
    favorites: { jobs },
  } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();

  useEffect(() => {
    if (jobs.interested.fetched) {
      // eslint-disable-next-line array-callback-return
      jobs.interested.list.map((item) => {
        if (item.id === id && section === 'jobs') setSelected(true);
      });
    }
  }, []);

  const onClick = () => {
    setSelected(!selected);

    if (!selected) dispatch(addDashboardFavoritesInterestsJobs({ id, name }));
    else dispatch(removeDashboardFavoritesInterestsJobs(id));
  };

  // eslint-disable-next-line consistent-return
  const renderFavItems = () => {
    switch (section) {
      case 'courses': {
        return (
          <>
            <div
              role="none"
              className="tw-inline-grid tw-relative tw-place-items-center lg:tw-h-24 tw-h-16 tw-cursor-pointer tw-rounded-xl"
              style={{
                background:
                  // selected ? 'rgba(200,200,200,.5)' :
                  'rgba(0,0,0,.75)',
                transition: 'all .5s ease-in-out',
                boxShadow: selected ? '0 0 0 4px white,  0 0 0 8px #118AB2' : 'none',
              }}
              onClick={() => setSelected(!selected)}
            >
              <img
                src={image}
                alt=""
                className="tw-absolute tw-right-4"
                style={{ width: '36px', height: '36px', top: '50%', transform: 'translateY(-50%)' }}
              />
              <p
                className="text-white font-kalameh-num tw-text-xs tw-font-normal 2xl:tw-text-base"
                style={{
                  color:
                    // selected ? '#222' :
                    '#eee',
                  transition: 'all .5s ease-in-out',
                }}
              >
                {name}
              </p>
            </div>
            {selected && sub.map((item) => <SubFavtoriteItem props={item} key={item.id} />)}
          </>
        );
      }
      case 'jobs': {
        return (
          <>
            <div
              role="none"
              className="tw-inline-grid tw-relative tw-place-items-center lg:tw-h-24 tw-h-16 tw-cursor-pointer tw-rounded-xl"
              style={{
                background: selected ? '#118AB2' : 'rgba(0,0,0,.75)',
                transition: 'all .5s ease-in-out',
              }}
              onClick={onClick}
            >
              {/* <img
                src={image}
                alt=""
                className="tw-absolute tw-right-4"
                style={{ width: '36px', height: '36px', top: '50%', transform: 'translateY(-50%)' }}
              /> */}
              <p
                className="text-white font-kalameh-num tw-text-xs tw-font-normal 2xl:tw-text-base"
                style={{
                  color: '#eee',
                  transition: 'all .5s ease-in-out',
                }}
              >
                {name}
              </p>
            </div>
          </>
        );
      }
      default:
        break;
    }
  };

  return <>{renderFavItems()}</>;
}
