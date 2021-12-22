import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../../common/Layout/dashboard';
import instance from '../../../app/instance';

import {
  getDashboardFavoritesInterests,
  getDashboardFavoritesLists,
  addDashboardFavoritesInterestsCourses,
  addDashboardFavoritesInterestsJobs,
  removeDashboardFavoritesInterestsCourses,
  removeDashboardFavoritesInterestsJobs,
  updateDashboardFavoriteInterest,
} from '../../../app/redux/actions/dashboardActions';

const SubFavtoriteItem = ({ props }) => {
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
    <>
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
    </>
  );
};

// eslint-disable-next-line consistent-return
const FavtoriteItem = ({ props, section }) => {
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
};

export default function Favorites() {
  const [categories, setCategories] = useState([]);

  const {
    favorites: { jobs, courses },
  } = useSelector((state) => state.dashboard);

  const onUpdate = async () => {
    const jobArr = [];
    jobs.interested.list.map((item) => jobArr.push(item.id));
    const courseArr = [];
    courses.interested.list.map((item) => courseArr.push(item.id));

    try {
      const data = {
        favorite_course_categories: JSON.stringify(courseArr),
        favorite_job_categories: JSON.stringify(jobArr),
      };
      const res = await instance.post('/api/v1/web/service/users/dashboard/favorites', data);
      if (res.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      const { status, data } = error.response;
      if (status === 401)
        toast.error('کاربری گرامی، برای دریافت اطلاعات خود باید وارد شده یا ثبت‌نام کنید.');
      if (status === 404) toast.error('اطلاعاتی دریافت نشد.');
      else toast.error(data.message);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (!jobs.interests.fetched || !courses.interests.fetched)
      dispatch(getDashboardFavoritesLists());
  }, []);

  useEffect(() => {
    if (window.location.href.includes('/dashboard/favorites')) {
      dispatch(getDashboardFavoritesInterests());
    }
  }, [window.location.href]);

  return (
    <Layout>
      <p className="2xl:tw-text-2xl 2xl:tw-font-black text-blue font-kalameh-num tw-font-bold tw-text-base">
        علاقه‌مندی‌ها
      </p>
      <p className="2xl:tw-text-base tw-text-xs tw-font-normal font-kalameh-num text-black">
        کاربر گرامی شما می توانید با انتخاب حوزه های مورد علاقه برای آموزش و شغل از آخرین و جدید
        ترین پیشنهاد های آموزشی و کاری برخوردار شوید.
      </p>
      <section className="tw-py-16">
        <p className="tw-text-sm tw-font-medium text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4 font-kalameh-num">
          آموزشی
        </p>
        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-6">
          {courses.interests.list.map((item) => (
            <FavtoriteItem props={item} key={item.id} section="courses" />
          ))}
        </div>
      </section>
      <section className="tw-py-16 tw-border-b tw-border-gray-200">
        <p className="tw-text-sm tw-font-medium text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4 font-kalameh-num">
          کاری
        </p>
        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-6">
          {jobs.interests.list.map((item) => (
            <FavtoriteItem props={item} key={item.id} section="jobs" />
          ))}
        </div>
      </section>
      <div className="tw-flex md:tw-justify-center">
        <button
          onClick={() => onUpdate()}
          className="button-primary button-padding tw-text-sm tw-font-medium tw-w-full 2xl:tw-text-xl 2xl:tw-font-semibold tw-text-center md:tw-w-1/2 xl:tw-w-1/3"
        >
          ذخیره علاقه‌مندی‌ها
        </button>
      </div>
    </Layout>
  );
}
