import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import JobCard from '../global/JobCard';

export default function Home() {
  const { recommended, recent } = useSelector((state) => state.jobs);
  const {
    user: { authenticated },
  } = useSelector((state) => state.auth);
  return (
    <div className="bg-light container">
      <div className="tw-py-6 2xl:tw-py-16">
        <p className="text-blue font-kalameh-num tw-text-center tw-mb-8 2xl:tw-mb-16 tw-text-2xl tw-font-extrabold 2xl:tw-text-4xl 2xl:tw-font-black tw-max-w-4/5">
          جدیدترین فرصت های شغلی برای شما
        </p>
        {!authenticated && (
          <div className="tw-grid tw-justify-center">
            <p className="tw-text-sm text-dark font-kalameh-num tw-font-normal 2xl:tw-text-lg">
              کاربر گرامی، برای دیدن فرصت‌های شغلی پیشنهادی وارد شوید .
            </p>
            <Link
              to="/auth"
              className="button-primary tw-mx-auto tw-text-center tw-mt-4 tw-text-sm tw-font-medium font-kalameh-num 2xl:tw-text-lg 2xl:tw-font-semibold tw-mr-4"
              style={{ width: '200px', margin: '1rem auto 0' }}
            >
              ورود/ثبت‌نام
            </Link>
          </div>
        )}
        {recommended && recommended.length !== 0 && (
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4">
            {recommended.map((job) => (
              <JobCard key={job.id} props={job} />
            ))}
          </div>
        )}
      </div>
      {recent.length !== 0 && (
        <div className="tw-py-6 2xl:tw-py-16">
          <p className="text-blue font-kalameh-num tw-text-center tw-mb-8 2xl:tw-mb-16 tw-text-2xl tw-font-extrabold 2xl:tw-text-4xl 2xl:tw-font-black tw-max-w-4/5">
            آخرین فرصت‌های شغلی
          </p>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4">
            {recent.map((job) => (
              <JobCard key={job.id} props={job} />
            ))}
          </div>
          <div className="tw-flex tw-mt-4 tw-justify-center">
            <Link to="/jobs/?page=1" className="button-secondary tw-mt-6 lg:tw-mt-10">
              مشاهده همه
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
