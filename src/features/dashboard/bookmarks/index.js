import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../../common/Layout/dashboard';
import CourseCard from '../../../components/courses/CourseCard';
import JobCard from '../../../components/global/JobCard';
import { getDashboardBookmarks } from '../../../app/redux/actions/dashboardActions';

export default function Bookmarks() {
  const [section, setSection] = useState(1);
  const {
    bookmarks: { bookmark_courses, bookmark_jobs },
  } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardBookmarks());
  }, []);

  return (
    <Layout>
      <div className="tw-my-4 tw-relative">
        {/* Indicator Line */}
        <div
          className="tw-absolute bg-primary 2xl:tw-w-28 tw-w-20 tw-h-1 tw-top-0"
          style={{
            borderRadius: '0 0 12px 12px',
            right: section === 1 ? '25%' : '75%',
            transform: 'translateX(50%)',
            transition: 'right .7s ease-in-out',
          }}
        />
        {/* Tabs */}
        <div className="tw-rounded-xl tw-font-medium tw-grid tw-grid-cols-2 tw-place-items-center font-kalameh-num tw-w-full tw-py-4 2xl:tw-py-8 bg-primary-pale">
          <div
            className={
              section === 1
                ? 'tw-text-sm tw-cursor-pointer tw-font-medium 2xl:tw-text-xl text-blue'
                : 'tw-text-sm tw-cursor-pointer tw-font-normal 2xl:tw-text-xl 2xl:tw-font-medium text-black'
            }
            role="none"
            onClick={() => setSection(1)}
          >
            دوره‌های آموزشی
          </div>
          <div
            className={
              section === 2
                ? 'tw-text-sm tw-cursor-pointer tw-font-medium 2xl:tw-text-xl text-blue'
                : 'tw-text-sm tw-cursor-pointer tw-font-normal 2xl:tw-text-xl 2xl:tw-font-medium text-black'
            }
            role="none"
            onClick={() => setSection(2)}
          >
            فرصت‌های شغلی
          </div>
        </div>
      </div>
      <div className="tw-my-4" style={{ display: section === 1 ? 'block' : 'none' }}>
        <div className="tw-grid tw-grid-cols-1 tw-gap-4">
          {bookmark_courses.length === 0 && (
            <p className="tw-text-base text-dark font-kalameh-num tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold tw-mt-3">
              موردی برای نمایش وجود ندارد.
            </p>
          )}
          {bookmark_courses.map((item) => (
            <CourseCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              prices={item.prices}
              author={{ first_name: '', last_name: '', image: '' }}
              rating={item.rating.average}
              academy={item.academy}
              duration={item.duration}
              type={item.type}
              is_free={item.is_free}
              image={item.images.cover}
              discount={item.discount}
            />
          ))}
        </div>
      </div>
      <div className="tw-my-4" style={{ display: section === 2 ? 'block' : 'none' }}>
        {bookmark_jobs.length === 0 ? (
          <p className="tw-text-base text-dark font-kalameh-num tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold tw-mt-3">
            موردی برای نمایش وجود ندارد.
          </p>
        ) : (
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
            {bookmark_jobs.map((job) => (
              <JobCard key={job.id} props={job} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
